# Outline Deck Workshop
## Dari ChatGPT ke Dashboard Internal dengan Google Apps Script

- **Project:** PkM Magister Teknik Informatika UNPAM – Kecamatan Tambun Selatan
- **Status:** Draft / proposed
- **Tanggal:** 25 September 2026
- **Audiens:** Aparatur/staf Kantor Kecamatan Tambun Selatan
- **Fokus:** Generative AI melalui chat, dua file dasar GAS, praktik dashboard, dan deployment
- **Batasan:** Codex hanya dikenalkan sebagai konteks lanjutan. Praktik utama memakai ChatGPT melalui chat dan Google Apps Script.

---

## Arah Cerita Deck

Deck membawa peserta melalui satu cerita sederhana:

> **Saya punya masalah kerja → saya jelaskan ke ChatGPT → ChatGPT membantu menulis dua file → saya menempatkan kode di GAS → saya menjalankan dan menguji dashboard → saya mempublikasikan prototipe.**

Peserta tidak perlu langsung memahami seluruh JavaScript. Mereka perlu memahami **alur kerja, struktur file, cara meminta bantuan AI, dan cara memeriksa hasilnya**.

---

## Slide 1 – Judul Workshop

### Judul

**Dari ChatGPT ke Dashboard Internal**

### Subjudul

Praktik Generative AI, Google Apps Script, dan pembuatan prototipe dashboard untuk efisiensi administrasi.

### Catatan presenter

Sampaikan bahwa workshop ini bukan kelas pemrograman penuh. Peserta akan belajar membuat prototipe kecil dengan bantuan AI, lalu memahami cara kerja dan batasannya.

---

## Slide 2 – Hasil yang Akan Dibawa Pulang

Peserta akan:

- memahami dasar Generative AI;
- mengetahui contoh pemanfaatan AI untuk pekerjaan administrasi;
- mengenal Google Apps Script;
- meminta ChatGPT menghasilkan `Code.gs` dan `Index.html`;
- menempatkan kode ke project GAS;
- menjalankan dan menguji dashboard sederhana;
- mencoba deployment sebagai web app.

### Catatan presenter

Tekankan bahwa targetnya adalah **prototipe yang berfungsi**, bukan sistem produksi untuk langsung memakai data masyarakat.

---

## Slide 3 – Masalah Kerja yang Ingin Dibantu

Contoh situasi:

- data sudah ada, tetapi masih dibaca satu per satu;
- pimpinan membutuhkan ringkasan status pekerjaan;
- staf ingin melihat data berdasarkan periode, unit, atau status;
- laporan rutin memerlukan rekap yang berulang;
- informasi internal belum memiliki tampilan ringkas.

### Pertanyaan ke peserta

> Pekerjaan apa yang paling sering membutuhkan rekap atau pengecekan berulang?

---

## Slide 4 – AI dan Generative AI

### AI

Teknologi yang membantu komputer melakukan tugas yang membutuhkan pola, aturan, prediksi, atau analisis.

### Generative AI

Teknologi AI yang dapat menghasilkan teks, ide, ringkasan, gambar, atau kode berdasarkan instruksi pengguna.

### Contoh penggunaan kerja

- membuat draf surat;
- merangkum catatan rapat;
- mengelompokkan informasi;
- menyusun pertanyaan survei;
- membantu membuat kode prototipe.

### Catatan presenter

Berikan contoh yang dekat dengan pekerjaan peserta. Hindari menjelaskan AI hanya sebagai chatbot.

---

## Slide 5 – AI Membantu, Manusia Memeriksa

AI dapat membantu mempercepat pekerjaan, tetapi AI dapat:

- salah memahami konteks;
- menghasilkan informasi yang keliru;
- membuat kode yang tidak sesuai struktur data;
- menampilkan data terlalu rinci;
- memberi jawaban yang terlihat meyakinkan tetapi belum tentu benar.

### Prinsip penggunaan

> **AI membantu membuat draf. Manusia memeriksa, memperbaiki, dan mengambil keputusan.**

---

## Slide 6 – Data yang Aman untuk Latihan

### Gunakan

- data sintetis;
- nama samaran;
- angka agregat;
- kategori umum;
- contoh yang tidak merujuk pada warga tertentu.

### Jangan masukkan ke chat AI publik

- NIK dan nomor KK;
- nomor telepon;
- alamat lengkap;
- data kesehatan;
- password, token, dan API key;
- dokumen internal yang belum boleh dibagikan.

### Catatan presenter

Gunakan contoh data seperti `Unit A`, `Surat 001`, atau `Warga Contoh 01`.

---

## Slide 7 – ChatGPT dan Codex

