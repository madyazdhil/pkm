# Audit Materi Dashboard untuk Aparatur Kecamatan Tambun Selatan

**Tanggal audit:** 3 Oktober 2026  
**Objek utama:** `materials/workshop/html-deck/ai-dashboard-gas-workshop.html`  
**Pemilik materi:** Ahmad Yazid Hilmi — Materi 2 / teknis dashboard  
**Status:** Audit substansi selesai; remediasi lokal dieksekusi pada 4 Oktober 2026. Validasi Google Cloud dan deployment live masih pending.

## 1. Kesimpulan eksekutif

Materi **sudah berada di jalur yang benar**, tetapi **belum sepenuhnya sesuai dengan audience dan brief utama**.

Penilaian ringkas:

| Aspek | Nilai audit | Kesimpulan |
|---|---:|---|
| Kesesuaian dengan tema AI + dashboard | 7/10 | Alurnya jelas dari ChatGPT → Apps Script → dashboard. |
| Kesesuaian dengan audience staf/aparatur kecamatan | 5/10 | Terlalu cepat masuk ke istilah dan struktur coding; konteks kerja nyata masih umum. |
| Kesesuaian dengan brief “dashboard pelayanan / menampilkan informasi dari data tertentu” | 6/10 | Fitur dashboard disebutkan, tetapi contoh data, pertanyaan kerja, dan tampilan hasil belum cukup konkret. |
| Kelayakan untuk durasi pelaksanaan | 4/10 | Deck 28 slide dan target praktiknya terlalu besar jika materi efektif hanya sekitar 80 menit. |
| Keamanan dan verifikasi AI | 8/10 | Bagian ini sudah kuat dan bertanggung jawab. |
| Kesiapan sebagai materi siap dibawakan | 6/10 | Perlu satu use case utama, dataset latihan, starter kit, dan alur praktik yang lebih realistis. |

**Verdict:** materi ini saat ini lebih tepat disebut **“pengantar membuat prototipe dashboard dengan bantuan AI”**, belum menjadi materi yang benar-benar kuat untuk **“membantu aparatur menampilkan informasi dari data pelayanan tertentu.”**

## 2. Kesesuaian terhadap brief project

### Yang sudah sesuai

- Deck memakai konteks Kecamatan Tambun Selatan dan aparatur/staf sebagai audience.
- Deck mengajarkan alur end-to-end: masalah kerja → prompt → `Code.gs` + `Index.html` → pengujian → deployment.
- Data sintetis, privasi, verifikasi manusia, dan batasan prototipe sudah ditekankan.
- Google Sheets → Google Apps Script → dashboard cukup konsisten dengan arah materi teknis Yazid.
- Ada tiga contoh kasus: surat/disposisi, agenda internal, dan rekap layanan/aduan non-sensitif.
- Deck tidak mengklaim deployment publik berhasil tanpa URL yang benar-benar terbukti.

### Yang belum sepenuhnya sesuai

1. **Brief meminta dashboard pelayanan atau penampilan informasi dari data tertentu, tetapi deck belum memilih satu data utama.**
   Peserta diberi tiga kasus sekaligus. Akibatnya, mereka belum melihat dengan tegas: data apa yang dipakai, siapa yang melihat, pertanyaan apa yang dijawab, dan keputusan apa yang dibantu.

2. **Contoh dashboard belum cukup nyata.**
   Slide 21 dan 24 lebih banyak menampilkan mockup/target tampilan. Belum ada satu contoh utuh dari dataset → indikator → tabel → filter → grafik → interpretasi hasil.

3. **Dashboard yang dibahas lebih dekat ke dashboard internal umum daripada dashboard pelayanan kecamatan.**
   “Surat masuk/disposisi” dan “agenda internal” relevan untuk administrasi, tetapi bukan contoh utama pelayanan masyarakat. Jika brief utamanya pelayanan, rekap layanan non-sensitif sebaiknya menjadi contoh utama, sedangkan dua kasus lain menjadi pilihan tambahan.

