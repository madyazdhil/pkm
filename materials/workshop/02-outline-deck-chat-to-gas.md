# Outline Deck Workshop
## Generative AI + Dashboard Pelayanan Kecamatan

- **Project:** PkM Magister Teknik Informatika UNPAM – Kecamatan Tambun Selatan
- **Status:** Revisi canonical setelah koreksi pembagian pemateri
- **Tanggal pembaruan:** 4 Oktober 2026
- **Audience:** Aparatur, pegawai, dan staf Kantor Kecamatan Tambun Selatan
- **Pemateri:** Muharam Syam Nugraha — teori AI dan prompting; Ahmad Yazid Hilmi — praktik dashboard
- **Durasi kerja:** skenario inti 80 menit; skenario 120 menit hanya jika slot penuh tersedia dan disepakati tim
- **Output:** peserta memahami prinsip AI/prompting lalu mengikuti prototipe dashboard yang dibuka melalui link web app Google Apps Script

## Pembagian pembicara

### Pak Syam — teori AI dan prompting

Pak Syam membawakan slide 3–10:

- basic AI dan Generative AI;
- contoh pemanfaatan AI untuk pekerjaan administrasi;
- batasan AI dan verifikasi manusia;
- keamanan data, etika, dan data yang tidak boleh ditempel ke AI publik;
- formula prompting: peran, tujuan, konteks, data, batasan, format output, dan cara uji;
- perbandingan prompt buruk dan prompt yang siap diproses;
- latihan singkat mengubah kebutuhan kerja menjadi prompt.

### Yazid — praktik dashboard

Yazid membawakan slide 12–26:

- masalah kerja dan tujuan dashboard;
- Excel → Google Sheets;
- data dictionary, KPI, dan pertanyaan pengguna;
- ChatGPT sebagai alat bantu teknis;
- prompt dashboard berdasarkan header Sheet;
- membuka Apps Script;
- menempatkan `Code.gs` dan `Index.html`;
- menjalankan, mengubah, menguji, dan menerbitkan dashboard sebagai link bila akses siap.

### Bersama

- slide 1: pembukaan;
- slide 2: pembagian teori dan praktik;
- slide 11: serah-terima teori ke praktik;
- slide 27: checklist kelompok;
- slide 28: penutup dan tindak lanjut.

## Cerita utama

> **Pahami AI → susun prompt yang jelas → siapkan data aman → minta bantuan ChatGPT → tempelkan kode ke Apps Script → uji dashboard → bagikan link dengan akses yang diperiksa.**

ChatGPT membantu menyusun rancangan, prompt, kode, dan diagnosis. Canvas ChatGPT bukan output dashboard.

## Struktur 28 slide

