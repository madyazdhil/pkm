# Rancangan Materi Workshop
## Pemanfaatan Generative AI dan Dashboard Interaktif dengan Google Apps Script

- **Project:** PkM Magister Teknik Informatika UNPAM – Kecamatan Tambun Selatan
- **Status:** Draft kerja / proposed
- **Tanggal pembaruan:** 25 September 2026
- **Format:** Workshop praktik berbasis kelompok
- **Peserta:** Aparatur/staf Kantor Kecamatan Tambun Selatan
- **Durasi acuan:** 120 menit; dapat diperpanjang menjadi 150 menit bila tersedia waktu tambahan

> Judul resmi kegiatan tetap: **Workshop Pemanfaatan Generative AI dan Dashboard Interaktif dalam Peningkatan Efisiensi Administrasi di Kantor Kecamatan Tambun Selatan.**
>
> Judul materi yang lebih mudah dipahami peserta: **Dari ChatGPT ke Dashboard Internal: Mengenal Generative AI, Google Apps Script, dan Vibe Coding.**
>
> **Fokus deck:** peserta belajar memakai ChatGPT melalui chat untuk merancang dan menghasilkan dua file utama, lalu menempatkan file tersebut di Google Apps Script. Codex dikenalkan hanya sebagai gambaran alat lanjutan untuk alur kerja coding berbasis aplikasi/editor, bukan sebagai alat praktik utama workshop.

---

## 1. Gagasan Utama Workshop

Workshop tidak dibagi menjadi tiga pelatihan yang terpisah. Semua peserta menerima **materi dasar yang sama**, lalu berlatih dalam tiga kelompok dengan kasus yang berbeda.

Alur besarnya:

1. Memahami apa yang dapat dan tidak dapat dilakukan oleh Generative AI.
2. Belajar menyusun prompt yang jelas untuk kebutuhan kerja.
3. Memahami konsep *vibe coding*: menggunakan AI sebagai rekan kerja untuk membuat prototipe secara bertahap, bukan menyalin kode secara buta.
4. Membuat dashboard sederhana dengan sumber data Google Sheets dan Google Apps Script.
5. Mempublikasikan prototipe sebagai web app dan menguji apakah fitur utamanya berjalan.
6. Menjelaskan batasan, keamanan data, dan langkah verifikasi sebelum solusi digunakan dalam pekerjaan nyata.

**Prinsip desain:** peserta tidak ditargetkan menghasilkan sistem pemerintahan siap produksi dalam satu sesi. Target realistisnya adalah **prototipe dashboard internal yang berfungsi menggunakan data sintetis/non-sensitif**.

---

## 2. Tujuan Pembelajaran

Setelah mengikuti workshop, peserta diharapkan mampu:

1. Menjelaskan pengertian dasar AI dan Generative AI dengan bahasa sederhana.
2. Mengidentifikasi contoh pekerjaan administratif yang dapat dibantu AI.
3. Membedakan data contoh yang aman digunakan untuk latihan dan data pribadi/rahasia yang tidak boleh dimasukkan ke layanan AI publik.
4. Menjelaskan perbedaan penggunaan ChatGPT melalui chat dan Codex melalui lingkungan coding.
5. Menyusun prompt dengan unsur peran, tujuan, konteks, data, batasan, format keluaran, dan kriteria keberhasilan.
6. Meminta ChatGPT menghasilkan dua file dasar untuk prototipe GAS: `Code.gs` dan `Index.html`.
7. Membuka Google Apps Script, membuat project, menambahkan file, dan menempelkan kode dari chat.
8. Mengikuti alur *vibe coding* untuk membuat atau memperbaiki prototipe secara bertahap.
9. Menjelaskan hubungan Google Sheets, Google Apps Script, dan halaman dashboard.
10. Membuat dashboard sederhana yang memiliki kartu ringkasan, tabel, filter, dan minimal satu visualisasi.
11. Mempublikasikan prototipe melalui Google Apps Script sesuai pengaturan akses yang aman.
12. Menguji hasil AI dan aplikasi secara manual sebelum dipakai sebagai dasar pekerjaan.