4. **Deck masih membawa terlalu banyak materi AI umum.**
   Slide 4–8 membahas AI dasar, verifikasi, keamanan, ChatGPT, Codex, dan Apps Script. Ini berpotensi tumpang tindih dengan Materi 1 milik Pak Syam. Untuk Materi 2, bagian tersebut cukup menjadi pengantar singkat lalu fokus berpindah ke data dan dashboard.

5. **Materi survei digital dari proposal tidak ada di deck.**
   Ini tidak menjadi masalah jika file ini memang khusus Materi 2, tetapi judul dan struktur deck harus secara eksplisit menyatakan bahwa ini adalah **Materi 2: Pembuatan Dashboard Pelayanan**, bukan deck keseluruhan PkM.

## 3. Kesesuaian terhadap audience

Audience yang tertulis di project adalah pegawai/staf/aparatur Kantor Kecamatan Tambun Selatan. Untuk audience tersebut, asumsi desain yang lebih aman adalah:

- kemampuan digital beragam;
- tidak semua peserta nyaman dengan coding;
- sebagian peserta mungkin lebih membutuhkan hasil informasi yang mudah dibaca daripada memahami struktur aplikasi;
- waktu praktik singkat;
- perangkat, akun Google, koneksi, dan hak akses dapat berbeda;
- contoh harus dekat dengan pekerjaan, tetapi tidak boleh memakai data warga asli.

### Temuan utama

#### A. Terlalu tool-centric
Istilah berikut muncul berurutan dalam satu alur: Generative AI, prompting, Codex, Google Apps Script, `Code.gs`, `Index.html`, server-side, browser-side, JavaScript, CSS, `doGet()`, deployment, dan web app.

Untuk peserta teknis, ini masuk akal. Untuk staf kecamatan, jumlah konsep tersebut terlalu banyak jika semuanya dianggap harus dipahami dalam satu sesi.

**Dampak:** peserta dapat mengikuti instruksi copy-paste, tetapi belum tentu memahami bagaimana data pelayanan berubah menjadi informasi yang berguna.

#### B. Terlalu sedikit konteks pekerjaan nyata
Slide 3 sudah memulai dengan pertanyaan yang baik, tetapi belum dilanjutkan dengan contoh workflow konkret:

- siapa yang mengisi data;
- kapan data diperbarui;
- siapa yang membaca dashboard;
- indikator mana yang dipakai pimpinan/staf;
- apa arti “selesai”, “diproses”, “tertunda”, atau “melewati tenggat”;
- tindakan apa yang dilakukan setelah melihat dashboard.

#### C. Bahasa cukup teknis dan campuran
Istilah teknis perlu dipertahankan seperlunya, tetapi selalu dengan terjemahan kerja. Contoh:

- “dashboard” → “tampilan ringkas untuk melihat status dan rekap”;
- “filter” → “penyaring berdasarkan periode/jenis/status”;
- “deployment” → “menerbitkan prototipe menjadi link yang bisa dibuka”;
- “server-side/browser-side” → cukup disebut “kode pengolah data” dan “kode tampilan”;
- “vibe coding” → tidak wajib untuk audience ini dan sebaiknya tidak menjadi istilah inti.

#### D. Codex tidak perlu berada di jalur utama
Slide 8 membahas ChatGPT, Codex, dan Google Apps Script. Sesuai keputusan project sebelumnya, Codex hanya pengenalan lanjutan. Untuk audience ini, Codex lebih baik dipindahkan ke appendix atau catatan fasilitator agar tidak menambah kebingungan.

## 4. Gap materi yang paling penting

### Prioritas P0 — harus diperbaiki sebelum dibawakan

1. **Pilih satu use case utama.**
   Rekomendasi: **Dashboard Rekap Layanan Kecamatan** menggunakan data sintetis/non-sensitif.

