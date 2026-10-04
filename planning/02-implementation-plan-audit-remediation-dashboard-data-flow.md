# Implementation Plan: Revisi Materi Berbasis Data Excel → Dashboard Link

- **Project:** PkM Magister Teknik Informatika UNPAM – Kecamatan Tambun Selatan
- **Tanggal dibuat:** 3 Oktober 2026
- **Pelaksanaan lokal:** 4 Oktober 2026
- **Status:** two-presenter deck revision implemented and locally verified; cloud validation and live deployment remain pending
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

- [x] Konfirmasi desain materi: output peserta adalah dashboard web yang dapat dibuka lewat link, bukan Canvas ChatGPT.
- [x] Pilih `Rekap Layanan Kecamatan` sebagai demo utama.
- [x] Alur latihan ditetapkan: mulai dari file dummy panitia; data kantor masing-masing hanya setelah izin dan anonimisasi.
- [x] Tetapkan opsi aman: untuk pelatihan, peserta memakai dummy data; data nyata hanya boleh digunakan setelah ada izin, anonimisasi, dan pengaturan akses.
- [ ] Tetapkan pembagian peran final dengan Syam/Taufik; draft ownership sudah dicantumkan pada deck.
- [x] Target minimum ditetapkan: satu demo end-to-end dan satu perubahan kecil; deployment semua kelompok opsional.

**Output:** keputusan desain workshop satu halaman.

### Tahap 1 — Starter kit data dan Google Sheets

**Tujuan:** peserta tidak mulai dari spreadsheet kosong tanpa struktur.

- [x] Membuat tiga file Excel dummy dengan 100 baris.
- [x] Menambahkan sheet `Data` yang siap diimpor ke Google Sheets.
- [x] Menambahkan sheet `Panduan` berisi definisi kolom dan batasan data.
- [x] Membuat instruksi impor: upload Excel → Open with Google Sheets → File → Save as Google Sheets bila masih mode Office → cek header dan tipe tanggal.
- [x] Menambahkan checklist kualitas data:
  - header tidak berubah;
  - tanggal terbaca sebagai tanggal;
  - status memakai pilihan yang konsisten;
  - tidak ada NIK, nomor kontak, alamat lengkap, atau dokumen rahasia;
  - jumlah baris terbaca 100 untuk dataset latihan.
- [x] Menyediakan preview/screenshot fallback bila internet/akun bermasalah.

**Output:** tiga Excel latihan, instruksi impor, dan checklist kualitas data.

### Tahap 2 — Desain informasi dashboard

**Tujuan:** memindahkan fokus dari tool ke kebutuhan kerja.

- [x] Tambahkan slide “Siapa pengguna dashboard?”
- [x] Tambahkan slide “Pertanyaan kerja yang ingin dijawab”.
- [x] Tambahkan data dictionary ringkas untuk dataset utama melalui sheet `Panduan` dan worksheet peserta.
- [x] Definisikan KPI secara eksplisit:
  - total layanan = jumlah baris layanan valid;
  - selesai = jumlah baris dengan status `Selesai`;
  - masih diproses = jumlah baris dengan status `Diproses` atau `Menunggu Dokumen`;
  - dibatalkan tidak dihitung sebagai selesai.
- [x] Tampilkan contoh sebelum/sesudah:
  - sebelum: membaca baris satu per satu;
  - sesudah: melihat total, status, jenis layanan, dan tanggal pembaruan.
- [x] Tambahkan catatan bahwa angka dashboard membantu pemantauan, bukan keputusan otomatis.

**Output:** storyboard dashboard dan definisi KPI.

### Tahap 3 — Revisi alur teknis ChatGPT → GAS

**Tujuan:** mempertahankan praktik kode tetapi menyederhanakan beban kognitif.

- [x] Ringkas teori AI umum dan tandai ownership Pak Syam pada bagian common core.
- [x] Codex dikeluarkan dari jalur praktik utama; deck fokus pada ChatGPT melalui chat.
- [x] Ganti framing menjadi “dashboard yang dibuat dengan bantuan AI”.
- [x] Revisi prompt agar meminta:
  - membaca nama kolom;
  - menyusun rancangan KPI dan filter;
  - menghasilkan `Code.gs` dan `Index.html` terpisah;
  - mempertahankan nama kolom;
  - memakai data sintetis;
  - menjelaskan langkah impor dan testing;
  - tidak mengubah struktur data tanpa persetujuan.