---

## 3. Format Peserta dan Pembagian Kelompok

### 3.1 Struktur kelompok

- Peserta dibagi menjadi **3 kelompok**.
- Setiap kelompok menerima satu paket kasus, satu Google Sheet berisi data sintetis, dan satu lembar target fitur.
- Satu fasilitator/panitia mendampingi setiap kelompok bila jumlah panitia memungkinkan.

### 3.2 Peran di dalam kelompok

Setiap kelompok dapat membagi peran berikut:

1. **Pemilik masalah/proses:** menjelaskan kebutuhan kerja yang ingin dibantu.
2. **Prompt lead:** menyusun prompt dan mencatat percakapan penting dengan AI.
3. **Builder:** menjalankan langkah pembuatan dan perubahan kode.
4. **Tester:** memeriksa fitur, data, tampilan, dan kesalahan.
5. **Publisher/documenter:** mengatur deployment, menyimpan link, dan menyiapkan presentasi singkat.

Jika jumlah peserta sedikit, satu orang boleh memegang lebih dari satu peran.

### 3.3 Hasil yang harus dikumpulkan setiap kelompok

Setiap kelompok minimal menghasilkan:

- satu prototipe dashboard berbasis Google Apps Script;
- satu link web app atau hasil deployment yang dapat diuji;
- satu prompt utama dan dua prompt perbaikan yang dicatat;
- satu checklist pengujian sederhana;
- satu penjelasan singkat tentang data yang digunakan dan batasan prototipe.

---

## 4. Rancangan Rundown 120 Menit

| Waktu | Sesi | Isi dan aktivitas | Output |
|---|---|---|---|
| Waktu | Sesi | Isi dan aktivitas | Output |
|---|---|---|---|
| 0–8 menit | Pembukaan dan orientasi | Tujuan workshop, pembagian kelompok, pengenalan tiga kasus | Peserta memahami tantangan kelompok |
| 8–23 menit | Generative AI untuk pekerjaan administrasi | AI dan Generative AI, contoh pemanfaatan, keterbatasan, verifikasi manusia, keamanan data | Peserta memahami peluang dan risiko AI |
| 23–33 menit | ChatGPT dan Codex | Chat sebagai ruang tanya-jawab/pembuatan kode; Codex sebagai opsi lanjutan di lingkungan coding | Peserta memahami alat yang dipakai dan tidak dipakai |
| 33–45 menit | Mengenal Google Apps Script | Cara membuka GAS, project, `Code.gs`, `Index.html`, dan fungsi `doGet()` | Peserta dapat menemukan editor GAS |
| 45–58 menit | Prompting untuk dua file GAS | Prompt yang meminta keluaran terpisah untuk `Code.gs` dan `Index.html` | Setiap kelompok memiliki prompt awal |
| 58–68 menit | Demo ChatGPT ke GAS | Menyalin kode, membuat file, menjalankan, membaca error, dan mencoba web app | Peserta memahami alur teknis |
| 68–105 menit | Praktik kelompok | Kelompok membangun dashboard dari template dan data kasus | Prototipe dashboard versi minimum |
| 105–115 menit | Uji dan publish | Memeriksa fitur, memperbaiki error, melakukan deployment web app | Link/hasil deployment dan checklist uji |
| 115–120 menit | Demo singkat dan penutup | Kelompok menyampaikan masalah, fitur, dan satu batasan solusi | Refleksi, dokumentasi, dan evaluasi |

### Catatan durasi

Waktu praktik 40 menit hanya realistis apabila panitia sudah menyiapkan:

- template Google Sheet;
- starter code Google Apps Script;
- dataset sintetis;
- instruksi deployment satu halaman;
- akun Google dan akses internet yang sudah diuji.

Jika tersedia 150 menit, tambahkan 20 menit untuk presentasi tiap kelompok dan 10 menit untuk post-test/refleksi.

---

## 5. Materi Inti Workshop

### Materi 1 – Basic AI untuk Aparatur

Pokok bahasan:

- pengertian sederhana Artificial Intelligence dan Generative AI;
- contoh AI untuk membuat draf, merangkum, mengelompokkan, menyusun ide, dan membantu analisis awal;
- AI bukan pengganti kewenangan aparatur atau pengambil keputusan;
- keluaran AI dapat salah, tidak lengkap, bias, atau tidak sesuai konteks;
- prinsip *human-in-the-loop*: hasil AI harus dibaca, diperiksa, dan disetujui manusia yang berwenang;
- contoh alur kerja aman: data contoh → prompt → keluaran AI → verifikasi → revisi → penggunaan terbatas.

### Materi 2 – Keamanan Data dan Etika Penggunaan AI

Peserta diperkenalkan pada aturan praktis berikut:

**Jangan memasukkan data berikut ke layanan AI publik untuk latihan:**

- NIK, nomor KK, nomor telepon, alamat rinci, data kesehatan, dan data identitas warga;
- kata sandi, token, API key, kredensial, dan informasi autentikasi;
- dokumen internal yang belum boleh dibagikan;
- informasi yang dapat mengungkap kondisi pribadi seseorang;
- data mentah yang belum mendapat izin untuk diproses.

**Gunakan pengganti berikut:**

- data sintetis;
- nama samaran seperti Warga A atau Unit B;
- angka yang sudah diagregasi;
- contoh kasus yang tidak merujuk pada individu nyata;
- kolom yang sudah dianonimkan.

Checklist singkat sebelum memakai AI:

1. Apakah data ini boleh dibagikan ke layanan AI yang digunakan?
2. Apakah data pribadi sudah dihapus atau dianonimkan?
3. Apakah keluaran AI akan diverifikasi?
4. Siapa yang bertanggung jawab atas hasil akhirnya?
5. Apakah dashboard hanya dibagikan kepada pihak yang berhak melihatnya?

### Materi 3 – ChatGPT dan Codex dalam Workshop

Deck perlu memberi batas yang jelas agar peserta tidak bingung dengan banyaknya alat AI:

| Alat | Cara berinteraksi | Peran dalam workshop |
|---|---|---|
| **ChatGPT melalui chat** | Peserta menjelaskan kebutuhan dan meminta kode melalui percakapan | **Alat utama praktik:** merancang dashboard, menghasilkan dua file, menjelaskan kode, dan memperbaiki error |
| **Codex** | Peserta bekerja bersama agen coding di ChatGPT, editor, atau terminal | **Pengenalan singkat:** contoh alur lanjutan ketika sudah memiliki folder proyek dan ingin AI membantu mengedit atau menguji file secara langsung |
| **Google Apps Script** | Peserta menempatkan, menjalankan, dan mempublikasikan kode | **Lingkungan eksekusi:** tempat kode terhubung ke Google Sheets dan menjadi web app |

Kalimat sederhana untuk deck:

> **ChatGPT membantu kita menulis dan memahami kode melalui chat. Google Apps Script menjalankan kode tersebut. Codex adalah pilihan lanjutan ketika pekerjaan coding dilakukan langsung pada file dan lingkungan pengembangan.**

Workshop ini sengaja berfokus pada chat karena peserta perlu memahami alur dasar terlebih dahulu: menjelaskan masalah, meminta file, menyalin kode, menjalankan, dan memperbaiki.

### Materi 4 – Basic Prompting untuk GAS

Formula prompt yang dipakai dalam workshop:

> **Peran + tujuan + konteks + data + batasan + format keluaran + kriteria berhasil**

Contoh prompt awal:

```text
Bertindak sebagai analis proses administrasi pemerintahan.

Saya ingin membuat prototipe dashboard internal untuk memantau status surat masuk
menggunakan Google Sheets dan Google Apps Script. Data latihan hanya berupa data
sintetis dengan kolom: tanggal, unit, jenis surat, status, prioritas, dan tenggat.

Bantu saya:
1. menyusun struktur dashboard minimum;
2. menentukan tiga kartu ringkasan;
3. menentukan satu tabel dan satu grafik;
4. menyusun langkah implementasi bertahap;
5. menyebutkan risiko data dan hal yang harus diuji.

Jangan menggunakan data pribadi dan jangan membuat keputusan administratif.
Sajikan jawaban sebagai checklist implementasi yang mudah diikuti pemula.
```