| ChatGPT melalui chat | Codex |
|---|---|
| Berinteraksi melalui percakapan | Bekerja sebagai coding agent |
| Cocok untuk belajar, bertanya, merancang, dan meminta kode | Cocok untuk pekerjaan coding pada project dan file |
| Menjadi alat utama workshop | Diperkenalkan sebagai opsi lanjutan |
| Peserta menyalin hasil ke GAS | Codex dapat membantu mengedit atau menguji project secara langsung |

### Kalimat kunci

> **ChatGPT membantu kita berpikir dan menulis kode melalui chat. GAS menjalankan kode tersebut. Codex adalah alur lanjutan untuk bekerja langsung dengan file dan project coding.**

### Catatan presenter

Jangan membawa peserta masuk ke dua alat sekaligus. Fokus praktik tetap pada ChatGPT melalui chat.

---

## Slide 8 – Apa Itu Google Apps Script?

Google Apps Script adalah lingkungan berbasis JavaScript untuk membuat otomasi dan aplikasi yang terhubung dengan Google Workspace.

Dalam workshop, GAS digunakan untuk:

- membaca data dari Google Sheets;
- menghitung ringkasan;
- menampilkan halaman dashboard;
- menghubungkan logika server dengan tampilan browser;
- mempublikasikan prototipe sebagai web app.

### Analogi sederhana

- **Google Sheets:** tempat data disimpan.
- **Google Apps Script:** mesin yang membaca dan mengolah data.
- **HTML:** halaman yang dilihat pengguna.

---

## Slide 9 – Cara Membuka Google Apps Script

### Jalur yang direkomendasikan

1. Buka Google Sheet latihan.
2. Pilih menu **Extensions**.
3. Pilih **Apps Script**.
4. Project Apps Script akan terbuka di tab baru.

### Jalur alternatif

- buka `script.google.com`, lalu pilih **New project**;
- buka Google Drive, pilih **New → More → Google Apps Script**.

### Catatan presenter

Untuk latihan kelompok, gunakan jalur dari Google Sheets agar project langsung terhubung dengan spreadsheet sumber data.

---

## Slide 10 – Struktur Project GAS

Pada tahap pemula, peserta mengenal dua file utama:

```text
Project GAS
├── Code.gs
└── Index.html
```

### Penjelasan singkat

- `Code.gs`: kode server-side Apps Script.
- `Index.html`: tampilan dashboard, CSS, dan JavaScript browser.

### Catatan penting

Peserta tidak sedang mengunggah dua file dari komputer. Peserta meminta ChatGPT menghasilkan dua bagian kode, lalu membuat atau menempelkan kode tersebut ke dua file di editor GAS.

---

## Slide 11 – File `Code.gs`

`Code.gs` berisi logika yang dijalankan oleh Apps Script.

Contoh tanggung jawabnya:

- membuka halaman melalui `doGet()`;
- mengambil data dari Google Sheets;
- menghitung jumlah data;
- mengirim data ke halaman HTML;
- menjalankan fungsi server.

### Contoh bentuk sederhana

```javascript
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index');
}
```

### Catatan presenter

Tidak perlu membahas seluruh kode. Fokuskan pada hubungan antara `doGet()` dan file `Index.html`.

---

## Slide 12 – File `Index.html`

`Index.html` berisi halaman yang tampil di browser.

Di dalamnya dapat terdapat:

- struktur HTML;
- CSS untuk tampilan;
- JavaScript browser di dalam tag `<script>`;
- elemen kartu, tabel, filter, dan grafik.

### Pertanyaan penting

> Apakah JavaScript harus menjadi file terpisah?

### Jawaban untuk workshop dasar

Tidak harus. JavaScript browser dapat ditempatkan di dalam `Index.html`. File HTML tambahan baru dikenalkan jika struktur project sudah lebih kompleks.

---

## Slide 13 – Prompt ChatGPT untuk Dua File

### Instruksi inti

Minta ChatGPT:

1. membuat kode `Code.gs`;
2. membuat kode `Index.html`;
3. menampilkan keduanya dalam blok kode terpisah;
4. menjelaskan cara menempatkannya di Apps Script;
5. memberikan checklist pengujian.

### Prompt ringkas

```text
Buat prototipe dashboard Google Apps Script menggunakan data sintetis dari Google Sheets.

Tampilkan dua bagian kode secara terpisah:
1. CODE.GS untuk doGet() dan fungsi membaca data;
2. INDEX.HTML untuk tampilan dashboard, CSS, dan JavaScript browser.

Jelaskan file mana yang harus dibuat, cara menjalankan, cara menguji, dan cara memperbaiki
error. Jangan memakai data pribadi, password, token, atau API key.
```

---

## Slide 14 – Dari ChatGPT ke GAS

### Langkah praktik

