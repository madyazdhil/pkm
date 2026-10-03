# Implementation Plan: Revisi Materi Berbasis Data Excel → Dashboard Link

- **Project:** PkM Magister Teknik Informatika UNPAM – Kecamatan Tambun Selatan
- **Tanggal dibuat:** 3 Oktober 2026
- **Status:** proposed → ready to implement
- **Rujukan audit:** [MATERIAL_AUDIT.md](../MATERIAL_AUDIT.md)
- **Output utama:** materi workshop yang mengajarkan peserta mengunggah/mengonversi data Excel masing-masing ke Google Sheets, lalu membuat dashboard yang dapat dibuka melalui link web app Google Apps Script.

## 1. Keputusan desain yang menjadi dasar

### 1.1 Alur pembelajaran baru

> **Data Excel peserta → Google Sheets → ChatGPT membantu merancang/kode → Google Apps Script membaca Sheet → dashboard web → link yang bisa dibuka → verifikasi dan pengaturan akses**

Canvas ChatGPT hanya menjadi tempat meminta bantuan dan menghasilkan rancangan/kode. Canvas bukan output dashboard dan bukan tempat peserta memamerkan hasil akhir.

### 1.2 Tiga dataset latihan

Peserta akan menerima atau memilih salah satu dari tiga Excel dummy berikut:

1. `outputs/2026-10-03-dummy-datasets/dummy-data-rekap-layanan-kecamatan.xlsx`
2. `outputs/2026-10-03-dummy-datasets/dummy-data-monitoring-surat-disposisi.xlsx`
3. `outputs/2026-10-03-dummy-datasets/dummy-data-agenda-kegiatan-internal.xlsx`

Masing-masing berisi **100 baris data sintetis**, sheet `Data`, dan sheet `Panduan` yang menjelaskan arti kolom. Dataset dibuat sebagai bahan latihan, bukan data resmi Kecamatan Tambun Selatan.

### 1.3 Use case utama

Use case utama deck adalah **Dashboard Rekap Layanan Kecamatan**. Dua dataset lain menjadi variasi kasus kelompok, bukan tiga alur teknis yang harus dibangun bersamaan.

Dashboard minimum:

- tiga kartu ringkasan;
- satu tabel data;
- satu filter utama;
- satu grafik sederhana;
- label data latihan/sintetis;
- tanggal pembaruan;
- catatan akses dan batasan penggunaan.

## 2. Tujuan revisi

Setelah revisi, peserta non-teknis diharapkan dapat:

1. mengidentifikasi file dan kolom data yang mereka miliki;
2. mengunggah atau mengimpor Excel ke Google Sheets;
3. menjelaskan pertanyaan kerja yang ingin dijawab dashboard;
4. meminta ChatGPT membantu membuat rancangan dashboard dan dua file kode;
5. menempatkan kode ke Google Apps Script tanpa harus menulis kode dari nol;
6. menguji minimal satu filter dan satu ringkasan;
7. membuka dashboard melalui link web app;
8. menjelaskan batasan data, verifikasi manual, dan siapa yang boleh mengakses.

## 3. Scope dan non-goals

### In scope

- tiga dataset Excel dummy 100 baris;
- alur impor Excel → Google Sheets;
- prompt yang membaca struktur kolom tanpa data pribadi;
- dashboard rekap internal berbasis `Code.gs` dan `Index.html`;
- testing data, tampilan, filter, dan akses;
- deployment web app sebagai demo/hasil link bila akun dan jaringan siap;
- revisi deck HTML, prompt card, lembar kerja kelompok, dan checklist.

### Non-goals

- memakai data masyarakat asli dalam latihan;
- membuat sistem pelayanan publik produksi;
- membuat login/role-based access yang kompleks;
- mengintegrasikan API eksternal;
- mewajibkan semua peserta melakukan deployment sendiri;
- membangun tiga dashboard berbeda secara penuh dalam satu sesi.

## 4. Rencana implementasi bertahap

### Tahap 0 — Persiapan dan keputusan tim

**Tujuan:** mengunci alur sebelum deck diedit.