Peserta kemudian belajar mengembangkan prompt secara bertahap, bukan meminta aplikasi lengkap dalam satu perintah.

### Materi 5 – Vibe Coding yang Bertanggung Jawab

Definisi kerja yang digunakan dalam workshop:

> *Vibe coding* adalah proses membuat prototipe dengan bantuan AI melalui percakapan iteratif: menjelaskan kebutuhan, meminta perubahan kecil, menjalankan hasilnya, membaca error, lalu memperbaikinya secara bertahap.

Siklus praktik:

1. **Jelaskan masalah:** apa proses kerja yang ingin dipantau?
2. **Tentukan data:** kolom apa yang tersedia dan apa maknanya?
3. **Minta rancangan:** minta AI membuat struktur solusi sebelum kode.
4. **Bangun versi minimum:** mulai dari satu halaman dan satu sumber data.
5. **Jalankan:** tes dengan data sintetis.
6. **Baca error:** salin pesan error secara utuh tanpa menebak-nebak.
7. **Perbaiki satu hal:** jangan mengubah seluruh aplikasi sekaligus.
8. **Uji ulang:** cek data, tampilan, filter, dan akses.
9. **Dokumentasikan:** simpan prompt, perubahan, dan batasan.

Aturan penting:

- AI boleh membantu menulis kode, tetapi peserta tetap harus memahami fungsi utama kode.
- Jangan menghapus seluruh kode hanya karena ada satu error kecil.
- Minta AI menjelaskan file dan fungsi yang diubah.
- Perubahan dilakukan satu fitur dalam satu waktu.
- Jangan menaruh password, token, atau data rahasia di prompt maupun kode.

### Materi 6 – Mengenal Google Apps Script untuk Dashboard

#### Apa itu Google Apps Script?

Google Apps Script adalah lingkungan berbasis JavaScript untuk mengotomatisasi dan memperluas Google Workspace. Dalam workshop, GAS dipakai sebagai tempat untuk membaca data dari Google Sheets, menjalankan logika sederhana, dan menyajikan dashboard melalui browser.

#### Cara membuka Google Apps Script

Peserta dapat membuka GAS dengan salah satu cara berikut:

1. **Dari Google Sheets:** buka spreadsheet latihan, pilih **Extensions → Apps Script**.
2. **Dari Google Drive:** pilih **New → More → Google Apps Script**.
3. **Dari halaman Apps Script:** buka `script.google.com`, lalu pilih **New project**.

Untuk workshop, jalur yang paling mudah adalah membuka Google Sheet latihan lalu memilih **Extensions → Apps Script**, sehingga project langsung terkait dengan spreadsheet sumber data.

#### Dua file yang diminta dari ChatGPT

Pada tahap pemula, deck jangan menyebutnya sebagai “upload dua file”. Istilah yang lebih tepat adalah **meminta ChatGPT menghasilkan dua potongan kode, lalu membuat/menempelkan kode tersebut ke dua file di Apps Script**:

1. **`Code.gs`**
   - berisi kode server-side Apps Script;
   - berisi `doGet()` untuk menyajikan halaman;
   - membaca data dari Google Sheets;
   - menghitung ringkasan atau melayani permintaan dari halaman dashboard.

2. **`Index.html`**
   - berisi struktur halaman dashboard;
   - dapat memuat CSS;
   - dapat memuat JavaScript yang berjalan di browser melalui tag `<script>`;
   - menampilkan kartu, tabel, filter, dan grafik.

Untuk workshop dasar, **JavaScript tidak perlu dibuat sebagai file terpisah**. JavaScript browser dapat ditempatkan di dalam `Index.html`. File tambahan seperti `Script.html` baru dikenalkan bila peserta sudah memahami struktur dasar.

#### Cara memasukkan dua file ke Apps Script

