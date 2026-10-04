# Dummy Dataset Workshop Dashboard

Tiga file Excel di folder ini dibuat untuk latihan workshop PkM Kecamatan Tambun Selatan.

## File

- `dummy-data-rekap-layanan-kecamatan.xlsx` — use case utama dashboard rekap layanan.
- `dummy-data-monitoring-surat-disposisi.xlsx` — variasi monitoring surat/disposisi.
- `dummy-data-agenda-kegiatan-internal.xlsx` — variasi agenda/kegiatan internal.

Setiap file memiliki:

- sheet `Data` dengan 100 baris data sintetis;
- sheet `Panduan` dengan arti kolom dan batasan penggunaan;
- filter tabel pada baris header;
- tanggal dan angka yang disimpan sebagai nilai spreadsheet, bukan teks tampilan.

## Alur penggunaan di workshop

1. Peserta mengunggah file Excel ke Google Drive.
2. Peserta memilih `Open with / Buka dengan → Google Sheets`. Jika file masih dalam mode Excel/Office, peserta memilih `File → Save as Google Sheets / Simpan sebagai Google Spreadsheet` sebelum membuka Apps Script.
3. Peserta memeriksa nama header, tanggal, status, dan jumlah baris.
4. Peserta memakai ChatGPT untuk membantu merancang dashboard dan menghasilkan kode.
5. Peserta menempatkan kode ke Google Apps Script.
6. Dashboard dibuka melalui link web app, bukan melalui Canvas ChatGPT.

Semua data bersifat sintetis. Jangan mengganti data latihan dengan NIK, nomor KK, alamat lengkap, nomor telepon, isi surat, aduan asli, password, token, atau dokumen internal.