| Slide | Bagian | Pemateri | Pesan utama |
|---:|---|---|---|
| 1 | Dashboard Rekap Layanan Kecamatan | Bersama | Workshop menggabungkan teori AI dan praktik dashboard. |
| 2 | Pembagian materi | Bersama | Pak Syam memegang teori; Yazid memegang praktik. |
| 3 | Basic AI untuk pekerjaan administrasi | Pak Syam | AI membantu pola/informasi, bukan menggantikan pemilik proses. |
| 4 | Generative AI dan cara kerjanya | Pak Syam | Instruksi + konteks menghasilkan draf yang perlu ditinjau. |
| 5 | Contoh pemanfaatan AI | Pak Syam | Mulai dari tugas berulang dan mudah diperiksa. |
| 6 | Batasan AI dan verifikasi manusia | Pak Syam | Output yang meyakinkan tetap bisa salah. |
| 7 | Keamanan data saat memakai AI | Pak Syam | Gunakan data sintetis dan jangan kirim data sensitif ke AI publik. |
| 8 | Formula prompting yang benar | Pak Syam | Prompt menjelaskan peran, tujuan, konteks, data, batasan, dan output. |
| 9 | Prompt buruk versus prompt baik | Pak Syam | Prompt yang jelas lebih mudah diuji dan diperbaiki. |
| 10 | Latihan singkat menyusun prompt | Pak Syam | Kebutuhan kerja diubah menjadi instruksi yang lengkap. |
| 11 | Dari teori ke praktik dashboard | Bersama | Cara berpikir dari teori dipakai untuk membangun dashboard. |
| 12 | Hasil yang dibawa pulang | Yazid | Alur Excel → Sheets → Apps Script → link dashboard. |
| 13 | Masalah kerja: data ada, informasi belum cepat terbaca | Yazid | Dashboard dimulai dari pertanyaan kerja. |
| 14 | Dari Excel ke Google Sheets | Yazid | Sheet, header, tanggal, status, dan jumlah baris diperiksa. |
| 15 | Data dictionary dan data aman | Yazid | Kolom menentukan informasi yang bisa ditampilkan. |
| 16 | Siapa memakai dashboard dan untuk pertanyaan apa | Yazid | Dashboard memilih informasi sesuai pembacanya. |
| 17 | Dari kolom data ke KPI | Yazid | Setiap KPI memiliki definisi dan sumber kolom. |
| 18 | Contoh tampilan dashboard akhir | Yazid | Peserta melihat hasil sebelum melihat kode. |
| 19 | ChatGPT sebagai alat bantu | Yazid | AI membantu rancangan/kode; manusia menguji hasil. |
| 20 | Prompt dashboard berdasarkan kolom Sheet | Yazid | Prompt teori diterapkan ke header dan kebutuhan dashboard. |
| 21 | Membuka Google Apps Script | Yazid | Sheet → Extensions/Ekstensi → Apps Script. |
| 22 | Menempatkan `Code.gs` dan `Index.html` | Yazid | Dua file memiliki fungsi berbeda. |
| 23 | Dashboard berjalan | Yazid | Periksa halaman, KPI, tabel, filter, dan tanggal pembaruan. |
| 24 | Satu perubahan kecil | Yazid | Ubah satu fitur, lalu uji. |
| 25 | Testing dan verifikasi | Yazid | Cocokkan angka, filter, data, dan tampilan. |
| 26 | Menerbitkan dashboard sebagai link | Yazid | Deployment hanya boleh disebut berhasil setelah URL diuji. |
| 27 | Checklist hasil kelompok | Bersama | Simpan data source, prompt, bukti hasil, testing, dan batasan. |
| 28 | Langkah setelah workshop | Bersama | Mulai dari data aman, KPI jelas, uji, akses, dan PIC. |

## Rundown presenter

**Skenario inti 80 menit:** pembukaan 5, teori/prompting Pak Syam 25, serah-terima 3, praktik Yazid 39, penutup 5, cadangan 3 menit. Teori tidak dihapus demi mengejar praktik.

**Skenario 120 menit jika tersedia penuh:**

| Durasi | Sesi | Pemateri | Hasil |
|---:|---|---|---|
| 5 menit | Pembukaan dan tujuan | Bersama | Peserta memahami output dan pembagian peran. |
| 30 menit | Basic AI, Generative AI, contoh penggunaan, batasan, verifikasi, keamanan | Pak Syam | Peserta tahu kapan AI membantu dan risiko yang harus dijaga. |
| 15 menit | Formula prompting, contoh prompt, dan latihan | Pak Syam | Peserta memiliki prompt yang berisi konteks dan cara uji. |
| 5 menit | Serah-terima | Bersama | Teori prompting dihubungkan ke dashboard. |
| 10 menit | Data Excel → Sheets → pertanyaan kerja | Yazid | Dataset dan KPI siap dipakai. |
| 15 menit | Demo ChatGPT → dua file Apps Script | Yazid | Peserta memahami struktur `Code.gs` dan `Index.html`. |
| 25 menit | Praktik satu perubahan kecil | Yazid + pendamping | Satu filter, label, atau KPI berhasil diubah. |
| 10 menit | Testing dan akses | Yazid | Hasil diverifikasi dan batas akses dibahas. |
| 5 menit | Checklist, share-out, dan penutup | Bersama | Peserta menyimpan artefak dan PIC tindak lanjut. |

Jika waktu dipersingkat, pertahankan teori inti Pak Syam, satu demo end-to-end Yazid, satu perubahan kecil, dan testing. Deployment semua kelompok tidak menjadi syarat.

## Batasan keamanan

Semua latihan menggunakan data sintetis atau data yang sudah dianonimkan. Jangan menempelkan NIK, nomor KK, nomor telepon, alamat lengkap, isi surat, isi aduan, password, token, API key, atau dokumen internal yang belum mendapat izin.

## Output kelompok

Setiap kelompok mengumpulkan:

- file/data source;
- definisi pertanyaan kerja dan KPI;
- prompt utama;
- screenshot atau URL bila sudah diuji;
- checklist testing;
- satu batasan/risiko;
- PIC dan perubahan berikutnya.
