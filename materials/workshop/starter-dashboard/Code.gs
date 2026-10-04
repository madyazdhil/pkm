/** Starter latihan rekap layanan. Satu baris = satu permohonan, bukan agregat. */
const CONFIG = {
  SHEET_NAME: 'Data',
  SPREADSHEET_ID_PROPERTY: 'DASHBOARD_SPREADSHEET_ID',
  MAX_DATA_ROWS: 2000,
  MAX_TABLE_ROWS: 100,
};
const HEADERS = [
  'ID_Layanan', 'Tanggal', 'Jenis_Layanan', 'Wilayah_Umum', 'Kanal',
  'Status', 'Unit_Penanggung_Jawab', 'Durasi_Hari', 'Jumlah_Permohonan',
  'Catatan_NonSensitif',
];
const STATUSES = ['Selesai', 'Diproses', 'Menunggu Dokumen', 'Dibatalkan'];

/** Jalankan sekali dari editor yang dibuka lewat Sheet milik Anda. */
function setupSpreadsheetId() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  if (!spreadsheet) throw new Error('Buka Apps Script dari Google Sheet latihan, lalu jalankan setupSpreadsheetId() dari editor.');
  if (!spreadsheet.getSheetByName(CONFIG.SHEET_NAME)) throw new Error('Sheet "Data" tidak ditemukan.');
  PropertiesService.getScriptProperties().setProperty(CONFIG.SPREADSHEET_ID_PROPERTY, spreadsheet.getId());
  return 'Sumber tersimpan. Sekarang jalankan getDashboardData atau buka URL uji.';
}

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Dashboard Rekap Layanan Kecamatan')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function getDashboardData(filters) {
  filters = filters || {};
  const id = PropertiesService.getScriptProperties().getProperty(CONFIG.SPREADSHEET_ID_PROPERTY);
  if (!id) throw new Error('Sumber data belum dikonfigurasi. Jalankan setupSpreadsheetId() sekali dari editor Apps Script.');
  // getActiveSpreadsheet() tidak digunakan dalam jalur web app.
  const spreadsheet = SpreadsheetApp.openById(id);
  const sheet = spreadsheet.getSheetByName(CONFIG.SHEET_NAME);
  if (!sheet) throw new Error('Sheet "Data" tidak ditemukan. Gunakan file Google Sheets hasil konversi.');
  if (sheet.getLastRow() - 1 > CONFIG.MAX_DATA_ROWS) {
    throw new Error('Data melebihi batas latihan 2000 baris. Tidak ada baris yang dipotong diam-diam.');
  }
  const values = sheet.getDataRange().getValues();
  const timezone = spreadsheet.getSpreadsheetTimeZone();
  return calculateDashboard_(values, filters, timezone);
}

/** Fungsi yang sama dipakai pada GAS, pengujian Node, dan preview lokal. */
function calculateDashboard_(values, filters, timezone) {
  filters = filters || {};
  if (!values.length || !values[0].some(value => value !== '')) throw new Error('Sheet Data kosong, termasuk header.');
  const headers = values[0].map(value => String(value == null ? '' : value).trim());
  const missing = HEADERS.filter(header => !headers.includes(header));
  if (missing.length) throw new Error('Header wajib belum ditemukan: ' + missing.join(', '));
  if (headers.filter(Boolean).length !== new Set(headers.filter(Boolean)).size) throw new Error('Header duplikat ditemukan.');
  const index = Object.fromEntries(HEADERS.map(header => [header, headers.indexOf(header)]));
  const seen = new Set();
  const records = [];
  values.slice(1).forEach((row, offset) => {
    if (!row.some(value => value !== '' && value !== null && value !== undefined)) return;
    const sourceRow = offset + 2;
    const read = header => row[index[header]];
    const text = header => String(read(header) == null ? '' : read(header)).trim();
    const id = text('ID_Layanan');
    if (!id || !text('Jenis_Layanan') || !text('Status')) throw new Error('Baris ' + sourceRow + ' belum lengkap: ID, jenis layanan, dan status wajib diisi.');
    if (seen.has(id)) throw new Error('ID duplikat ditemukan pada baris ' + sourceRow + '.');
    seen.add(id);
    if (!STATUSES.includes(text('Status'))) throw new Error('Status tidak dikenal pada baris ' + sourceRow + '. Gunakan Selesai, Diproses, Menunggu Dokumen, atau Dibatalkan.');
    if (typeof read('Jumlah_Permohonan') !== 'number' || read('Jumlah_Permohonan') !== 1) {
      throw new Error('Jumlah_Permohonan pada baris ' + sourceRow + ' harus angka 1: satu baris = satu permohonan.');
    }
    const duration = read('Durasi_Hari');
    if (typeof duration !== 'number' || !Number.isInteger(duration) || duration < 0) throw new Error('Durasi_Hari pada baris ' + sourceRow + ' harus bilangan bulat ≥ 0.');
    records.push({
      id,
      date: formatDate_(read('Tanggal'), sourceRow, timezone),
      service: text('Jenis_Layanan'), area: text('Wilayah_Umum'),
      status: text('Status'), unit: text('Unit_Penanggung_Jawab'), duration,
    });
  });
  if (records.length > CONFIG.MAX_DATA_ROWS) throw new Error('Data melebihi batas latihan 2000 baris.');
  const filtered = records.filter(row => (!filters.status || row.status === filters.status) && (!filters.service || row.service === filters.service));
  const byService = new Map();
  filtered.forEach(row => byService.set(row.service, (byService.get(row.service) || 0) + 1));
  return {
    ok: true,
    message: records.length ? '' : 'Sheet memiliki header, tetapi belum ada baris data.',
    lastLoadedAt: Utilities.formatDate(new Date(), timezone, 'yyyy-MM-dd HH:mm') + ' (' + timezone + ')',
    rowCount: records.length, filteredRowCount: filtered.length,
    tableTruncated: filtered.length > CONFIG.MAX_TABLE_ROWS,
    options: {
      statuses: [...new Set(records.map(row => row.status))].sort(),
      services: [...new Set(records.map(row => row.service))].sort(),
    },
    kpis: {
      total: filtered.length,
      completed: filtered.filter(row => row.status === 'Selesai').length,
      inProcess: filtered.filter(row => ['Diproses', 'Menunggu Dokumen'].includes(row.status)).length,
      cancelled: filtered.filter(row => row.status === 'Dibatalkan').length,
    },
    // Semua kategori ditampilkan agar jumlah grafik tetap dapat direkonsiliasi.
    byService: [...byService].map(([label, value]) => ({ label, value }))
      .sort((a, b) => b.value - a.value || a.label.localeCompare(b.label)),
    rows: filtered.slice(0, CONFIG.MAX_TABLE_ROWS),
  };
}

function formatDate_(value, sourceRow, timezone) {
  if (Object.prototype.toString.call(value) === '[object Date]' && !isNaN(value)) {
    return Utilities.formatDate(value, timezone, 'yyyy-MM-dd');
  }
  // CSV cadangan dapat menghasilkan string ISO; jangan terima tanggal ambigu.
  const text = String(value == null ? '' : value).trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(text)) {
    const parsed = new Date(text + 'T00:00:00Z');
    if (!isNaN(parsed) && parsed.toISOString().slice(0, 10) === text) return text;
  }
  throw new Error('Tanggal pada baris ' + sourceRow + ' tidak valid. Gunakan nilai tanggal atau teks yyyy-mm-dd.');
}
