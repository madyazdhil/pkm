# Outline Deck Workshop
## Dashboard Rekap Layanan Kecamatan dari Data Excel

- **Project:** PkM Magister Teknik Informatika UNPAM – Kecamatan Tambun Selatan
- **Status:** Revised outline
- **Tanggal pembaruan:** 4 Oktober 2026
- **Audience:** Aparatur, pegawai, dan staf Kantor Kecamatan Tambun Selatan
- **Pemateri:** Ahmad Yazid Hilmi — Materi 2 / teknis dashboard
- **Durasi materi:** 80 menit (5 + 8 + 7 + 10 + 15 + 20 + 8 + 5 + 2)
- **Output:** dashboard web yang dibuka melalui link web app Google Apps Script

## Cerita utama

> **Saya memiliki data Excel → saya cek kolomnya → saya ubah menjadi Google Sheets → saya meminta bantuan ChatGPT → saya menempatkan kode di Apps Script → saya menguji dashboard → saya membagikan link yang aksesnya sudah diperiksa.**

ChatGPT membantu menyusun rancangan dan kode. Canvas ChatGPT bukan hasil akhir.

## Slide 1 — Dashboard Rekap Layanan Kecamatan

**Pesan utama:** Materi ini menunjukkan cara mengubah data latihan menjadi dashboard web yang mudah dibaca.

**Catatan presenter:** Jelaskan bahwa dashboard dibuat dengan bantuan AI, tetapi hasil akhirnya berjalan di Google Apps Script.

## Slide 2 — Hasil yang dibawa pulang

Peserta dapat:

- mengimpor Excel ke Google Sheets;
- mengenali kolom dan pertanyaan kerja;
- membuat tiga KPI, tabel, filter, dan grafik sederhana;
- menempatkan dua file kode;
- menguji hasil dan memahami batasan link akses.

**Output:** satu perubahan dashboard yang berhasil diuji, bukan aplikasi produksi.

## Slide 3 — Masalah kerja: data ada, informasi belum cepat terbaca

Tampilkan perbandingan:

- sebelum: membuka baris data satu per satu;
- sesudah: melihat total, selesai, diproses, jenis layanan, dan pembaruan data.

**Pertanyaan peserta:** Informasi apa yang paling sering diminta pimpinan atau staf?

## Slide 4 — Dari Excel ke Google Sheets

Tampilkan file dummy `dummy-data-rekap-layanan-kecamatan.xlsx` dan jelaskan:

1. unggah ke Google Drive;
2. pilih **Open with / Buka dengan → Google Sheets**;
3. jika masih mode Excel/Office, pilih **File → Save as Google Sheets / Simpan sebagai Google Spreadsheet**;
4. pastikan sheet bernama `Data`;
5. cek header, tanggal, status, dan jumlah baris.

**Batasan:** latihan menggunakan data sintetis.

## Slide 5 — Data dictionary dan aturan data aman

Tampilkan beberapa kolom:

- `Tanggal`;
- `Jenis_Layanan`;
- `Status`;
- `Unit_Penanggung_Jawab`;
- `Jumlah_Permohonan`.

Jelaskan bahwa nama header harus dipertahankan agar kode dapat membaca data.

## Slide 6 — Siapa memakai dashboard dan untuk pertanyaan apa?

Pengguna:

- staf pengelola data;
- koordinator/pimpinan;
- PIC tindak lanjut.

Pertanyaan:

- berapa layanan yang masuk;
- mana yang selesai;
- mana yang masih diproses;
- jenis layanan apa yang dominan;
- kapan data diperbarui.

## Slide 7 — Dari kolom data ke KPI

Definisi yang digunakan:

- Total layanan = jumlah baris layanan valid; dataset latihan memakai satu permohonan per baris.
- Selesai = status `Selesai`;
- Masih diproses = status `Diproses` atau `Menunggu Dokumen`;
- Dibatalkan tidak dihitung sebagai selesai.

**Catatan:** KPI harus didefinisikan sebelum dashboard dibuat.

## Slide 8 — Contoh tampilan dashboard akhir

Gunakan render lokal dari `starter-dashboard/preview.html` yang memakai fixture 100 baris. Beri label bahwa ini bukan deployment cloud live.

Tampilkan target tampilan:

- tiga kartu KPI;
- grafik jenis layanan;
- filter status dan jenis layanan;
- tabel data;
- tanggal pembaruan;
- label data latihan.