- [ ] Konfirmasi bahwa output peserta adalah dashboard web yang dapat dibuka lewat link, bukan Canvas ChatGPT.
- [ ] Pilih `Rekap Layanan Kecamatan` sebagai demo utama.
- [ ] Tentukan apakah peserta mengunggah Excel masing-masing atau memakai file latihan panitia.
- [ ] Tetapkan opsi aman: untuk pelatihan, peserta memakai dummy data; data nyata hanya boleh digunakan setelah ada izin, anonimisasi, dan pengaturan akses.
- [ ] Tetapkan pembagian peran: fasilitator konsep, fasilitator teknis, dan pendamping kelompok.
- [ ] Putuskan apakah deployment dilakukan semua kelompok atau hanya demo fasilitator.

**Output:** keputusan desain workshop satu halaman.

### Tahap 1 — Starter kit data dan Google Sheets

**Tujuan:** peserta tidak mulai dari spreadsheet kosong tanpa struktur.

- [x] Membuat tiga file Excel dummy dengan 100 baris.
- [x] Menambahkan sheet `Data` yang siap diimpor ke Google Sheets.
- [x] Menambahkan sheet `Panduan` berisi definisi kolom dan batasan data.
- [ ] Membuat satu instruksi impor: upload Excel ke Drive → Open with Google Sheets → cek header dan tipe tanggal.
- [ ] Menambahkan checklist kualitas data:
  - header tidak berubah;
  - tanggal terbaca sebagai tanggal;
  - status memakai pilihan yang konsisten;
  - tidak ada NIK, nomor kontak, alamat lengkap, atau dokumen rahasia;
  - jumlah baris terbaca 100 untuk dataset latihan.
- [ ] Menyediakan backup CSV atau screenshot bila internet/akun bermasalah.

**Output:** tiga Excel latihan, instruksi impor, dan checklist kualitas data.

### Tahap 2 — Desain informasi dashboard

**Tujuan:** memindahkan fokus dari tool ke kebutuhan kerja.

- [ ] Tambahkan slide “Siapa pengguna dashboard?”
- [ ] Tambahkan slide “Pertanyaan kerja yang ingin dijawab”.
- [ ] Tambahkan data dictionary ringkas untuk dataset utama.
- [ ] Definisikan KPI secara eksplisit:
  - total layanan = jumlah baris layanan valid;
  - selesai = jumlah baris dengan status `Selesai`;
  - masih diproses = jumlah baris dengan status `Diproses` atau `Menunggu Dokumen`;
  - dibatalkan tidak dihitung sebagai selesai.
- [ ] Tampilkan contoh sebelum/sesudah:
  - sebelum: membaca baris satu per satu;
  - sesudah: melihat total, status, jenis layanan, dan tanggal pembaruan.
- [ ] Tambahkan catatan bahwa angka dashboard membantu pemantauan, bukan keputusan otomatis.

**Output:** storyboard dashboard dan definisi KPI.

### Tahap 3 — Revisi alur teknis ChatGPT → GAS

**Tujuan:** mempertahankan praktik kode tetapi menyederhanakan beban kognitif.

- [ ] Ringkas teori AI umum dan koordinasikan dengan Materi 1 Pak Syam.
- [ ] Pindahkan Codex ke appendix/catatan fasilitator.
- [ ] Ganti istilah “AI dashboard” menjadi “dashboard yang dibuat dengan bantuan AI”.
- [ ] Revisi prompt agar meminta:
  - membaca nama kolom;
  - menyusun rancangan KPI dan filter;
  - menghasilkan `Code.gs` dan `Index.html` terpisah;
  - mempertahankan nama kolom;
  - memakai data sintetis;
  - menjelaskan langkah impor dan testing;
  - tidak mengubah struktur data tanpa persetujuan.
- [ ] Tambahkan prompt perubahan kecil untuk satu filter atau satu kartu KPI.
- [ ] Tambahkan prompt troubleshooting yang meminta perbaikan sekecil mungkin.
- [ ] Tegaskan bahwa ChatGPT hanya membantu merancang/kode; hasil akhir tampil di dashboard web Apps Script.

