import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SpreadsheetFile, Workbook } from '/Users/yazidhilmi/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'outputs', '2026-10-03-dummy-datasets');
const previewDir = path.join(outDir, 'previews');
await fs.mkdir(previewDir, { recursive: true });

const colors = {
  navy: '#1F4E78',
  blue: '#D9EAF7',
  pale: '#F5F8FA',
  text: '#1F2937',
  line: '#C9D4DC',
  amber: '#FFF2CC',
  green: '#E2F0D9',
  red: '#FCE4D6',
};
const font = 'Arial';

function dateFor(i, offset = 0) {
  const start = Date.UTC(2026, 0, 5 + offset);
  const day = (i * 3 + offset * 7) % 270;
  return new Date(start + day * 86400000);
}
function isoDate(d) {
  return d.toISOString().slice(0, 10);
}
function addDays(d, days) {
  return new Date(d.getTime() + days * 86400000);
}
function applyBaseSheetStyle(sheet, usedRange) {
  sheet.showGridLines = false;
  usedRange.format.font = { name: font, size: 10, color: colors.text };
  usedRange.format.verticalAlignment = 'center';
  usedRange.format.wrapText = false;
}
function styleDataSheet(sheet, headers, rows) {
  const endCol = String.fromCharCode(64 + headers.length);
  const lastRow = rows.length + 1;
  const used = sheet.getRange(`A1:${endCol}${lastRow}`);
  applyBaseSheetStyle(sheet, used);
  const header = sheet.getRange(`A1:${endCol}1`);
  header.format = {
    fill: colors.navy,
    font: { name: font, size: 10, bold: true, color: '#FFFFFF' },
    horizontalAlignment: 'center',
    verticalAlignment: 'center',
    wrapText: true,
    borders: { preset: 'all', style: 'thin', color: '#FFFFFF' },
  };
  used.format.borders = { preset: 'outside', style: 'thin', color: colors.line };
  sheet.getRange(`A2:${endCol}${lastRow}`).format.borders = {
    insideHorizontal: { style: 'thin', color: colors.line },
  };
  sheet.getRange(`A1:${endCol}${lastRow}`).format.rowHeight = 20;
  sheet.getRange('A1').format.rowHeight = 34;
  sheet.freezePanes.freezeRows(1);
  const table = sheet.tables.add(`A1:${endCol}${lastRow}`, true, 'DataTable');
  try { table.style = 'TableStyleMedium2'; } catch {}
  table.showFilterButton = true;
  return { used, endCol, lastRow };
}
function addGuideSheet(workbook, title, purpose, rows) {
  const sheet = workbook.worksheets.add('Panduan');
  sheet.showGridLines = false;
  sheet.getRange('A1:F1').merge();
  sheet.getRange('A1').values = [[title]];
  sheet.getRange('A1:F1').format = {
    fill: colors.navy,
    font: { name: font, size: 14, bold: true, color: '#FFFFFF' },
    horizontalAlignment: 'left',
    verticalAlignment: 'center',
  };
  sheet.getRange('A1:F1').format.rowHeight = 28;
  sheet.getRange('A3:F3').merge();
  sheet.getRange('A3').values = [[purpose]];
  sheet.getRange('A3:F3').format = {
    fill: colors.amber,
    font: { name: font, size: 10, italic: true, color: colors.text },
    wrapText: true,
    verticalAlignment: 'center',
  };
  sheet.getRange('A3:F3').format.rowHeight = 34;
  sheet.getRange('A5:C5').values = [['Nama kolom', 'Contoh nilai', 'Arti / aturan penggunaan']];
  sheet.getRange('A5:C5').format = {
    fill: colors.blue,
    font: { name: font, size: 10, bold: true, color: colors.text },
    horizontalAlignment: 'center',
    verticalAlignment: 'center',
    wrapText: true,
    borders: { preset: 'all', style: 'thin', color: colors.line },
  };
  sheet.getRange(`A6:C${5 + rows.length}`).values = rows;
  sheet.getRange(`A6:C${5 + rows.length}`).format = {
    font: { name: font, size: 10, color: colors.text },
    verticalAlignment: 'top',
    wrapText: true,
    borders: { preset: 'all', style: 'thin', color: colors.line },
  };
  sheet.getRange('A:A').format.columnWidth = 24;
  sheet.getRange('B:B').format.columnWidth = 26;
  sheet.getRange('C:C').format.columnWidth = 68;
  sheet.getRange('A5:C5').format.rowHeight = 30;
  sheet.getRange(`A6:C${5 + rows.length}`).format.rowHeight = 38;
  sheet.getRange('A17:C17').merge();
  sheet.getRange('A17').values = [['Catatan: gunakan data sintetis selama latihan dan jangan memasukkan data pribadi ke ChatGPT.']];
  sheet.getRange('A17:C17').format = {
    fill: colors.green,
    font: { name: font, size: 10, bold: true, color: colors.text },
    wrapText: true,
    verticalAlignment: 'center',
  };
  sheet.getRange('A17:C17').format.rowHeight = 34;
}
function formatTypedColumns(sheet, headerIndex, rowsCount, format) {
  const col = String.fromCharCode(65 + headerIndex);
  sheet.getRange(`${col}2:${col}${rowsCount + 1}`).format.numberFormat = format;
}