1. Buka project Apps Script.
2. Pada file `Code.gs`, hapus contoh kode yang tidak diperlukan lalu tempel kode server dari ChatGPT.
3. Pilih **Add a file → HTML**, beri nama `Index`, lalu tempel kode HTML, CSS, dan JavaScript dari ChatGPT.
4. Simpan project.
5. Jalankan fungsi yang diperlukan atau gunakan **Deploy → New deployment → Web app** saat siap diuji.

Arsitektur sederhana yang diperkenalkan:

1. **Google Sheets:** menyimpan data latihan.
2. **Google Apps Script:** membaca data, memproses ringkasan, dan menjadi backend sederhana.
3. **HTML/CSS/JavaScript:** menampilkan kartu, tabel, filter, dan grafik.
4. **Web app deployment:** membuat prototipe dapat dibuka melalui link dengan pengaturan akses tertentu.

Konsep minimum yang perlu dikenal peserta:

- fungsi `doGet()` untuk menampilkan halaman;
- fungsi server untuk membaca data dari Sheet;
- pemanggilan fungsi server dari halaman dashboard;
- pemisahan data, logika, dan tampilan;
- pengaturan deployment dan akses;
- pengujian menggunakan data sintetis.

Peserta tidak perlu menghafal semua sintaks. Fokusnya adalah memahami alur dan mampu meminta bantuan AI dengan konteks yang benar.

---

## 6. Tiga Kasus Praktik Kelompok

Semua data kasus harus dibuat sintetis. Kolom berikut adalah contoh dan dapat disesuaikan setelah tim mengonfirmasi kebutuhan mitra.

### Kelompok 1 – Dashboard Monitoring Surat Masuk dan Disposisi

**Masalah:** pimpinan atau staf membutuhkan ringkasan status surat tanpa memeriksa baris data satu per satu.

**Contoh kolom:**

- ID surat;
- tanggal masuk;
- unit tujuan;
- jenis surat;
- prioritas;
- status disposisi;
- tenggat tindak lanjut;
- keterangan singkat non-sensitif.

**Fitur minimum:**

- jumlah seluruh surat;
- jumlah surat berdasarkan status;
- daftar surat yang mendekati atau melewati tenggat;
- filter berdasarkan unit dan status;
- satu grafik ringkasan.

**Batasan:** tidak menggunakan isi surat asli, identitas warga, atau dokumen rahasia.

### Kelompok 2 – Dashboard Agenda dan Kegiatan Internal

**Masalah:** staf membutuhkan tampilan ringkas untuk memantau agenda dan status kegiatan internal.

**Contoh kolom:**

- nama kegiatan;
- tanggal;
- unit penanggung jawab;
- PIC samaran;
- status persiapan;
- lokasi umum;
- jumlah peserta rencana;
- catatan tindak lanjut.

**Fitur minimum:**

- jumlah kegiatan bulan berjalan;
- kegiatan yang akan datang;
- status persiapan;
- filter unit atau periode;
- tabel agenda dan satu grafik.

**Batasan:** tidak menampilkan data pribadi peserta atau dokumen anggaran yang tidak diperlukan.

### Kelompok 3 – Dashboard Rekap Layanan atau Aduan Non-Sensitif

**Masalah:** staf membutuhkan gambaran jenis permohonan/aduan dan status tindak lanjut secara agregat.

**Contoh kolom:**

- tanggal penerimaan;
- kategori layanan/aduan;
- kelurahan atau wilayah umum;
- kanal penerimaan;
- status tindak lanjut;
- kategori waktu penyelesaian;
- unit penanggung jawab.

**Fitur minimum:**

- jumlah laporan/permohonan;
- rekap berdasarkan kategori;
- jumlah yang selesai dan masih diproses;
- filter periode dan status;
- satu grafik atau indikator tren.

**Batasan:** tidak memakai nama, NIK, alamat lengkap, nomor kontak, atau isi aduan asli.

---

## 7. Spesifikasi Dashboard Minimum

Agar tiga kelompok dapat dinilai dengan standar yang sama, setiap dashboard minimal memiliki:

- satu halaman utama;
- tiga kartu ringkasan;
- satu tabel data;
- satu filter atau pencarian;
- satu grafik/visualisasi;
- sumber data dari Google Sheets;
- tombol atau mekanisme refresh data;
- informasi tanggal pembaruan data;
- tampilan yang dapat dibuka pada browser;
- catatan bahwa data yang digunakan adalah data latihan/sintetis.

Fitur lanjutan seperti login khusus, integrasi API eksternal, notifikasi otomatis, atau database kompleks **tidak menjadi target workshop**.

---

## 8. Contoh Prompt Praktik Bertahap

### 8.1 Prompt untuk meminta dua file GAS dari ChatGPT

```text
Bertindak sebagai mentor Google Apps Script untuk pemula.

Saya ingin membuat prototipe dashboard internal menggunakan Google Sheets dan
Google Apps Script. Gunakan data sintetis dengan kolom: tanggal, unit, kategori,
status, dan jumlah.

Buat solusi paling sederhana dengan dua file berikut:

1. Code.gs
   - fungsi doGet() untuk membuka Index.html;
   - fungsi getDashboardData() untuk membaca data dari Sheet aktif;
   - hasil data dikirim ke halaman dalam format yang mudah dipakai.

2. Index.html
   - HTML untuk judul, tiga kartu ringkasan, tabel, dan satu filter;
   - CSS sederhana agar mudah dibaca;
   - JavaScript browser di dalam tag <script> untuk memanggil fungsi server;
   - jangan memakai library eksternal.

Tampilkan jawaban dalam dua blok kode terpisah dengan label yang jelas:
CODE.GS dan INDEX.HTML. Setelah kode, berikan langkah penempatan kode ke Apps
Script, cara menjalankan, dan checklist pengujian. Jangan memakai data pribadi,
API key, password, atau token.
```

**Catatan fasilitator:** minta peserta menyalin `Code.gs` dan `Index.html` sebagai dua bagian terpisah. Jangan menempelkan kode HTML ke file `.gs` atau kode Apps Script ke file `.html`.

### 8.2 Prompt untuk merancang solusi

```text
Bantu saya mengubah kebutuhan berikut menjadi rancangan dashboard minimum.

Kasus: monitoring agenda kegiatan internal.
Data yang tersedia: nama kegiatan, tanggal, unit, status persiapan, dan jumlah peserta.
Pengguna: staf kecamatan.

Tentukan:
1. indikator yang paling berguna;
2. kartu ringkasan;
3. tabel;
4. filter;
5. grafik;
6. risiko salah tafsir data.

Gunakan data sintetis dan jelaskan alasan setiap komponen.
```

### 8.3 Prompt untuk membuat perubahan kecil

```text
Pada dashboard yang sudah ada, tambahkan filter berdasarkan status persiapan.
Jangan mengubah struktur kolom Google Sheet dan jangan menghapus fitur yang sudah
berjalan. Jelaskan file/fungsi yang diubah dan berikan langkah pengujian.
```

### 8.4 Prompt untuk memperbaiki error

```text
Saya mendapat error berikut saat menjalankan web app:
[tempel pesan error lengkap di sini]

Konteks:
- fungsi yang dijalankan: [nama fungsi]
- tindakan sebelum error: [langkah]
- struktur Sheet: [nama sheet dan nama kolom]

Analisis penyebab paling mungkin. Berikan perbaikan sekecil mungkin, jelaskan alasan
perubahan, dan berikan tiga langkah untuk menguji bahwa perbaikan berhasil.
```

### 8.5 Prompt untuk melakukan pemeriksaan keamanan

```text
Tinjau prototipe dashboard ini dari sisi keamanan data dan privasi.
Gunakan hanya konteks data sintetis. Buat checklist yang memeriksa:
1. data yang tampil;
2. pengaturan akses web app;
3. kemungkinan kredensial tertulis di kode;
4. risiko menampilkan data terlalu rinci;
5. langkah verifikasi sebelum digunakan dengan data nyata.
```

---

## 9. Alur Demo Fasilitator

Fasilitator sebaiknya tidak langsung menunjukkan aplikasi yang terlalu sempurna. Tunjukkan prosesnya agar peserta memahami cara berpikirnya:

1. Menampilkan Google Sheet dengan data sintetis.
2. Menjelaskan masalah kerja dalam satu kalimat.
3. Membuka ChatGPT dan memperlihatkan prompt yang meminta dua file.
4. Menjelaskan perbedaan `Code.gs` dan `Index.html`.
5. Membuka Google Apps Script dari menu Extensions di Google Sheets.
6. Menempelkan kode server ke `Code.gs`.
7. Membuat file HTML bernama `Index` dan menempelkan kode `Index.html`.
8. Menjalankan atau menguji fungsi yang diperlukan.
9. Menunjukkan hasil dashboard awal.
10. Meminta ChatGPT menambahkan satu fitur kecil, misalnya filter status.
11. Menunjukkan contoh error yang wajar dan cara meminta AI memperbaikinya.
12. Menjalankan pengujian singkat.
13. Menunjukkan proses deployment dan cara mencatat link.

Dengan pola ini, peserta belajar bahwa membuat aplikasi dengan AI bukan sekadar satu kali menekan tombol generate.

---

## 10. Checklist Troubleshooting Dasar

| Gejala | Pemeriksaan pertama |
|---|---|
| Halaman web app kosong | Pastikan nama file pada `createHtmlOutputFromFile('Index')` sama dengan nama file HTML `Index` |
| Muncul error fungsi tidak ditemukan | Pastikan fungsi berada di `Code.gs` dan nama fungsi pada pemanggilan sama persis |
| Data tidak tampil | Periksa nama sheet, nama kolom, dan izin akses ke spreadsheet |
| Kode HTML masuk ke `Code.gs` | Pindahkan markup HTML ke file `Index.html` |
| JavaScript tidak berjalan | Periksa tag `<script>`, kurung/koma, serta pesan error di browser |
| Deployment tidak bisa dibuka | Periksa jenis deployment, akun yang menjalankan, dan siapa yang diberi akses |
| Peserta melihat akun Google yang salah | Gunakan satu akun Google atau jendela incognito khusus untuk latihan |

Peserta diarahkan untuk mengirimkan **pesan error lengkap, nama fungsi, tindakan terakhir, dan struktur file** ke ChatGPT. Jangan hanya menulis “error” tanpa konteks.

## 11. Kebutuhan Persiapan Panitia

### Sebelum hari pelaksanaan

- menyiapkan tiga dataset sintetis;
- membuat satu template Google Sheet per kelompok;
- membuat satu starter project Google Apps Script yang sudah dapat menampilkan halaman dasar;
- menyiapkan screenshot atau panduan singkat lokasi menu **Extensions → Apps Script**;
- menyiapkan prompt ChatGPT yang meminta output `Code.gs` dan `Index.html` secara terpisah;
- menyiapkan contoh `Code.gs` dan `Index.html` yang sudah diuji;
- menguji deployment menggunakan akun yang akan digunakan;
- menyiapkan prompt card satu halaman;
- menyiapkan checklist uji dan checklist keamanan;
- memastikan koneksi internet, proyektor, colokan, dan akun Google;
- menyiapkan backup berupa screenshot/video apabila deployment gagal karena jaringan atau izin akun.

### Saat pelaksanaan

- satu fasilitator fokus pada konsep dan demo;
- fasilitator kelompok membantu prompt, error, dan pengujian;
- panitia memastikan peserta tidak memasukkan data nyata/rahasia;
- setiap kelompok menyimpan link, screenshot, prompt, dan catatan batasan.

### Setelah pelaksanaan

- mengumpulkan hasil dashboard dan prompt log;
- melakukan post-test singkat;
- meminta peserta menilai manfaat materi;
- mencatat hambatan teknis dan kebutuhan pelatihan lanjutan;
- menyimpan dokumentasi sebagai bukti luaran kegiatan.

---

## 12. Rancangan Struktur Slide

