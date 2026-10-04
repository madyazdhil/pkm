# Paket Workshop Dashboard Pelayanan Kecamatan

Paket ini adalah bahan siap pakai untuk workshop aparatur/staf Kecamatan Tambun Selatan.
Alur utama yang diajarkan:

`Excel → Google Sheets → ChatGPT sebagai alat bantu → Google Apps Script → link dashboard`

## Urutan penggunaan fasilitator

1. Buka `01-deck/ai-dashboard-gas-workshop.html` di browser.
2. Gunakan `03-datasets/dummy-data-rekap-layanan-kecamatan.xlsx` sebagai demo utama.
3. Ikuti `04-participant-kit/facilitator-preflight-and-access.md` sebelum hari H.
4. Bagikan `04-participant-kit/participant-import-and-deploy-guide.md`, worksheet, checklist, dan evaluasi kepada peserta.
5. Gunakan `02-starter-dashboard/` untuk menyalin `Code.gs` dan `Index.html` ke project Apps Script.
6. Jika deployment cloud belum diuji, gunakan `02-starter-dashboard/preview.html` atau screenshot deck sebagai fallback.

## Isi paket

- `01-deck/` — deck HTML 18 slide, README, dan asset screenshot/preview.
- `02-starter-dashboard/` — Code.gs, Index.html, prompt card, fixture, dan preview lokal.
- `03-datasets/` — tiga workbook Excel, masing-masing 100 baris dengan sheet `Data` dan `Panduan`.
- `04-participant-kit/` — panduan import/deploy, worksheet, checklist, evaluasi, dan preflight fasilitator.

## Batas klaim

Preview lokal dan screenshot bukan deployment Google live. Jangan menyebut dashboard sudah aktif atau dapat diakses publik sebelum URL nyata dibuka dan diuji dengan kebijakan akses yang dipilih.

Semua data dalam paket bersifat sintetis. Jangan menggantinya dengan NIK, nomor KK, alamat lengkap, nomor telepon, isi surat, aduan asli, password, token, atau dokumen internal tanpa prosedur keamanan dan persetujuan yang sesuai.