2. **Sediakan satu dataset latihan yang benar-benar dipakai dari awal sampai akhir.**
   Contoh kolom:

   - tanggal penerimaan;
   - jenis layanan;
   - wilayah umum/kelurahan;
   - kanal penerimaan;
   - status pelayanan;
   - unit penanggung jawab;
   - kategori waktu penyelesaian;
   - jumlah atau ID anonim.

3. **Tampilkan satu contoh utuh, bukan hanya arsitektur.**
   Peserta perlu melihat:

   `Sheet berisi baris data → pertanyaan kerja → tiga KPI → tabel → filter → grafik → kesimpulan yang dapat dibaca.`

4. **Selaraskan waktu dengan rundown nyata.**
   Notulen mencatat kegiatan pukul 10.00–12.00, dengan pembukaan/sambutan/doa sampai sekitar 10.40 dan materi utama 10.40–12.00. Artinya waktu materi efektif sekitar **80 menit**, bukan 120 menit.

5. **Turunkan target praktik.**
   Jangan menargetkan tiga kelompok membuat dashboard dan semuanya melakukan deployment dalam 80 menit. Target yang lebih realistis:

   - satu demo end-to-end oleh fasilitator;
   - peserta/kelompok mengubah satu label, satu filter, atau satu indikator;
   - deployment dilakukan sebagai demo fasilitator atau hanya jika waktu dan akses memungkinkan.

### Prioritas P1 — sangat disarankan

1. Tambahkan slide “Siapa memakai dashboard dan untuk keputusan apa?”.
2. Tambahkan data dictionary sederhana: nama kolom, contoh nilai, arti, dan aturan status.
3. Tambahkan definisi KPI agar angka tidak menyesatkan.
4. Tambahkan contoh “sebelum vs sesudah”:
   - sebelum: membuka banyak baris dan menghitung manual;
   - sesudah: melihat total, status, tren, dan daftar yang perlu ditindaklanjuti.
5. Tambahkan preflight teknis:
   - akun Google sudah siap;
   - peserta sudah masuk ke akun yang benar;
   - browser dan koneksi tersedia;
   - file Sheet latihan sudah dibagikan;
   - dataset sintetis sudah tersedia;
   - fasilitator memiliki backup screenshot/video.
6. Jelaskan bahwa AI membantu membuat rancangan/kode, tetapi dashboard **bukan otomatis menjadi “AI dashboard”**. Istilah yang lebih tepat: **dashboard yang dibuat dengan bantuan AI**.
7. Beri aturan akses deployment yang aman. Jangan hanya menyebut “siapa yang boleh mengakses”; berikan default yang disarankan untuk latihan dan jelaskan bahwa akses publik bukan pilihan otomatis.

### Prioritas P2 — penyempurnaan

1. Pindahkan Codex ke appendix.
2. Kurangi penjelasan syntax dan screenshot editor yang berulang.
3. Jadikan prompt card sebagai handout satu halaman, bukan seluruhnya dibaca dari slide.
4. Tambahkan satu slide troubleshooting non-teknis: “Jika tidak berhasil, siapa yang dihubungi dan apa yang harus dicatat?”.
5. Tambahkan output pasca-workshop: template Sheet, screenshot dashboard, data dictionary, prompt log, dan PIC tindak lanjut.

## 5. Rekomendasi use case utama

### Judul yang lebih dekat dengan audience

**Membuat Dashboard Rekap Layanan Kecamatan dari Data Google Sheets**

Subjudul:

**Dengan bantuan ChatGPT dan Google Apps Script, peserta belajar mengubah data latihan menjadi tampilan ringkas yang mudah dibaca.**

### Pertanyaan kerja yang dijawab

- Berapa jumlah layanan pada periode tertentu?
- Berapa yang selesai dan masih diproses?
- Jenis layanan apa yang paling banyak?
- Di unit/wilayah mana perlu dilakukan pengecekan lebih lanjut?
- Kapan terakhir data diperbarui?

### Fitur minimum yang realistis