1. Tulis kebutuhan di ChatGPT.
2. Minta output `Code.gs` dan `Index.html` secara terpisah.
3. Salin blok `Code.gs` ke file `Code.gs`.
4. Pilih **Add a file → HTML**.
5. Beri nama file `Index`.
6. Salin blok `Index.html` ke file tersebut.
7. Simpan project.
8. Jalankan dan uji.

### Kesalahan yang harus dihindari

- menempelkan HTML ke file `.gs`;
- menempelkan kode server ke file `.html`;
- mengubah banyak bagian sekaligus;
- langsung memakai data warga asli.

---

## Slide 15 – Menjalankan dan Membaca Error

### Jika dashboard belum berjalan

Periksa secara berurutan:

1. nama file `Index` sesuai dengan nama file pada `doGet()`;
2. nama Sheet dan nama kolom sesuai prompt;
3. fungsi yang dipanggil memang ada di `Code.gs`;
4. project sudah disimpan;
5. izin akses sudah diberikan;
6. pesan error dibaca secara lengkap.

### Prompt perbaikan error

```text
Saya mendapat error berikut:
[tempel pesan error lengkap]

File/fungsi yang terkait: [isi]
Tindakan terakhir: [isi]
Struktur Sheet: [isi]

Jelaskan penyebab paling mungkin, berikan perubahan sekecil mungkin, dan berikan
langkah pengujian setelah diperbaiki.
```

---

## Slide 16 – Arsitektur Dashboard

```text
Google Sheets
     ↓
Code.gs
     ↓
Index.html
     ↓
Dashboard di browser
```

### Penjelasan

- Google Sheets menyimpan data.
- `Code.gs` membaca dan mengolah data.
- `Index.html` menampilkan data.
- Web app membuat dashboard dapat dibuka melalui link.

### Catatan presenter

Gunakan diagram ini sebagai titik pemahaman utama sebelum peserta masuk ke praktik kelompok.

---

## Slide 17 – Fitur Dashboard Minimum

Setiap kelompok membuat:

- tiga kartu ringkasan;
- satu tabel;
- satu filter atau pencarian;
- satu grafik;
- indikator tanggal pembaruan;
- catatan bahwa data adalah data latihan.

### Fitur yang belum menjadi target

- login khusus;
- integrasi API eksternal;
- notifikasi otomatis;
- database kompleks;
- penggunaan data warga asli.

---

## Slide 18 – Tiga Kasus Kelompok

### Kelompok 1

Monitoring surat masuk dan disposisi.

### Kelompok 2

Monitoring agenda dan kegiatan internal.

### Kelompok 3

Rekap layanan atau aduan non-sensitif.

### Output yang sama untuk semua kelompok

Setiap kelompok mengumpulkan prototipe, prompt log, link/hasil deployment, dan checklist pengujian.

---

## Slide 19 – Publish sebagai Web App

### Alur umum

1. Pastikan `doGet()` berjalan.
2. Pilih **Deploy**.
3. Pilih **New deployment**.
4. Pilih tipe **Web app**.
5. Periksa siapa yang menjalankan aplikasi.
6. Periksa siapa yang boleh mengakses.
7. Deploy.
8. Salin link hasil deployment.
9. Uji link pada browser.

### Catatan keamanan

Untuk workshop, gunakan data sintetis. Jangan membuat data sensitif dapat diakses melalui link publik.

---

## Slide 20 – Presentasi Hasil Kelompok

Setiap kelompok menyampaikan dalam waktu singkat:

1. masalah kerja yang dipilih;
2. data yang digunakan;
3. fitur dashboard;
4. prompt yang paling membantu;
5. error atau kendala yang ditemukan;
6. batasan prototipe;
7. langkah lanjutan jika solusi ingin dikembangkan.

### Penutup

> **AI membantu mempercepat proses. Aparatur tetap memegang kendali atas data, verifikasi, dan keputusan.**

---

## Catatan Teknis untuk Presenter

- Google Apps Script mendukung file kode dengan ekstensi `.gs` dan file HTML dengan ekstensi `.html` dalam satu project.
- Project dapat dibuat dari Google Sheets melalui **Extensions → Apps Script**, dari Google Drive, atau dari halaman Apps Script.
- Halaman web app biasanya disajikan melalui fungsi `doGet()`.
- JavaScript browser dan CSS dapat ditempatkan di file HTML untuk latihan dasar.
- Deployment perlu diuji dengan akun dan pengaturan akses yang benar.

Referensi teknis resmi:

- [Google Developers – Script Projects](https://developers.google.com/apps-script/guides/projects)
- [Google Developers – HTML Service](https://developers.google.com/apps-script/guides/html)
- [Google Developers – Web Apps](https://developers.google.com/apps-script/guides/web)
- [OpenAI Developers – Code generation and Codex](https://developers.openai.com/api/docs/guides/code-generation)
