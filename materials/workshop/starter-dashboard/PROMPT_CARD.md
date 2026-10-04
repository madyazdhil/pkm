# Prompt Card: Excel → Google Sheets → Dashboard Link

Gunakan data sintetis atau data yang sudah dianonimkan. Jangan menempelkan NIK, nomor KK, nomor telepon, alamat lengkap, isi surat, isi aduan, password, token, atau API key.

## Prompt utama

```text
Bertindak sebagai mentor Google Apps Script untuk pemula.

Saya memiliki Google Sheet bernama Data untuk membuat dashboard rekap layanan kecamatan.
Gunakan hanya data latihan/sintetis. Satu baris mewakili satu permohonan; pada dataset utama `Jumlah_Permohonan` harus bernilai 1.

Header yang tersedia:
ID_Layanan, Tanggal, Jenis_Layanan, Wilayah_Umum, Kanal, Status,
Unit_Penanggung_Jawab, Durasi_Hari, Jumlah_Permohonan, Catatan_NonSensitif

Kebutuhan dashboard:
1. kartu Total Layanan;
2. kartu Selesai;
3. kartu Masih Diproses untuk status Diproses dan Menunggu Dokumen;
4. tabel ID, tanggal, jenis layanan, wilayah umum, status, unit, dan durasi;
5. filter Status dan Jenis Layanan;
6. grafik batang berdasarkan Jenis Layanan;
7. tanggal pembaruan data;
8. catatan bahwa data adalah data latihan.

Buat dua file terpisah:
1. Code.gs untuk doGet(), konfigurasi sumber spreadsheet, validasi, dan membaca data dari sheet Data;
2. Index.html untuk tampilan dashboard, CSS, dan JavaScript browser.

Pertahankan nama header dan jangan membuat keputusan administratif otomatis.
Jelaskan langkah menempatkan kode, jalankan setupSpreadsheetId() satu kali, cara menguji tiga KPI, cara menguji filter,
dan cara menerbitkan dashboard sebagai link web app dengan akses yang aman. Jangan bergantung pada getActiveSpreadsheet() saat web app dibuka melalui URL.
``` 

## Prompt perubahan kecil

```text
Pada dashboard yang sudah berjalan, tambahkan satu filter berdasarkan Unit_Penanggung_Jawab.
Jangan mengubah nama header dan jangan menghapus fitur yang sudah berjalan.
Jelaskan file/fungsi yang diubah dan berikan tiga langkah pengujian.
``` 

## Prompt perbaikan error

```text
Saya mendapat error berikut saat menjalankan dashboard:
[tempel pesan error lengkap]

Konteks:
- nama sheet: Data
- tindakan terakhir: [isi]
- file/fungsi terkait: [isi]
- header yang tersedia: [isi]

Analisis penyebab paling mungkin. Berikan perubahan sekecil mungkin.
Jangan mengganti seluruh kode. Jelaskan file/fungsi yang diubah dan berikan
langkah pengujian setelah perbaikan.
``` 