- tiga kartu: total layanan, selesai, masih diproses;
- satu filter: periode atau status;
- satu tabel rekap;
- satu grafik batang berdasarkan jenis layanan;
- label “data latihan/sintetis”;
- waktu pembaruan data;
- catatan batasan: bukan pengganti sistem layanan resmi.

Dengan susunan tersebut, peserta belajar inti dashboard tanpa harus membangun aplikasi besar.

## 6. Rekomendasi struktur deck baru

Deck 28 slide sekarang dapat dipadatkan menjadi sekitar 16–18 slide inti:

1. Judul dan hasil belajar.
2. Masalah kerja: rekap layanan masih perlu dibaca satu per satu.
3. Contoh Sheet latihan dan data sintetis.
4. Siapa pengguna dashboard dan pertanyaan kerja yang dijawab.
5. Dari kolom data ke tiga KPI.
6. Contoh dashboard hasil akhir terlebih dahulu.
7. Aturan keamanan data dan verifikasi AI.
8. ChatGPT sebagai alat bantu, bukan pengambil keputusan.
9. Prompt yang meminta rancangan dashboard.
10. Prompt yang meminta dua file, dengan catatan peserta tidak harus memahami semua syntax.
11. Membuka Apps Script dari Sheets.
12. Memasukkan `Code.gs` dan `Index.html`.
13. Menjalankan dan memeriksa hasil.
14. Mengubah satu fitur sederhana.
15. Menguji data, tampilan, dan akses.
16. Demo deployment/berbagi hasil dengan akses aman.
17. Checklist hasil kelompok.
18. Langkah tindak lanjut dan PIC.

### Yang dipindahkan atau dikurangi

- Slide 4–5 AI umum: diringkas dan dikoordinasikan dengan Pak Syam.
- Slide 8 Codex: appendix.
- Slide 12 syntax HTML/CSS/JavaScript: cukup satu visual sederhana.
- Slide 15–18 screenshot editor: dipakai sebagai satu alur praktik, bukan empat penjelasan terpisah jika waktu tidak cukup.
- Slide 25 rundown: disesuaikan dengan waktu materi efektif 80 menit.

## 7. Audit terhadap struktur yang sudah ada

| Bagian deck | Status | Catatan audit |
|---|---|---|
| Slide 1–3: konteks | Cukup | Sudah menghubungkan dashboard dengan masalah kerja, tetapi perlu contoh workflow kecamatan yang lebih spesifik. |
| Slide 4–6: AI, verifikasi, keamanan | Baik | Relevan, tetapi sebagian berpotensi mengulang Materi 1. |
| Slide 7: prompting | Baik | Sudah memberi kerangka prompt yang mudah diikuti. |
| Slide 8: Codex | Kurang tepat untuk jalur utama | Pindahkan ke appendix. |
| Slide 9–12: Apps Script dan dua file | Relevan tetapi berat | Perlu disertai dataset dan hasil dashboard nyata. |
| Slide 13–15: prompt/output kode | Baik sebagai handout | Terlalu banyak teks jika dibacakan penuh di kelas. |
| Slide 16–20: praktik, testing, deployment | Relevan | Belum cukup realistis untuk seluruh peserta melakukan semuanya dalam waktu singkat. |
| Slide 21: arsitektur dashboard | Cukup | Perlu contoh data dan interpretasi, bukan hanya diagram. |
| Slide 22: tiga kasus | Perlu disederhanakan | Pilih satu kasus utama; kasus lain menjadi opsi. |
| Slide 23–24: canvas/rubrik | Baik | Sudah membantu mencegah peserta meminta aplikasi terlalu besar. |
| Slide 25: rundown | Tidak selaras | Deck mengalokasikan 120 menit, sementara notulen memberi materi efektif sekitar 80 menit. |
| Slide 26: share-out | Baik jika praktik cukup waktu | Jika hanya 80 menit, cukup satu atau dua kelompok yang berbagi. |
| Slide 27–28: referensi/penutup | Baik | Penutup sudah menjaga pesan keamanan dan verifikasi. |