1. Judul dan tujuan workshop.
2. Masalah administrasi yang ingin dibantu.
3. Apa itu AI dan Generative AI?
4. Contoh AI untuk pekerjaan aparatur.
5. Batasan AI, keamanan data, dan verifikasi manusia.
6. ChatGPT sebagai ruang kerja berbasis chat.
7. ChatGPT dan Codex: dua alur penggunaan yang berbeda.
8. Apa itu Google Apps Script?
9. Cara membuka Google Apps Script dari Google Sheets, Drive, atau halaman Apps Script.
10. Struktur project GAS: `Code.gs` dan `Index.html`.
11. Di mana JavaScript dan CSS diletakkan?
12. Prompt ChatGPT untuk menghasilkan dua file GAS.
13. Demo menyalin kode ChatGPT ke Apps Script.
14. Menjalankan, membaca error, dan meminta perbaikan.
15. Arsitektur Google Sheets, Apps Script, dan dashboard.
16. Deployment sebagai web app dan pengaturan akses.
17. Instruksi tiga kasus kelompok.
18. Checklist dashboard minimum.
19. Presentasi singkat hasil kelompok.
20. Refleksi dan langkah penggunaan yang aman.

---

## 13. Indikator Keberhasilan Workshop

Indikator yang dapat digunakan dalam proposal dan evaluasi:

- minimal tiga kelompok menyelesaikan prototipe dashboard minimum;
- setiap kelompok mampu menjelaskan sumber data dan indikator yang ditampilkan;
- setiap kelompok memiliki minimal satu prompt utama dan dua prompt perbaikan;
- peserta mampu menyebutkan minimal tiga jenis data yang tidak boleh dimasukkan ke AI publik;
- peserta mampu menjelaskan bahwa keluaran AI harus diverifikasi manusia;
- setiap kelompok berhasil melakukan uji fitur utama atau memiliki catatan error yang terdokumentasi;
- tidak ada data pribadi masyarakat yang digunakan dalam latihan;
- peserta menunjukkan peningkatan pemahaman berdasarkan pre-test dan post-test sederhana.

---

## 14. Keputusan Desain yang Perlu Disepakati Tim

Bagian ini masih **under discussion** dan perlu diputuskan sebelum slide/modul final dibuat:

1. Apakah durasi tetap 120 menit atau diperpanjang menjadi 150 menit?
2. AI yang akan dipakai peserta: satu platform utama atau bebas menggunakan platform yang tersedia?
3. Apakah seluruh kelompok memakai starter code yang sama atau masing-masing memakai template sedikit berbeda?
4. Siapa fasilitator pendamping untuk Kelompok 1, 2, dan 3?
5. Apakah deployment akan dilakukan oleh seluruh kelompok atau cukup satu kelompok sebagai demo apabila waktu terbatas?
6. Apakah output akhir cukup berupa prototipe, atau perlu ditambah SOP penggunaan singkat untuk mitra?
7. Data kasus final apa yang paling dekat dengan kebutuhan nyata Kecamatan Tambun Selatan setelah dikonfirmasi kembali?

---

## 15. Referensi Teknis untuk Catatan Presenter

- [Google Developers: Script Projects](https://developers.google.com/apps-script/guides/projects) – struktur project, file `.gs` dan `.html`, serta cara membuat project dari Drive atau Google Sheets.
- [Google Developers: HTML Service](https://developers.google.com/apps-script/guides/html) – HTML dapat memuat CSS dan JavaScript sisi browser; `doGet()` digunakan untuk menyajikan halaman web app.
- [Google Developers: Web Apps](https://developers.google.com/apps-script/guides/web) – langkah deployment dan pengaturan akses web app.
- [OpenAI: Codex](https://openai.com/codex/) – pengenalan Codex sebagai coding agent di ChatGPT, editor, dan terminal.

## 16. Rekomendasi Utama

Bentuk paling aman dan realistis untuk kegiatan ini adalah:

> **Satu workshop terpadu dengan common core basic AI + prompting + keamanan data, dilanjutkan praktik kelompok berbasis kasus untuk membuat prototipe dashboard internal menggunakan vibe coding dan Google Apps Script.**

Kuncinya bukan membuat aplikasi yang banyak fitur, tetapi memastikan peserta mengalami satu alur utuh:

> **masalah kerja → data sintetis → prompt → prototipe → uji → publish → refleksi keamanan.**
