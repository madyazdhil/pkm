# Panduan Peserta: Excel → Google Sheets → Dashboard Link

**Materi 2 — Dashboard Rekap Layanan Kecamatan**  
Gunakan data latihan atau data yang sudah diizinkan dan dianonimkan.

## Hasil yang dituju

Anda akan membawa pulang:

- satu Google Sheet dengan sheet sumber bernama `Data`;
- dua file Apps Script: `Code.gs` dan `Index.html`;
- dashboard dengan kartu KPI, filter, tabel, dan grafik sederhana;
- screenshot atau link web app yang sudah diuji;
- catatan PIC dan batasan penggunaan.

Dashboard dibuat dengan bantuan ChatGPT, tetapi **hasil akhirnya berjalan di Google Apps Script dan dibuka lewat link**. Dashboard bukan Canvas ChatGPT dan bukan pengganti sistem layanan resmi.

## 1. Siapkan data dengan aman

Untuk latihan, pakai salah satu file dummy panitia. Jika memakai data kantor:

- pastikan ada izin dari penanggung jawab data;
- hapus atau samarkan NIK, nomor KK, nomor telepon, alamat lengkap, nama warga, isi surat, isi aduan, dan dokumen rahasia;
- jangan menempelkan password, token, atau API key ke ChatGPT;
- sepakati siapa yang boleh melihat Sheet dan dashboard.

## 2. Impor Excel menjadi Google Sheets

1. Buka Google Drive dan unggah file `.xlsx`.
2. Klik kanan file → **Open with / Buka dengan → Google Sheets**.
3. Jika file masih berada pada mode pengeditan Excel/Office, pilih **File → Save as Google Sheets / Simpan sebagai Google Spreadsheet**.
4. Pastikan file baru dapat diedit sebagai Google Sheets.
5. Pastikan sheet sumber bernama `Data`. Jangan mengganti nama ini sebelum pengujian selesai.
6. Buka sheet `Panduan` untuk membaca arti kolom.
7. Cek header, tipe tanggal, status, dan jumlah baris.

Untuk dataset latihan utama, hasil cek awal adalah 100 baris data dengan KPI dasar: total 100, selesai 25, dan masih diproses 50.

## 3. Buat project Apps Script

1. Dari Google Sheet yang berisi `Data`, pilih **Extensions / Ekstensi → Apps Script**.
2. Ganti isi file `Code.gs` dengan starter code.
3. Pilih **Add a file / Tambahkan file → HTML**.
4. Beri nama file `Index` sehingga Apps Script menampilkannya sebagai `Index.html`.
5. Tempel isi `Index.html`.
6. Simpan project.
7. Dari editor Apps Script, jalankan fungsi `setupSpreadsheetId()` satu kali.
8. Setujui izin yang diminta oleh akun Anda, jika muncul. Gunakan akun dan file latihan yang benar.
9. Kembali ke dashboard dan muat ulang.

Jika muncul pesan “Sumber data belum dikonfigurasi”, berarti langkah 7 belum dilakukan atau dilakukan pada project yang berbeda.

## 4. Uji sebelum membagikan link

- [ ] Halaman dashboard terbuka tanpa error.
- [ ] Total layanan = 100.
- [ ] Selesai = 25.
- [ ] Masih diproses = 50.
- [ ] Filter `Selesai` menampilkan 25 baris dan KPI masih diproses menjadi 0.
- [ ] Filter jenis layanan mengubah jumlah yang tampil.
- [ ] Tabel menampilkan ID, tanggal, jenis, wilayah umum, status, unit, dan durasi.
- [ ] Data tidak menampilkan informasi pribadi.
- [ ] Anda mengubah satu status latihan, memuat ulang, dan memeriksa angka berubah.

## 5. Terbitkan menjadi link web app jika akun dan waktu memungkinkan

1. Pilih **Deploy → New deployment**.
2. Pilih tipe **Web app**.
3. Periksa akun yang menjalankan aplikasi dan siapa yang mendapat akses.
4. Salin URL hasil deployment.
5. Uji URL dengan akun yang memang berhak mengakses.
6. Jangan memilih akses publik tanpa keputusan penanggung jawab data.

Deployment semua kelompok **tidak wajib** untuk sesi singkat. Jika deployment tidak selesai, kumpulkan screenshot dashboard dan catat kendalanya. Jangan menyebut “sudah online” tanpa URL yang benar-benar terbuka.

## 6. Jika terjadi error

Simpan empat hal ini sebelum meminta bantuan:

1. pesan error lengkap;
2. tindakan terakhir yang dilakukan;
3. nama file/fungsi yang sedang dijalankan;
4. header yang terbaca pada Sheet.

Minta perubahan sekecil mungkin. Jangan langsung mengganti seluruh kode tanpa memahami penyebab dan menguji ulang KPI.
