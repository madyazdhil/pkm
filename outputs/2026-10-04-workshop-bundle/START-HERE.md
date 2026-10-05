# Paket Workshop Generative AI + Dashboard Pelayanan Kecamatan

Paket ini adalah bahan siap pakai untuk workshop aparatur/staf Kecamatan Tambun Selatan.
Sesi dibagi menjadi dua blok:

1. **Pak Syam — teori:** basic AI, Generative AI, keamanan data, verifikasi manusia, dan prompting yang benar.
2. **Yazid — praktik:** Excel → Google Sheets → ChatGPT sebagai alat bantu → Google Apps Script → dashboard yang diuji.

## Urutan penggunaan fasilitator

1. Buka `01-deck/ai-dashboard-gas-workshop.html` di browser.
2. Gunakan slide 3–10 untuk blok teori Pak Syam.
3. Serahkan ke Yazid pada slide 11, lalu gunakan slide 12–26 untuk praktik dashboard.
4. Gunakan `03-datasets/dummy-data-rekap-layanan-kecamatan.xlsx` sebagai demo utama.
5. Ikuti `04-participant-kit/facilitator-preflight-and-access.md` dan `04-participant-kit/panduan-pemateri-dua-sesi.md` sebelum hari H.
   Gunakan `04-participant-kit/naskah-bicara-pemateri-dua-sesi.md` sebagai kalimat siap ucap untuk Mas Syam dan Yazid.
   Bagikan `04-participant-kit/download-dataset-peserta.md` agar peserta dapat mengunduh file Excel sesuai kelompok.
6. Bagikan panduan import/deploy, worksheet, checklist, prompt card, dan evaluasi kepada peserta.
7. Jika deployment cloud belum diuji, gunakan `02-starter-dashboard/preview.html` atau screenshot deck sebagai fallback.

## Isi paket

- `01-deck/` — deck HTML 28 slide, README, dan asset screenshot/preview.
- `02-starter-dashboard/` — `Code.gs`, `Index.html`, prompt card, fixture, dan preview lokal.
- `03-datasets/` — tiga workbook Excel, masing-masing 100 baris dengan sheet `Data` dan `Panduan`.
- `04-participant-kit/` — panduan pemateri dua sesi, outline, panduan peserta, worksheet, checklist, evaluasi, dan preflight fasilitator.

## Batas klaim

Preview lokal dan screenshot bukan deployment Google live. Jangan menyebut dashboard sudah aktif atau dapat diakses publik sebelum URL nyata dibuka dan diuji dengan kebijakan akses yang dipilih.

Semua data dalam paket bersifat sintetis. Jangan menggantinya dengan NIK, nomor KK, alamat lengkap, nomor telepon, isi surat, aduan asli, password, token, atau dokumen internal tanpa prosedur keamanan dan persetujuan yang sesuai.
