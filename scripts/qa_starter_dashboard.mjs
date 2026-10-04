import fs from 'node:fs';
import vm from 'node:vm';

const root = new URL('..', import.meta.url).pathname;
const code = fs.readFileSync(`${root}/materials/workshop/starter-dashboard/Code.gs`, 'utf8');
const fixture = JSON.parse(fs.readFileSync(`${root}/materials/workshop/starter-dashboard/fixtures/rekap-layanan.json`, 'utf8'));
const expected = JSON.parse(fs.readFileSync(`${root}/materials/workshop/starter-dashboard/fixtures/expected-dashboard.json`, 'utf8'));

const scriptProperties = new Map();
let activeSpreadsheet = null;
let openByIdCalls = [];

function makeSheet(values) {
  return { getLastRow: () => values.length, getDataRange: () => ({ getValues: () => values }) };
}
function makeSpreadsheet(id, values, sheetName = 'Data') {
  const sheet = makeSheet(values);
  return { id, getId: () => id, getName: () => 'Synthetic training workbook', getSpreadsheetTimeZone: () => 'UTC', getSheetByName: name => name === sheetName ? sheet : null };
}
function rowsFromFixture(records = fixture.records) {
  const headers = Object.keys(fixture.records[0]);
  return [headers, ...records.map(record => headers.map(header => {
    const value = record[header];
    return header === 'Tanggal' && value ? new Date(`${value}T00:00:00Z`) : value;
  }))];
}

const context = {
  console,
  isFinite,
  Date,
  Object,
  String,
  Number,
  Math,
  Set,
  Error,
  SpreadsheetApp: {
    getActiveSpreadsheet: () => activeSpreadsheet,
    openById: id => { openByIdCalls.push(id); return activeSpreadsheet && activeSpreadsheet.id === id ? activeSpreadsheet : null; },
  },
  PropertiesService: { getScriptProperties: () => ({
    getProperty: key => scriptProperties.get(key) || null,
    setProperty: (key, value) => scriptProperties.set(key, value),
  }) },
  Session: { getScriptTimeZone: () => 'UTC' },
  Utilities: { formatDate: (date, _timezone, format) => {
    const iso = date.toISOString();
    if (format === 'yyyy-MM-dd') return iso.slice(0, 10);
    if (format === 'yyyy-MM-dd HH:mm') return iso.slice(0, 16).replace('T', ' ');
    return iso;
  } },
};
vm.createContext(context);
vm.runInContext(code, context, { filename: 'Code.gs' });

function assert(condition, message) { if (!condition) throw new Error(message); }
function assertThrows(fn, includes) {
  try { fn(); } catch (error) { assert(String(error.message).includes(includes), `expected error containing ${includes}, got ${error.message}`); return; }
  throw new Error(`expected error containing ${includes}`);
}

// The deployed path must not rely on an active spreadsheet after setup.
activeSpreadsheet = makeSpreadsheet('sheet-training-001', rowsFromFixture());
context.setupSpreadsheetId();
activeSpreadsheet = null;
const configuredSpreadsheet = makeSpreadsheet('sheet-training-001', rowsFromFixture());
context.SpreadsheetApp.openById = id => { openByIdCalls.push(id); return id === 'sheet-training-001' ? configuredSpreadsheet : null; };
const baseline = context.getDashboardData({});
assert(baseline.ok === true, 'baseline should be successful');
assert(baseline.rowCount === expected.rowCount, `rowCount ${baseline.rowCount}`);
assert(baseline.kpis.total === expected.kpis.total, `total ${baseline.kpis.total}`);
assert(baseline.kpis.completed === expected.kpis.completed, `completed ${baseline.kpis.completed}`);
assert(baseline.kpis.inProcess === expected.kpis.inProcess, `inProcess ${baseline.kpis.inProcess}`);
assert(openByIdCalls.at(-1) === 'sheet-training-001', 'configured spreadsheet ID was not opened');

const completeOnly = context.getDashboardData({ status: 'Selesai' });
assert(completeOnly.filteredRowCount === 25, `complete rows ${completeOnly.filteredRowCount}`);
assert(completeOnly.kpis.total === 25 && completeOnly.kpis.completed === 25 && completeOnly.kpis.inProcess === 0, 'status filter KPI mismatch');

const serviceOnly = context.getDashboardData({ service: 'Administrasi Umum' });
assert(serviceOnly.filteredRowCount === 20 && serviceOnly.kpis.total === 20, 'service filter mismatch');
assert(serviceOnly.byService.length === 1 && serviceOnly.byService[0].label === 'Administrasi Umum', 'service aggregation mismatch');

const changedRecords = fixture.records.map(record => ({ ...record }));
changedRecords[0].Status = 'Diproses';
const changedSpreadsheet = makeSpreadsheet('sheet-training-001', rowsFromFixture(changedRecords));
context.SpreadsheetApp.openById = id => id === 'sheet-training-001' ? changedSpreadsheet : null;
const changed = context.getDashboardData({});
assert(changed.kpis.completed === 24 && changed.kpis.inProcess === 51, 'single status mutation did not change KPI');

// Validation cases.
const missingHeaderRows = rowsFromFixture();
missingHeaderRows[0] = missingHeaderRows[0].filter(header => header !== 'Status');
const missingHeaderSpreadsheet = makeSpreadsheet('sheet-training-001', missingHeaderRows);
context.SpreadsheetApp.openById = () => missingHeaderSpreadsheet;
assertThrows(() => context.getDashboardData({}), 'Header wajib belum ditemukan');

const duplicateRecords = fixture.records.map(record => ({ ...record }));
duplicateRecords[1].ID_Layanan = duplicateRecords[0].ID_Layanan;
const duplicateSpreadsheet = makeSpreadsheet('sheet-training-001', rowsFromFixture(duplicateRecords));
context.SpreadsheetApp.openById = () => duplicateSpreadsheet;
assertThrows(() => context.getDashboardData({}), 'ID duplikat ditemukan');

const malformedRecords = fixture.records.map(record => ({ ...record }));
malformedRecords[0].Jumlah_Permohonan = 'bukan angka';
const malformedSpreadsheet = makeSpreadsheet('sheet-training-001', rowsFromFixture(malformedRecords));
context.SpreadsheetApp.openById = () => malformedSpreadsheet;
assertThrows(() => context.getDashboardData({}), 'Jumlah_Permohonan pada baris 2 harus angka 1');

scriptProperties.clear();
context.SpreadsheetApp.getActiveSpreadsheet = () => null;
assertThrows(() => context.getDashboardData({}), 'Sumber data belum dikonfigurasi');

console.log('PASS starter dashboard Code.gs: baseline, filters, mutation, config, and validation cases');