## 8. Acceptance criteria sebelum materi dinyatakan siap

Materi sebaiknya belum dianggap final sebelum semua poin berikut terpenuhi:

- [x] Satu use case utama dipakai dalam demo lokal: rekap layanan kecamatan; persetujuan kebutuhan final mitra tetap perlu dikonfirmasi.
- [x] Ada dataset sintetis yang sama dengan yang dipakai dalam demo.
- [x] Ada preview/dashboard hasil render yang sesuai dengan dataset utama.
- [x] Setiap KPI memiliki definisi dan sumber kolom yang jelas.
- [x] Peserta dapat mengikuti alur tanpa harus membuat kode dari nol.
- [x] Codex tidak mengganggu jalur praktik utama.
- [x] Rundown deck diselaraskan dengan waktu materi efektif sekitar 80 menit.
- [x] Deployment tidak dijadikan syarat kelulusan praktik jika akses akun/jaringan belum pasti.
- [x] Ada checklist keamanan dan checklist pengujian yang dapat dibawa pulang.
- [ ] Rencana tindak lanjut final, PIC pengelola, dan kebijakan akses belum dikonfirmasi bersama tim/mitra.

## 9. Kesimpulan akhir

**Jawaban singkatnya: belum sepenuhnya sesuai audience dan brief, tetapi fondasinya sudah bagus.**

Masalah utama bukan kurangnya jumlah slide. Masalahnya adalah fokus materi masih terlalu banyak pada **alat dan cara menempelkan kode**, sementara audience membutuhkan jawaban yang lebih konkret:

> **Data apa yang kami punya, informasi apa yang ingin kami lihat, siapa yang membutuhkan informasi itu, dan bagaimana dashboard membantu pekerjaan kami?**

Prioritas revisi adalah mengubah pusat cerita dari:

> `ChatGPT → dua file kode → Apps Script`

ke:

> `Masalah pelayanan → data latihan → indikator yang dibutuhkan → dashboard yang bisa dibaca → verifikasi dan akses aman`.

ChatGPT dan Apps Script tetap dipakai, tetapi menjadi **alat untuk mencapai hasil**, bukan menjadi isi utama yang harus dikuasai peserta.

## 10. Verifikasi audit

Audit ini dilakukan dengan membaca dan membandingkan:

- `PROJECT.md`, `MEMORY.md`, `STATE.md`, dan `CANVAS.md`;
- `PROPOSAL_FIXED.md`;
- `PROPOSAL_REVIEW.md`;
- `RESEARCH.md`;
- `materials/workshop/01-rancangan-materi-workshop-ai-dashboard-gas.md`;
- `materials/workshop/02-outline-deck-chat-to-gas.md`;
- seluruh teks 28 slide pada deck HTML;
- `source-docs/Meeting Notes PKM.docx`;
- `source-docs/Proposal Sementara PKM Kecamatan_Tambun_Selatan_2026.docx`.

QA visual otomatis belum dapat dijalankan ulang pada 3 Oktober 2026 karena environment Python tidak memiliki modul `playwright` (`ModuleNotFoundError`). Audit substansi dan struktur tetap dapat diselesaikan dari artefak lokal.

## 11. Penutupan audit setelah eksekusi lokal — 4 Oktober 2026

Remediasi lokal menutup gap utama yang ditemukan dalam audit: satu use case utama, workbook 100 baris yang lebih konsisten, data dictionary, definisi KPI, preview dashboard hasil render, alur dua file Apps Script, validasi data, checklist, worksheet, evaluasi, dan fallback deployment. Deck sekarang berjumlah 18 slide dan lulus QA pada viewport 1440×810 serta 1280×720.

Yang **belum** dapat dinyatakan selesai dari audit adalah import ke Google Sheets pada akun workshop, konfigurasi cloud, deployment web app, dan uji akses lintas akun. Hal tersebut memerlukan aksi pada akun Google dan URL nyata; tidak boleh digantikan oleh screenshot menu atau preview lokal.