const datasets = [
  {
    file: 'dummy-data-rekap-layanan-kecamatan.xlsx',
    title: 'Data Dummy Rekap Layanan Kecamatan',
    purpose: 'Dataset sintetis untuk latihan dashboard pelayanan. Semua ID, angka, dan catatan dibuat khusus untuk workshop dan bukan data resmi Kecamatan Tambun Selatan.',
    headers: ['ID_Layanan', 'Tanggal', 'Jenis_Layanan', 'Wilayah_Umum', 'Kanal', 'Status', 'Unit_Penanggung_Jawab', 'Durasi_Hari', 'Jumlah_Permohonan', 'Catatan_NonSensitif'],
    guide: [
      ['ID_Layanan', 'LYN-0001', 'ID sintetis unik. Jangan diganti dengan NIK atau nomor dokumen warga.'],
      ['Tanggal', '2026-03-12', 'Tanggal penerimaan permohonan. Gunakan sebagai filter periode.'],
      ['Jenis_Layanan', 'Administrasi Umum', 'Kategori layanan yang ditampilkan pada grafik/dashboard.'],
      ['Wilayah_Umum', 'Kelurahan A', 'Wilayah umum/samaran, bukan alamat lengkap.'],
      ['Kanal', 'Loket', 'Kanal penerimaan: Loket, Form Digital, atau Email Dinas.'],
      ['Status', 'Selesai', 'Status latihan: Selesai, Diproses, Menunggu Dokumen, atau Dibatalkan.'],
      ['Unit_Penanggung_Jawab', 'Unit A', 'Unit kerja samaran yang menangani layanan.'],
      ['Durasi_Hari', '3', 'Jumlah hari penyelesaian atau umur proses untuk latihan.'],
      ['Jumlah_Permohonan', '1', 'Jumlah record layanan. Satu baris mewakili satu permohonan latihan.'],
      ['Catatan_NonSensitif', 'Perlu verifikasi berkas', 'Catatan umum tanpa nama, alamat, nomor kontak, atau isi dokumen.'],
    ],
    build(i) {
      const services = ['Administrasi Umum', 'Surat Keterangan', 'Rekomendasi', 'Informasi Publik', 'Pengaduan Non-Sensitif'];
      const areas = ['Kelurahan A', 'Kelurahan B', 'Kelurahan C', 'Kelurahan D', 'Kelurahan E'];
      const channels = ['Loket', 'Form Digital', 'Email Dinas'];
      const statuses = ['Selesai', 'Diproses', 'Menunggu Dokumen', 'Dibatalkan'];
      const units = ['Unit A', 'Unit B', 'Unit C', 'Unit D'];
      const notes = ['Tidak ada catatan khusus', 'Perlu verifikasi berkas', 'Menunggu tindak lanjut unit', 'Data latihan'];
      const d = dateFor(i, 1);
      return [
        `LYN-${String(i + 1).padStart(4, '0')}`, d, services[(i * 2) % services.length], areas[(i + 1) % areas.length], channels[(i + 2) % channels.length], statuses[(i * 3) % statuses.length], units[(i + 2) % units.length], 1 + ((i * 5) % 10), 1, notes[i % notes.length],
      ];
    },
  },
  {
    file: 'dummy-data-monitoring-surat-disposisi.xlsx',
    title: 'Data Dummy Monitoring Surat dan Disposisi',
    purpose: 'Dataset sintetis untuk latihan dashboard monitoring internal. Tidak memuat isi surat, nama warga, nomor identitas, atau dokumen rahasia.',
    headers: ['ID_Surat', 'Tanggal_Masuk', 'Asal_Surat_Samaran', 'Jenis_Surat', 'Unit_Tujuan', 'Prioritas', 'Status_Disposisi', 'Tenggat', 'Tanggal_Selesai', 'Hari_Proses', 'Catatan_NonSensitif'],
    guide: [
      ['ID_Surat', 'SRT-0001', 'ID sintetis unik untuk latihan monitoring.'],
      ['Tanggal_Masuk', '2026-03-12', 'Tanggal surat diterima oleh unit latihan.'],
      ['Asal_Surat_Samaran', 'Instansi A', 'Asal generik/samaran, bukan nama pribadi atau alamat.'],
      ['Jenis_Surat', 'Undangan', 'Kategori surat untuk rekap dan grafik.'],
      ['Unit_Tujuan', 'Unit A', 'Unit kerja yang menerima disposisi.'],
      ['Prioritas', 'Normal', 'Prioritas latihan: Tinggi, Sedang, atau Normal.'],
      ['Status_Disposisi', 'Selesai', 'Status latihan: Selesai, Diproses, Menunggu Arahan, atau Ditunda.'],
      ['Tenggat', '2026-03-18', 'Tanggal target tindak lanjut.'],
      ['Tanggal_Selesai', '2026-03-16', 'Tanggal selesai hanya diisi bila Status_Disposisi = Selesai; selain itu harus kosong.'],
      ['Hari_Proses', '4', 'Selisih hari proses pada data latihan.'],
      ['Catatan_NonSensitif', 'Perlu arahan unit', 'Catatan umum tanpa isi surat atau informasi rahasia.'],
    ],
    build(i) {
      const origins = ['Instansi A', 'Instansi B', 'Unit Internal', 'Mitra Layanan'];
      const types = ['Undangan', 'Permohonan Informasi', 'Laporan', 'Surat Tugas', 'Pemberitahuan'];
      const units = ['Unit A', 'Unit B', 'Unit C', 'Unit D'];
      const priorities = ['Tinggi', 'Sedang', 'Normal'];
      const statuses = ['Selesai', 'Diproses', 'Menunggu Arahan', 'Ditunda'];
      const notes = ['Tidak ada catatan khusus', 'Perlu arahan unit', 'Menunggu disposisi', 'Data latihan'];
      const masuk = dateFor(i, 12);
      const proses = 1 + ((i * 4) % 9);
      const status = statuses[(i * 5) % statuses.length];
      const selesai = status === 'Selesai' ? addDays(masuk, proses) : '';
      const tenggat = addDays(masuk, 3 + ((i * 2) % 8));
      return [
        `SRT-${String(i + 1).padStart(4, '0')}`, masuk, origins[i % origins.length], types[(i * 2) % types.length], units[(i + 1) % units.length], priorities[i % priorities.length], status, tenggat, selesai, proses, notes[i % notes.length],
      ];
    },
  },
  {
    file: 'dummy-data-agenda-kegiatan-internal.xlsx',
    title: 'Data Dummy Agenda dan Kegiatan Internal',
    purpose: 'Dataset sintetis untuk latihan dashboard agenda internal. PIC dibuat sebagai kode samaran dan tidak memuat data pribadi peserta.',
    headers: ['ID_Agenda', 'Tanggal', 'Nama_Kegiatan', 'Unit_Penanggung_Jawab', 'Jenis_Kegiatan', 'Status_Persiapan', 'Lokasi_Umum', 'Peserta_Rencana', 'PIC_Samaran', 'Prioritas', 'Catatan_NonSensitif'],
    guide: [
      ['ID_Agenda', 'AGD-0001', 'ID sintetis unik untuk agenda latihan.'],
      ['Tanggal', '2026-10-12', 'Tanggal pelaksanaan/target kegiatan. Status latihan dibuat konsisten dengan tanggal acuan 2026-10-04.'],
      ['Nama_Kegiatan', 'Rapat Koordinasi', 'Nama generik kegiatan tanpa dokumen rahasia.'],
      ['Unit_Penanggung_Jawab', 'Unit A', 'Unit kerja samaran pemilik kegiatan.'],
      ['Jenis_Kegiatan', 'Rapat Internal', 'Kategori untuk rekap agenda.'],
      ['Status_Persiapan', 'Siap', 'Status latihan: Belum Dimulai, Berjalan, Siap, atau Selesai.'],
      ['Lokasi_Umum', 'Ruang Rapat 1', 'Lokasi umum, tanpa alamat pribadi.'],
      ['Peserta_Rencana', '25', 'Jumlah rencana peserta, bukan daftar nama.'],
      ['PIC_Samaran', 'PIC-01', 'Kode PIC latihan, bukan nama pribadi.'],
      ['Prioritas', 'Sedang', 'Prioritas latihan: Tinggi, Sedang, atau Normal.'],
      ['Catatan_NonSensitif', 'Konfirmasi perlengkapan', 'Catatan umum untuk persiapan kegiatan.'],
    ],
    build(i) {
      const activities = [
        ['Rapat Koordinasi', 'Rapat Internal'],
        ['Sosialisasi Layanan', 'Sosialisasi'],
        ['Evaluasi Bulanan', 'Evaluasi'],
        ['Pelatihan Internal', 'Pelatihan'],
        ['Kegiatan Administrasi', 'Administrasi'],
      ];
      const units = ['Unit A', 'Unit B', 'Unit C', 'Unit D'];
      const statuses = ['Belum Dimulai', 'Berjalan', 'Siap', 'Selesai'];
      const locations = ['Ruang Rapat 1', 'Aula Kecamatan', 'Ruang Pelayanan', 'Ruang Rapat 2'];
      const priorities = ['Tinggi', 'Sedang', 'Normal'];
      const notes = ['Tidak ada catatan khusus', 'Konfirmasi perlengkapan', 'Menunggu jadwal final', 'Data latihan'];
      const group = Math.floor(i / 25);
      const dateOffset = group === 0 ? -3 + (i % 3) : group === 1 ? (i % 7) : group === 2 ? 1 + (i % 16) : 7 + (i % 20);
      const status = [statuses[3], statuses[1], statuses[2], statuses[0]][group];
      const activity = activities[i % activities.length];
      return [
        `AGD-${String(i + 1).padStart(4, '0')}`, new Date(Date.UTC(2026, 9, 4 + dateOffset)), activity[0], units[(i + 3) % units.length], activity[1], status, locations[i % locations.length], 10 + ((i * 7) % 51), `PIC-${String((i % 12) + 1).padStart(2, '0')}`, priorities[i % priorities.length], notes[i % notes.length],
      ];
    },
  },
];

