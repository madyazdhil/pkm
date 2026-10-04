import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FileBlob, SpreadsheetFile } from '/Users/yazidhilmi/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dir = path.join(root, 'outputs/2026-10-03-dummy-datasets');
const files = [
  'dummy-data-rekap-layanan-kecamatan.xlsx',
  'dummy-data-monitoring-surat-disposisi.xlsx',
  'dummy-data-agenda-kegiatan-internal.xlsx',
];
for (const file of files) {
  const wb = await SpreadsheetFile.importXlsx(await FileBlob.load(path.join(dir, file)));
  const sheets = await wb.inspect({ kind: 'sheet', include: 'id,name', maxChars: 3000 });
  const data = await wb.inspect({ kind: 'table', sheetId: 'Data', range: 'A1:K101', include: 'values,formulas', tableMaxRows: 101, tableMaxCols: 11, maxChars: 20000 });
  const errors = await wb.inspect({ kind: 'match', searchTerm: '#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!', options: { useRegex: true, maxResults: 100 }, summary: `formula error scan ${file}` });
  console.log(`VERIFY ${file}`);
  console.log(sheets.ndjson);
  console.log(`data_length=${data.ndjson.length} formula_errors=${errors.ndjson}`);
}
