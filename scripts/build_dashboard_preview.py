"""Build offline fallback from the real UI and the unchanged Code.gs calculation.
Only Google service IO and transport are mocked; no second KPI implementation.
"""
import json
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
STARTER = ROOT / 'materials/workshop/starter-dashboard'
fixture = json.loads((STARTER / 'fixtures/rekap-layanan.json').read_text())
serialized = json.dumps(fixture, ensure_ascii=False).replace('</', '<\\/')
code = (STARTER / 'Code.gs').read_text()
mock = '''
<script>
const PREVIEW_FIXTURE = FIXTURE_JSON;
let previewValues = [Object.keys(PREVIEW_FIXTURE.records[0]), ...PREVIEW_FIXTURE.records.map(Object.values)];
const previewProperties = new Map([['DASHBOARD_SPREADSHEET_ID', 'LOCAL_FIXTURE']]);
const PropertiesService = {getScriptProperties: () => ({getProperty: key => previewProperties.get(key)})};
const SpreadsheetApp = {openById: () => ({
  getSpreadsheetTimeZone: () => 'Asia/Jakarta',
  getSheetByName: () => ({getLastRow: () => previewValues.length, getDataRange: () => ({getValues: () => previewValues})})
})};
const Utilities = {formatDate(date, timeZone, format) {
  const parts = Object.fromEntries(new Intl.DateTimeFormat('en-CA', {
    timeZone, year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'
  }).formatToParts(date).map(part => [part.type, part.value]));
  return `${parts.year}-${parts.month}-${parts.day}` + (format.includes('HH') ? ` ${parts.hour}:${parts.minute}` : '');
}};
// Exact server source follows; only IO is mocked for offline use.
SERVER_SOURCE
function runner(success, failure) {
  return {
    withSuccessHandler(fn) { return runner(fn, failure); },
    withFailureHandler(fn) { return runner(success, fn); },
    getDashboardData(filters) {
      setTimeout(() => {
        try { success(getDashboardData(filters)); } catch (error) { failure(error); }
      }, 60);
    }
  };
}
window.google = {script: {run: runner(null, null)}};
window.previewTest = {setRows: rows => { previewValues = rows; }, reset: () => {
  previewValues = [Object.keys(PREVIEW_FIXTURE.records[0]), ...PREVIEW_FIXTURE.records.map(Object.values)];
}, getRows: () => structuredClone(previewValues)};
</script>
'''.replace('FIXTURE_JSON', serialized).replace('SERVER_SOURCE', code)
html = (STARTER / 'Index.html').read_text().replace('</head>', mock + '</head>', 1)
html = html.replace('<main>', '<main><div class="notice"><strong>PREVIEW LOKAL / OFFLINE.</strong> Sumber: 100 baris dummy dari Excel, bukan Sheet cloud. Filter berfungsi, tetapi perubahan di Google Sheets tidak tersinkron ke preview ini. Unggah hanya Code.gs dan Index.html ke Apps Script.</div>', 1)
(STARTER / 'preview.html').write_text(html)
print('PASS built preview: real Index.html + unchanged Code.gs + mocked Google IO')