for (const spec of datasets) {
  const workbook = Workbook.create();
  const data = workbook.worksheets.add('Data');
  const rows = Array.from({ length: 100 }, (_, i) => spec.build(i));
  data.getRange(`A1:${String.fromCharCode(64 + spec.headers.length)}101`).values = [spec.headers, ...rows];
  const style = styleDataSheet(data, spec.headers, rows);
  // Explicit typed formats for date and numeric columns.
  for (const idx of spec.headers.map((h, i) => [h, i])) {
    const [h, i] = idx;
    if (/Tanggal|Tenggat/.test(h)) formatTypedColumns(data, i, rows.length, 'yyyy-mm-dd');
    if (/Durasi|Jumlah|Hari_Proses|Peserta/.test(h)) formatTypedColumns(data, i, rows.length, '#,##0');
  }
  data.getRange(`A1:${style.endCol}101`).format.columnWidth = 17;
  // Targeted widths for readable headers and notes.
  for (const [col, width] of [['A:A', 15], ['B:B', 14], ['C:C', 24], ['D:D', 21], ['E:E', 20], ['F:F', 20], ['G:G', 24], ['H:H', 15], ['I:I', 18], ['J:J', 18], ['K:K', 30]]) {
    try { data.getRange(col).format.columnWidth = width; } catch {}
  }
  addGuideSheet(workbook, spec.title, spec.purpose, spec.guide);
  workbook.recalculate();
  const inspect = await workbook.inspect({ kind: 'table', sheetId: 'Data', range: 'A1:K8', include: 'values,formulas', tableMaxRows: 8, tableMaxCols: 11, maxChars: 12000 });
  console.log(`${spec.file} inspect:\n${inspect.ndjson}`);
  const previewData = await workbook.render({ sheetName: 'Data', range: 'A1:K18', scale: 1, format: 'png' });
  await fs.writeFile(path.join(previewDir, spec.file.replace('.xlsx', '-data.png')), new Uint8Array(await previewData.arrayBuffer()));
  const previewGuide = await workbook.render({ sheetName: 'Panduan', range: 'A1:C18', scale: 1, format: 'png' });
  await fs.writeFile(path.join(previewDir, spec.file.replace('.xlsx', '-guide.png')), new Uint8Array(await previewGuide.arrayBuffer()));
  const output = await SpreadsheetFile.exportXlsx(workbook);
  await output.save(path.join(outDir, spec.file));
  console.log(`saved ${path.join(outDir, spec.file)}`);
}
console.log('DONE: created 3 dummy datasets with 100 rows each');