**Output:** prompt utama, prompt perubahan kecil, prompt error, dan catatan fasilitator.

### Tahap 4 — Revisi deck HTML

**Tujuan:** mengubah pusat cerita deck dari kode ke masalah/data/hasil.

Target struktur sekitar 16–18 slide inti:

1. Judul Materi 2: Dashboard Rekap Layanan Kecamatan.
2. Hasil yang dibawa pulang.
3. Masalah kerja: data sudah ada tetapi sulit dibaca cepat.
4. Contoh file Excel dan cara mengunggahnya.
5. Data dictionary dan aturan data aman.
6. Siapa pengguna dashboard dan pertanyaan kerja.
7. Dari kolom data ke KPI.
8. Contoh dashboard hasil akhir.
9. ChatGPT sebagai alat bantu rancangan/kode.
10. Prompt dashboard berdasarkan kolom Sheet.
11. Membuka Apps Script dari Google Sheets.
12. Menempatkan `Code.gs` dan `Index.html`.
13. Menjalankan dashboard dan membaca hasil.
14. Mengubah satu filter atau KPI.
15. Menguji data, tampilan, dan akses.
16. Menerbitkan dashboard menjadi link web app.
17. Checklist hasil kelompok.
18. Tindak lanjut dan PIC.

Yang dikurangi atau dipindahkan:

- teori AI dasar yang sudah menjadi Materi 1;
- penjelasan Codex dari jalur praktik utama;
- screenshot editor yang berulang;
- tiga kelompok membuat aplikasi penuh sekaligus;
- klaim deployment sebagai hasil wajib.

**Output:** deck HTML revisi dan README yang menjelaskan alur Excel → Sheets → GAS → link.

### Tahap 5 — Revisi rundown 80 menit

Notulen saat ini memberi waktu materi utama sekitar **10.40–12.00**, yaitu sekitar 80 menit. Rancangan yang disarankan:

| Durasi | Sesi | Hasil |
|---:|---|---|
| 5 menit | Orientasi | Peserta memahami output: dashboard link, bukan Canvas |
| 8 menit | Masalah kerja dan data | Peserta mengenali kolom dan pertanyaan kerja |
| 7 menit | Keamanan data | Peserta memahami data yang tidak boleh digunakan |
| 10 menit | Demo upload/import Excel | Sheet latihan siap dibaca |
| 15 menit | Demo ChatGPT → dua file | Peserta melihat prompt, `Code.gs`, dan `Index.html` |
| 20 menit | Praktik terarah | Peserta mengubah satu dataset/filter/KPI |
| 8 menit | Testing dan akses | Peserta memeriksa data, tampilan, dan akses |
| 5 menit | Share-out singkat | Satu atau dua kelompok menunjukkan hasil |
| 2 menit | Penutup | Peserta membawa checklist dan langkah lanjut |

Jika tersedia 120–150 menit penuh, praktik dapat diperpanjang. Jika tidak, deployment oleh semua kelompok tidak dijadikan syarat.

### Tahap 6 — Testing dan verifikasi

**Tujuan:** memastikan materi benar-benar dapat diikuti.

- [ ] Uji impor ketiga file Excel ke Google Sheets.
- [ ] Uji dashboard dengan dataset utama 100 baris.
- [ ] Uji satu filter periode/status.
- [ ] Uji KPI terhadap hitungan manual dari dataset.
- [ ] Uji perubahan satu status dan pastikan angka berubah.
- [ ] Uji tampilan pada desktop/proyektor.
- [ ] Uji deployment dengan akun latihan.
- [ ] Uji link pada akun yang memiliki akses dan akun yang tidak memiliki akses.
- [ ] Pastikan tidak ada data pribadi atau credential di file, prompt, kode, dan screenshot.
- [ ] Siapkan fallback jika deployment tidak berhasil: screenshot hasil dashboard + demonstrasi link oleh fasilitator.

**Output:** checklist QA teknis dan catatan blocker.

### Tahap 7 — Evaluasi pembelajaran

- [ ] Buat pre-test/post-test singkat tentang:
  - data yang aman dan tidak aman;
  - arti KPI;
  - alur Excel → Sheets → GAS → link;
  - pentingnya verifikasi hasil AI.