- [x] Tambahkan prompt perubahan kecil untuk satu filter atau satu kartu KPI.
- [x] Tambahkan prompt troubleshooting yang meminta perbaikan sekecil mungkin.
- [x] Tegaskan bahwa ChatGPT hanya membantu merancang/kode; hasil akhir tampil di dashboard web Apps Script.

**Output:** prompt utama, prompt perubahan kecil, prompt error, dan catatan fasilitator.

### Tahap 4 — Revisi deck HTML

**Tujuan:** mengubah pusat cerita deck dari kode ke masalah/data/hasil, sekaligus memberi ruang yang cukup untuk pembagian teori Pak Syam dan praktik Yazid.

Target struktur canonical setelah koreksi pembagian pemateri: **28 slide** dengan blok teori, serah-terima, dan blok praktik.

1. Dashboard Rekap Layanan Kecamatan.
2. Pembagian materi.
3. Basic AI untuk pekerjaan administrasi.
4. Generative AI dan cara kerjanya.
5. Contoh pemanfaatan AI di kantor kecamatan.
6. Batasan AI dan verifikasi manusia.
7. Keamanan data saat memakai AI.
8. Formula prompting yang benar.
9. Prompt buruk versus prompt baik.
10. Latihan singkat menyusun prompt.
11. Dari teori ke praktik dashboard.
12. Hasil yang dibawa pulang.
13. Masalah kerja: data ada, informasi belum cepat terbaca.
14. Dari Excel ke Google Sheets.
15. Data dictionary dan data aman.
16. Siapa memakai dashboard dan untuk pertanyaan apa.
17. Dari kolom data ke KPI.
18. Contoh tampilan dashboard akhir.
19. ChatGPT sebagai alat bantu.
20. Prompt dashboard berdasarkan kolom Sheet.
21. Membuka Google Apps Script.
22. Menempatkan Code.gs dan Index.html.
23. Dashboard berjalan.
24. Satu perubahan kecil.
25. Testing dan verifikasi.
26. Menerbitkan dashboard sebagai link.
27. Checklist hasil kelompok.
28. Langkah setelah workshop.

Struktur tambahan setelah koreksi pemateri:

- slide 2: pembagian teori Pak Syam dan praktik Yazid;
- slide 3–10: Basic AI, Generative AI, contoh penggunaan, batasan, keamanan, formula prompting, prompt buruk vs baik, dan latihan prompt;
- slide 11: serah-terima dari teori ke praktik;
- slide 12–26: alur dashboard Excel → Sheets → ChatGPT → Apps Script → testing → link;
- slide 27–28: checklist kelompok dan penutup.

Yang tetap dikurangi:

- penjelasan Codex dari jalur praktik utama;
- screenshot editor yang berulang;
- tiga kelompok membuat aplikasi penuh sekaligus;
- klaim deployment sebagai hasil wajib.

**Output:** deck HTML revisi dan README yang menjelaskan alur Excel → Sheets → GAS → link.

### Tahap 5 — Rundown dua pemateri: skenario 80 dan 120 menit

User mengonfirmasi pembagian teori/praktik, bukan tambahan durasi. Skenario inti **80 menit**: pembukaan 5, teori/prompting Pak Syam 25, serah-terima 3, praktik Yazid 39, checklist/penutup 5, cadangan 3. Jadwal di bawah hanya berlaku **jika 120 menit penuh tersedia** dan disetujui tim.

| Durasi | Sesi | Pemateri | Hasil |
|---:|---|---|---|
| 5 menit | Pembukaan dan tujuan | Bersama | Peserta memahami alur dan output |
| 30 menit | Basic AI, Generative AI, contoh penggunaan, batasan, dan keamanan | Pak Syam | Peserta memahami kapan AI dapat membantu dan apa yang harus dijaga |
| 15 menit | Formula prompting, contoh prompt, dan latihan singkat | Pak Syam | Peserta memiliki prompt yang berisi peran, tujuan, konteks, data, batasan, output, dan cara uji |
| 5 menit | Serah-terima ke praktik | Bersama | Prompt teori dihubungkan ke dashboard |
| 10 menit | Data Excel → Google Sheets → pertanyaan kerja | Yazid | Sheet dan definisi KPI siap dipakai |
| 15 menit | Demo ChatGPT → `Code.gs` + `Index.html` | Yazid | Peserta memahami lokasi dua file dan alur data |
| 25 menit | Praktik perubahan kecil | Yazid + pendamping | Satu filter/KPI/label berhasil diubah |
| 10 menit | Testing dan akses | Yazid | KPI, filter, data aman, dan kebijakan akses diperiksa |
| 5 menit | Share-out dan penutup | Bersama | Kelompok menyimpan prompt, checklist, dan batasan |

