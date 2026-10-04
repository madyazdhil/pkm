# Panduan Pemateri: Teori AI dan Praktik Dashboard

## Tujuan pembagian

Materi tidak dibawakan sebagai satu blok coding panjang. Sesi dibagi menjadi:

1. **Pak Syam — teori AI dan prompting:** peserta memahami apa itu AI, apa yang bisa dibantu, apa risikonya, bagaimana menjaga data, dan bagaimana menulis prompt yang jelas.
2. **Yazid — praktik dashboard:** peserta memakai cara berpikir tersebut untuk mengubah Excel latihan menjadi dashboard berbasis Google Sheets dan Apps Script.

## Pembagian slide dan waktu

| Bagian | Slide | Pemateri | Skenario 80 menit | Skenario 120 menit |
|---|---:|---|---:|---:|
| Pembukaan | 1–2 | Bersama | 5 | 5 |
| Teori AI dan prompting | 3–10 | Pak Syam | 25 | 45 |
| Serah-terima | 11 | Bersama | 3 | 5 |
| Praktik dashboard | 12–26 | Yazid | 39 | 60 |
| Checklist dan penutup | 27–28 | Bersama | 5 | 5 |
| Cadangan | — | Pendamping | 3 | 0 |
| **Total** | | | **80** | **120** |

Kedua skenario masih perlu konfirmasi tim. Angka 120 menit bukan keputusan memperpanjang slot. Untuk 80 menit, gunakan starter yang sudah disiapkan, satu demo, dan satu perubahan kecil. Teori serta prompting tetap mendapat waktu tersendiri.

## Catatan untuk Pak Syam — slide 3–10

### Pesan utama

> AI mempercepat pekerjaan awal, tetapi manusia tetap memegang konteks, verifikasi, kewenangan, dan tanggung jawab hasil.

### Urutan penjelasan

1. **Basic AI** — jelaskan AI sebagai alat bantu mengenali pola, mengikuti aturan, membuat prediksi, atau membantu analisis.
2. **Generative AI** — jelaskan bahwa AI generatif menyusun keluaran dari instruksi dan konteks; keluaran yang lancar tidak otomatis benar.
3. **Contoh kerja** — gunakan contoh draf informasi, ringkasan, pengelompokan, rancangan survei, dan rancangan dashboard.
4. **Batasan** — sebutkan kemungkinan fakta/rujukan yang keliru, salah memahami istilah lokal, salah hitung, dan kode yang tidak cocok dengan struktur Sheet.
5. **Verifikasi manusia** — minta peserta memeriksa sumber, angka, istilah, tanggal, status, akses, dan dampak sebelum memakai hasil.
6. **Keamanan data** — arahkan latihan memakai data sintetis atau yang dianonimkan. Jangan menempelkan identitas warga, isi dokumen, kredensial, atau data mentah tanpa izin ke AI publik.
7. **Prompting** — ajarkan formula:
   - peran;
   - tujuan;
   - konteks pekerjaan;
   - data/kolom yang tersedia;
   - batasan;
   - format output;
   - kriteria pengujian.
8. **Latihan prompt** — minta peserta mengubah kalimat “buatkan aplikasi” menjadi instruksi yang menyebut tujuan, kolom, batasan, output, dan cara uji.

### Kalimat transisi ke Yazid

> “Sekarang kita sudah tahu cara memberi instruksi yang jelas dan batas data yang aman. Yazid akan menunjukkan bagaimana instruksi itu dipakai untuk membaca data Excel dan membangun dashboard yang bisa diuji.”

## Catatan untuk Yazid — slide 12–26

### Pesan utama

> Dashboard bukan dimulai dari kode. Dashboard dimulai dari pertanyaan kerja, data yang aman, definisi KPI, lalu kode yang diuji.

### Urutan praktik

1. Tunjukkan hasil akhir/flow agar peserta tahu targetnya.
2. Buka workbook dummy dan sheet `Panduan`.
3. Periksa sheet `Data`, header, tanggal, status, dan jumlah baris.
4. Tanyakan: siapa yang membaca dashboard dan pertanyaan apa yang harus dijawab?
5. Definisikan tiga KPI sebelum menempel kode.
6. Tunjukkan ChatGPT sebagai alat bantu, bukan tempat output akhir.
7. Minta atau tempel dua output: `Code.gs` dan `Index.html`.
8. Jalankan `setupSpreadsheetId()` satu kali pada project Apps Script yang sesuai.
9. Uji halaman, KPI, filter, tabel, dan tanggal pembaruan.
10. Ubah satu hal saja, lalu uji ulang.
11. Deployment hanya ditunjukkan sebagai link jika URL dan kebijakan akses sudah benar-benar diuji.

### Kalimat yang perlu diulang

- “Jangan mengganti header hanya supaya kode terlihat mudah.”
- “KPI harus bisa dihitung manual.”
- “Kalau error, kirim pesan error lengkap dan minta perubahan sekecil mungkin.”
- “Preview lokal bukan bukti deployment Google live.”
- “Jangan memakai data warga asli selama latihan.”

## Handoff antar pemateri

### Dari Bersama ke Pak Syam

> “Sebelum praktik dashboard, kita mulai dari cara memahami AI dan cara memberi instruksi yang benar. Pak Syam akan membawakan bagian teori dan keamanan penggunaannya.”

### Dari Pak Syam ke Yazid

> “AI hanya akan membantu jika kebutuhan dan konteksnya jelas. Sekarang kita terapkan formula prompt tadi ke satu dataset latihan dan lihat bagaimana dashboard dibangun.”

### Dari Yazid ke penutup

> “Dashboard yang selesai bukan yang paling banyak fiturnya, tetapi yang datanya aman, angkanya bisa dijelaskan, dan hasilnya sudah diuji.”

## Batas klaim

- Materi ini mengajarkan prototipe dan alur kerja, bukan sistem pelayanan produksi.
- Deployment publik tidak boleh disebut berhasil tanpa URL nyata dan pengujian akses.
- Keputusan penggunaan data nyata harus mengikuti kebijakan organisasi, kewenangan, dan aturan yang berlaku.
