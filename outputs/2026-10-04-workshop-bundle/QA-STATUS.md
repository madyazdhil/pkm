# Status QA Paket Workshop — 4 Oktober 2026

## Lulus secara lokal

- Deck HTML diuji pada 1440×810 dan 1280×720.
- Deck dapat dibuka melalui `file://`, navigasi, hash slide, notes, overview, dan print mode diuji.
- Preview dashboard memakai fixture 100 baris.
- Baseline KPI: total 100, selesai 25, masih diproses 50, dibatalkan 25.
- Filter status dan jenis layanan diuji.
- Validasi Apps Script untuk header, ID duplikat, tanggal, angka, batas baris, dan konfigurasi spreadsheet diuji.
- Tiga workbook memiliki sheet `Data` dan `Panduan`, 100 baris data, dan tidak memiliki formula error pada scan.

## Belum diverifikasi cloud

- Import workbook ke Google Drive/Google Sheets akun pelatihan.
- Menjalankan `setupSpreadsheetId()` pada project Apps Script cloud.
- Deployment Web App dan URL nyata.
- Pengujian akses untuk akun berwenang dan tidak berwenang.

Status cloud harus diisi fasilitator pada `04-participant-kit/facilitator-preflight-and-access.md` setelah pengujian nyata.