Jika waktu lebih pendek, pertahankan teori inti, satu demo end-to-end, dan satu perubahan kecil. Deployment semua kelompok tidak dijadikan syarat.

### Tahap 6 — Testing dan verifikasi

**Tujuan:** memastikan materi benar-benar dapat diikuti.

- [ ] Uji impor ketiga file Excel ke Google Sheets pada akun cloud pelatihan (pending; belum ada validasi cloud pada turn ini).
- [x] Uji preview lokal dengan fixture 100 baris dan KPI 100/25/50.
- [x] Uji filter status dan jenis layanan pada preview lokal.
- [x] Uji KPI terhadap manifest expected-dashboard dan test harness Code.gs.
- [x] Uji mutasi satu status: selesai 25 → 24 dan masih diproses 50 → 51.
- [x] Uji deck pada 1440×810 dan 1280×720 tanpa overflow.
- [ ] Uji deployment dengan akun latihan (pending; memerlukan aksi cloud dan URL nyata).
- [ ] Uji link pada akun yang memiliki akses dan akun yang tidak memiliki akses (pending).
- [x] Scan manual artefak lokal: data sintetis, tidak ada credential atau data warga nyata.
- [x] Siapkan fallback preview lokal/screenshot dan aturan klaim deployment.

**Output:** checklist QA teknis dan catatan blocker.

### Tahap 7 — Evaluasi pembelajaran

- [x] Buat pre-test/post-test singkat tentang:
  - data yang aman dan tidak aman;
  - arti KPI;
  - alur Excel → Sheets → GAS → link;
  - pentingnya verifikasi hasil AI.
- [x] Instrumen evaluasi menilai pemahaman alur, keamanan, dan verifikasi; fasilitator tetap melakukan observasi proses.
- [x] Minta setiap kelompok menyimpan:
  - file/data source;
  - prompt utama;
  - screenshot atau link dashboard;
  - checklist pengujian;
  - satu batasan atau risiko.
- [ ] Minta mitra menentukan PIC dan kemungkinan tindak lanjut pada hari pelaksanaan.

**Output:** instrumen evaluasi dan artefak hasil kelompok.

## 5. Hasil eksekusi lokal — 4 Oktober 2026

### Selesai

- Tiga workbook dummy diperbaiki dan dibangun ulang di `outputs/2026-10-03-dummy-datasets/`; generator dan verifier sekarang menunjuk ke folder output yang benar.
- Panduan workbook tidak lagi menimpa baris kedua field; catatan diletakkan di bawah tabel panduan.
- Dataset surat hanya mengisi `Tanggal_Selesai` untuk status `Selesai`, dan prioritas tidak lagi semuanya `Tinggi`. Dataset agenda memakai pasangan nama/jenis kegiatan yang konsisten dan status yang cocok dengan tanggal acuan 4 Oktober 2026.
- Starter project Apps Script diperkuat: konfigurasi ID spreadsheet eksplisit, validasi header/ID/tanggal/angka, batas baris jelas, filter default aman, dan UI tidak mempertahankan angka lama saat error.
- Preview lokal dashboard memakai fixture 100 baris dari workbook utama dan diuji pada browser.
- Deck awal 18 slide kemudian diperluas menjadi 28 slide setelah koreksi pembagian pemateri. Versi baru menambahkan blok teori Pak Syam, latihan prompting, serah-terima, dan tetap mempertahankan praktik dashboard, hasil render lokal, layout flow, print mode, dan overview handler.
- Materi pendukung dibuat: panduan peserta, worksheet kelompok, checklist data/dashboard, evaluasi pre/post, dan preflight fasilitator.
- QA lulus melalui `python3 scripts/qa_html_deck.py` dan `node scripts/qa_starter_dashboard.mjs`.

### Pending / perlu verifikasi cloud

- Belum melakukan import ke Google Drive/Google Sheets, menjalankan `setupSpreadsheetId()` pada akun cloud, membuat deployment, atau menguji URL lintas akun.
- Belum mengklaim deployment live berhasil. Fasilitator harus mengisi URL dan aturan akses pada `materials/workshop/facilitator-preflight-and-access.md` setelah pengujian nyata.

## 6. Acceptance criteria

Plan ini dianggap selesai apabila:

- [x] Tiga file Excel dummy tersedia dan masing-masing memiliki 100 baris data.
- [x] Setiap file memiliki sheet `Data` dan `Panduan`.
- [x] Ada satu dataset utama yang dipakai dalam demo end-to-end melalui fixture lokal; validasi cloud masih pending.
- [x] Deck menyebutkan dengan jelas bahwa hasil akhir adalah dashboard web berbasis link.
- [x] Panduan peserta menjelaskan impor Excel dan konversi eksplisit ke Google Sheets tanpa mengubah header; impor cloud nyata masih pending.
- [x] Peserta memahami minimal tiga KPI dan sumber kolomnya melalui deck, worksheet, dan evaluasi.
- [x] Peserta dapat mengikuti penempatan `Code.gs` dan `Index.html` serta `setupSpreadsheetId()`.
- [x] Preview dan test harness menguji filter serta perubahan status; praktik cloud nyata tetap perlu diuji fasilitator.
- [x] Deployment tidak dipresentasikan sebagai berhasil tanpa URL/link yang terbukti.
- [x] Deck tidak mewajibkan peserta memahami seluruh syntax JavaScript.
- [x] Pembagian teori/praktik dan target output diselaraskan dalam rancangan 2 jam; final timing/pembagian menit masih perlu konfirmasi tim.
- [x] Ada fallback teknis dan checklist keamanan.
- [x] Hasil revisi deck lulus QA layout, filter preview, print mode, dan dibuka melalui `file://`.

## 7. Risiko dan mitigasi

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Peserta mengunggah data warga asli | Risiko privasi | Mulai dari dummy data, beri peringatan, dan minta pemeriksaan kolom sebelum prompt. |
| Peserta hanya memakai Canvas ChatGPT | Output tidak menjadi dashboard | Tunjukkan bahwa ChatGPT hanya menghasilkan rancangan/kode; hasil akhir dibuat di Google Sheets/GAS dan dibuka lewat link. |
| Akun Google atau izin berbeda | Praktik macet | Siapkan akun latihan/fasilitator, screenshot, dan satu demo deployment terverifikasi. |
| Teori dan praktik terlalu padat | Peserta kehilangan konteks atau tidak sempat menguji dashboard | Pisahkan blok Pak Syam/Yazid, gunakan satu use case utama, satu perubahan kecil, deployment opsional. |
| Header Excel berubah | Kode gagal membaca data | Gunakan data dictionary, instruksi impor, dan validasi nama kolom. |
| Peserta takut melihat kode | Partisipasi rendah | Gunakan copy-paste terarah, jelaskan fungsi utama, dan ukur keberhasilan dari pemahaman alur. |
| Dashboard terlihat benar tetapi KPI salah | Keputusan keliru | Hitung KPI manual, ubah satu record, dan cek angka sebelum share-out. |

## 8. Urutan file yang direvisi/ditambah

1. `materials/workshop/html-deck/ai-dashboard-gas-workshop.html`
2. `materials/workshop/html-deck/README.md`
3. `materials/workshop/01-rancangan-materi-workshop-ai-dashboard-gas.md`
4. `materials/workshop/02-outline-deck-chat-to-gas.md`
5. `STATE.md`
6. `CANVAS.md`
7. `HISTORY.md`

## 9. Status pekerjaan saat plan dibuat

- **Selesai:** audit substansi audience dan brief.
- **Selesai:** tiga Excel dummy, masing-masing 100 baris.
- **Selesai:** verifikasi workbook dapat diimpor kembali, sheet `Data`/`Panduan` tersedia, dan tidak ada formula error pada hasil scan.
- **Selesai secara lokal:** revisi deck HTML, starter dashboard, prompt card, panduan import/deploy, worksheet, checklist, evaluasi, dan preflight fasilitator.
- **Keputusan kerja:** praktik dimulai dengan file dummy panitia; penggunaan data kantor dan deployment cloud memerlukan konfirmasi akses/izin terpisah.


## 10. Koreksi pembagian pemateri — 4 Oktober 2026

Versi 18 slide terlalu memadatkan materi karena menganggap bagian teori AI sudah berada di luar deck. User mengklarifikasi bahwa deck/handout ini akan dipakai dalam satu sesi bersama: Pak Syam menjelaskan teori, sedangkan Yazid memandu praktik.

Keputusan implemented:

- canonical deck menjadi 28 slide;
- Pak Syam memiliki slides 3–10;
- Yazid memiliki slides 12–26;
- slides 1–2, 11, 27–28 menjadi bagian bersama/serah-terima;
- QA deck dan bundle sudah diulang setelah perubahan dan lulus.