**Pesan utama:** Peserta melihat hasil yang ingin dicapai sebelum melihat kode.

## Slide 9 — ChatGPT sebagai alat bantu

ChatGPT membantu:

- merancang struktur dashboard;
- menjelaskan hubungan kolom dan KPI;
- menghasilkan dua file kode;
- memperbaiki error dengan konteks lengkap.

ChatGPT tidak:

- mengambil keputusan administratif;
- menjamin kode benar tanpa pengujian;
- menjadi tempat dashboard dibuka.

## Slide 10 — Prompt dashboard berdasarkan kolom Sheet

Tampilkan prompt card yang menyebut:

- nama sheet `Data`;
- nama header;
- KPI;
- filter;
- output dua file;
- data sintetis;
- checklist testing.

## Slide 11 — Membuka Google Apps Script

Langkah visual:

1. buka Google Sheets;
2. klik **Extensions/Ekstensi**;
3. klik **Apps Script**;
4. editor terbuka pada tab baru.

## Slide 12 — Menempatkan dua file

| File | Fungsi |
|---|---|
| `Code.gs` | membaca data dari Sheet dan menyediakan `doGet()` |
| `Index.html` | menampilkan kartu, filter, grafik, tabel, dan JavaScript browser |

Peserta tidak harus menulis syntax dari nol.

## Slide 13 — Dashboard berjalan

Tunjukkan alur pengujian:

- halaman terbuka;
- KPI tampil;
- tabel menampilkan baris;
- filter status bekerja;
- grafik berubah sesuai filter.

## Slide 14 — Satu perubahan kecil

Contoh latihan:

- ubah judul dashboard;
- tambah filter unit;
- ubah label KPI;
- tambahkan kolom kanal ke tabel.

Aturan: ubah satu hal, uji, lalu catat hasil.

## Slide 15 — Testing dan verifikasi

Checklist:

- bandingkan KPI dengan hitungan manual;
- ubah satu record dan lihat angka berubah;
- cek header dan status;
- cek tampilan di browser;
- catat error lengkap;
- pastikan data yang tampil tidak sensitif.

## Slide 16 — Menerbitkan dashboard sebagai link

Gunakan screenshot menu sebagai panduan jalur, bukan bukti URL aktif. URL hanya boleh disebut berhasil setelah benar-benar dibuka dan diuji.

Alur:

1. pilih **Deploy → New deployment**;
2. pilih **Web app**;
3. periksa akun eksekusi dan akses;
4. salin URL;
5. uji dengan akun yang memiliki hak akses.

**Catatan:** Jangan menyebut deployment berhasil tanpa URL yang benar-benar terbuka.

## Slide 17 — Checklist hasil kelompok

Setiap kelompok menyimpan:

- data source;
- prompt utama;
- screenshot atau link;
- hasil pengujian;
- satu batasan/risiko;
- PIC tindak lanjut.

## Slide 18 — Langkah setelah workshop

- mulai dari data sintetis;
- konfirmasi definisi KPI;
- tunjuk PIC data;
- batasi akses dashboard;
- gunakan data nyata hanya setelah ada izin dan anonimisasi;
- kembangkan satu fitur pada satu waktu.

**Penutup:** Dashboard membantu orang membaca data lebih cepat. Verifikasi manusia tetap diperlukan.

## Rundown presenter

**Total: 80 menit.** Deployment tiap kelompok bersifat opsional; target minimum adalah satu demo end-to-end dan satu perubahan kecil yang berhasil diuji.

| Durasi | Slide | Fokus |
|---:|---|---|
| 5 menit | 1–2 | Orientasi dan output |
| 8 menit | 3–4 | Masalah dan impor Excel |
| 7 menit | 5–7 | Data dictionary, keamanan, KPI |
| 10 menit | 8–10 | Contoh dashboard dan prompt |
| 15 menit | 11–13 | Demo Apps Script sampai dashboard |
| 20 menit | 14–15 | Praktik satu perubahan dan testing |
| 8 menit | 16–17 | Link, akses, dan share-out |
| 2 menit | 18 | Penutup |

## Ownership presenter

- **S / Pak Syam:** basic AI, verifikasi, dan keamanan data pada bagian common core.
- **Y / Yazid:** data → Sheets → prompt → GAS → dashboard → testing → link.
- **Bersama:** orientasi, share-out, dan penutup.
