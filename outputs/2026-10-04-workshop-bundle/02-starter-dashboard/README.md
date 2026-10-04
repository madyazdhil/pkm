# Starter Dashboard Rekap Layanan Kecamatan

Starter project untuk praktik workshop. Output akhirnya adalah dashboard web yang dibuka melalui link Google Apps Script, bukan Canvas ChatGPT.

## Struktur

```text
starter-dashboard/
├── Code.gs
├── Index.html
├── PROMPT_CARD.md
├── preview.html
└── fixtures/
    ├── rekap-layanan.json
    └── expected-dashboard.json
```

`preview.html` adalah preview lokal yang memakai fixture 100 baris dan mock transport browser. Preview ini dipakai untuk latihan/QA; bukan deployment Google Apps Script live.

## Persiapan data

1. Upload file Excel latihan ke Google Drive.
2. Pilih **Open with / Buka dengan → Google Sheets**.
3. Jika file masih berada pada mode Excel/Office, pilih **File → Save as Google Sheets / Simpan sebagai Google Spreadsheet**.
4. Pastikan sheet sumber bernama `Data`.
5. Pertahankan header utama seperti pada sheet `Panduan`.
6. Gunakan data sintetis selama workshop.

## Membuat project Apps Script

1. Buka Google Sheet yang berisi data.
2. Pilih **Extensions / Ekstensi → Apps Script**.
3. Ganti isi `Code.gs` dengan file pada folder ini.
4. Pilih **Add a file / Tambahkan file → HTML**.
5. Beri nama file `Index`.
6. Tempel isi `Index.html`.
7. Simpan project.
8. Jalankan `setupSpreadsheetId()` satu kali dari editor Apps Script.
9. Muat ulang dashboard.

Starter code menyimpan ID spreadsheet pada Script Properties agar web app tidak bergantung pada `getActiveSpreadsheet()` saat dibuka melalui URL. Jangan menyalin ID spreadsheet ke ChatGPT jika tidak diperlukan.

## Pengujian awal

1. Pastikan sheet bernama `Data`.
2. Pastikan header wajib (`ID_Layanan`, `Tanggal`, `Jenis_Layanan`, `Status`) tidak berubah.
3. Pastikan fungsi `doGet()` memanggil file `Index`.
4. Pastikan `setupSpreadsheetId()` sudah dijalankan pada project yang sama.
5. Uji kartu, filter status, filter jenis layanan, tabel, dan waktu terakhir dimuat.
6. Bandingkan KPI dengan hitungan manual pada Sheet.
7. Ubah satu status latihan, muat ulang, dan pastikan KPI ikut berubah.

## Batasan dan validasi

- Batas starter latihan adalah 2.000 baris data; jika terlampaui, aplikasi menampilkan error yang jelas.
- Tabel menampilkan maksimal 100 baris per hasil filter, sedangkan KPI tetap dihitung dari seluruh baris valid.
- ID kosong, ID duplikat, header wajib yang hilang, tanggal tidak valid, dan jumlah non-numerik ditolak agar kesalahan tidak diam-diam menjadi angka yang salah.
- Kolom catatan tidak dikirim ke tampilan dashboard.

## Deployment aman

- Untuk latihan, gunakan data sintetis.
- Jangan memilih akses publik tanpa keputusan tim.
- Catat siapa yang menjalankan aplikasi dan siapa yang dapat mengaksesnya.
- Jangan menaruh password, token, API key, NIK, nomor KK, alamat lengkap, nomor telepon, isi surat, atau aduan asli di Sheet, prompt, atau kode.
- Jika deployment tidak berhasil, gunakan screenshot hasil dashboard dan catat kendalanya. Jangan menyebut link aktif sebelum benar-benar diuji.

## Perubahan kecil yang cocok untuk latihan

- Mengubah label judul dashboard.
- Menambahkan filter berdasarkan unit.
- Mengubah KPI “Masih diproses” sesuai definisi status yang disepakati.
- Menambahkan kolom `Kanal` ke tabel.

Minta ChatGPT menjelaskan file dan fungsi yang diubah, lalu uji satu perubahan pada satu waktu.