- [ ] Nilai peserta berdasarkan kemampuan menjelaskan alur, bukan jumlah fitur.
- [ ] Minta setiap kelompok menyimpan:
  - file/data source;
  - prompt utama;
  - screenshot atau link dashboard;
  - checklist pengujian;
  - satu batasan atau risiko.
- [ ] Minta mitra menentukan PIC dan kemungkinan tindak lanjut.

**Output:** instrumen evaluasi dan artefak hasil kelompok.

## 5. Acceptance criteria

Plan ini dianggap selesai apabila:

- [ ] Tiga file Excel dummy tersedia dan masing-masing memiliki 100 baris data.
- [ ] Setiap file memiliki sheet `Data` dan `Panduan`.
- [ ] Ada satu dataset utama yang dipakai dalam demo end-to-end.
- [ ] Deck menyebutkan dengan jelas bahwa hasil akhir adalah dashboard web berbasis link.
- [ ] Peserta dapat mengimpor Excel ke Google Sheets tanpa mengubah header.
- [ ] Peserta memahami minimal tiga KPI dan sumber kolomnya.
- [ ] Peserta dapat mengikuti penempatan `Code.gs` dan `Index.html`.
- [ ] Peserta dapat menguji minimal satu filter atau perubahan kecil.
- [ ] Deployment tidak dipresentasikan sebagai berhasil tanpa URL/link yang terbukti.
- [ ] Deck tidak mewajibkan peserta memahami seluruh syntax JavaScript.
- [ ] Waktu praktik dan target output sesuai dengan waktu materi efektif.
- [ ] Ada fallback teknis dan checklist keamanan.
- [ ] Hasil revisi deck lulus QA layout dan dibuka ulang melalui `file://`.

## 6. Risiko dan mitigasi

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Peserta mengunggah data warga asli | Risiko privasi | Mulai dari dummy data, beri peringatan, dan minta pemeriksaan kolom sebelum prompt. |
| Peserta hanya memakai Canvas ChatGPT | Output tidak menjadi dashboard | Tunjukkan bahwa ChatGPT hanya menghasilkan rancangan/kode; hasil akhir dibuat di Google Sheets/GAS dan dibuka lewat link. |
| Akun Google atau izin berbeda | Praktik macet | Siapkan akun latihan/fasilitator, screenshot, dan satu demo deployment terverifikasi. |
| Waktu 80 menit tidak cukup | Dashboard tidak selesai | Satu use case utama, satu perubahan kecil, deployment opsional. |
| Header Excel berubah | Kode gagal membaca data | Gunakan data dictionary, instruksi impor, dan validasi nama kolom. |
| Peserta takut melihat kode | Partisipasi rendah | Gunakan copy-paste terarah, jelaskan fungsi utama, dan ukur keberhasilan dari pemahaman alur. |
| Dashboard terlihat benar tetapi KPI salah | Keputusan keliru | Hitung KPI manual, ubah satu record, dan cek angka sebelum share-out. |

## 7. Urutan file yang akan direvisi setelah plan disetujui

1. `materials/workshop/html-deck/ai-dashboard-gas-workshop.html`
2. `materials/workshop/html-deck/README.md`
3. `materials/workshop/01-rancangan-materi-workshop-ai-dashboard-gas.md`
4. `materials/workshop/02-outline-deck-chat-to-gas.md`
5. `STATE.md`
6. `CANVAS.md`
7. `HISTORY.md`

## 8. Status pekerjaan saat plan dibuat

- **Selesai:** audit substansi audience dan brief.
- **Selesai:** tiga Excel dummy, masing-masing 100 baris.
- **Selesai:** verifikasi workbook dapat diimpor kembali, sheet `Data`/`Panduan` tersedia, dan tidak ada formula error pada hasil scan.
- **Belum dimulai:** revisi deck HTML dan materi pendukung.
- **Belum diputuskan:** apakah peserta menggunakan Excel masing-masing atau file latihan panitia; deployment semua kelompok atau demo fasilitator.
