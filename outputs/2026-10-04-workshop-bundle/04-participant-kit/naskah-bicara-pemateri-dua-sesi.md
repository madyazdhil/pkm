# Naskah Bicara Pemateri — Workshop AI dan Dashboard Kecamatan

## Untuk siapa dokumen ini

Dokumen ini adalah pegangan bicara untuk **Mas Syam** dan **Yazid** saat menyampaikan materi kepada Bapak/Ibu aparatur/staf Kecamatan Tambun Selatan.

Naskah ini sengaja ditulis sebagai kalimat yang bisa langsung diucapkan. Pemateri tidak harus membaca kata demi kata. Gunakan kalimatnya sebagai jalur agar pembahasan tetap sederhana, relevan dengan pekerjaan kantor, dan tidak terlalu teknis.

## Pesan besar workshop

> AI membantu mempercepat pekerjaan awal. Manusia tetap memegang konteks, pemeriksaan, kewenangan, keamanan data, dan tanggung jawab hasil.

Hasil praktik yang ingin dibawa pulang peserta:

`Excel → Google Sheets → bantuan ChatGPT → Apps Script → dashboard yang diuji → link dashboard jika akses siap`

ChatGPT adalah alat bantu selama proses. **Output akhirnya bukan canvas percakapan, melainkan dashboard web yang dapat dibuka melalui link.**

---

## Pembukaan bersama — slide 1

### Tujuan slide
Membuat peserta memahami hasil akhir sejak awal dan merasa materi ini dekat dengan pekerjaan mereka.

### Kalimat yang bisa diucapkan

> “Selamat pagi/siang, Bapak dan Ibu. Hari ini kita tidak hanya membahas AI sebagai istilah yang sedang populer. Kita akan melihat bagaimana AI dapat membantu pekerjaan administrasi, lalu kita praktikkan sampai menjadi dashboard yang bisa dibuka melalui link.”
>
> “Contoh data yang kita gunakan adalah data latihan. Jadi selama workshop ini kita tidak perlu memasukkan NIK, nomor KK, nomor telepon, alamat lengkap, isi surat, atau data warga yang sebenarnya.”
>
> “Target kita bukan membuat aplikasi yang besar. Target kita adalah memahami alurnya: data Excel dipindahkan ke Google Sheets, kita minta bantuan AI dengan instruksi yang jelas, lalu hasilnya kita uji sebagai dashboard.”

### Tekankan kepada peserta

- Dashboard harus membantu menjawab pertanyaan kerja.
- Angka pada dashboard harus bisa dijelaskan dan dicek.
- Data latihan dipakai agar peserta dapat belajar tanpa membuka data sensitif.

### Pertanyaan pembuka

> “Di antara Bapak dan Ibu, siapa yang pernah menerima data dalam bentuk Excel tetapi masih perlu membuat rekap atau ringkasan sebelum bisa dibaca pimpinan?”

Tidak perlu meminta banyak orang menjawab. Cukup gunakan beberapa angkat tangan untuk menghubungkan materi dengan pengalaman peserta.

---

## Pembagian kelompok dan pembagian pemateri — slide 2

### Tujuan slide
Memastikan pembagian kelompok sudah berjalan sejak awal, lalu menjelaskan siapa yang membawa teori dan siapa yang membawa praktik.

### Kalimat wajib tentang kelompok

> “Sebelum kita lanjut, pembagian kelompok sudah dilakukan. Mohon Bapak dan Ibu tetap duduk bersama kelompok yang sudah ditentukan oleh panitia.”
>
> “Kelompok 1 akan menggunakan kasus rekap layanan. Kelompok 2 menggunakan kasus monitoring surat dan disposisi. Kelompok 3 menggunakan kasus agenda kegiatan internal.”
>
> “Pada saat praktik nanti, setiap kelompok akan menerima atau memilih satu workbook latihan. Bapak dan Ibu tidak perlu menggunakan data kantor yang asli. Kita fokus dulu memahami alur dan cara menguji hasilnya.”

### Pembagian peran pemateri

> “Materi hari ini dibagi menjadi dua bagian. Mas Syam akan menyampaikan dasar-dasar AI, contoh pemanfaatannya, batasan, keamanan data, dan cara menyusun prompt yang jelas.”
>
> “Setelah itu saya akan melanjutkan dengan praktik: bagaimana data Excel disiapkan, dipindahkan ke Google Sheets, dibantu dengan ChatGPT, lalu dijalankan menjadi dashboard melalui Google Apps Script.”
>
> “Jadi, teori yang disampaikan Mas Syam akan langsung dipakai pada bagian praktik saya.”

### Instruksi kecil untuk kelompok

> “Sambil mengikuti teori, mohon kelompok mulai menentukan satu orang yang memegang file, satu orang yang membantu membaca prompt, dan satu orang yang mencatat hasil pengujian. Kalau jumlah orangnya memungkinkan, satu orang lain dapat menjadi penguji tampilan dashboard.”

### Jika ada kelompok yang belum siap

> “Tidak apa-apa jika posisi duduknya belum sempurna. Yang penting sebelum praktik dimulai, Bapak dan Ibu sudah mengetahui kelompok dan kasus yang akan dikerjakan.”

### Kalimat penutup slide 2

> “Untuk sekarang, mohon tetap ikuti bagian teori bersama Mas Syam. Kelompok akan mulai bekerja saat masuk ke sesi praktik.”

---

# Bagian Mas Syam — teori AI dan prompting

## Slide 3 — Basic AI untuk pekerjaan administrasi

### Pesan utama
AI adalah alat bantu kerja, bukan pengganti pemilik proses dan pengambil keputusan.

### Kalimat yang bisa diucapkan

> “Bapak dan Ibu, ketika mendengar kata AI, mungkin yang langsung terbayang adalah chatbot. Padahal AI dapat dipahami lebih luas sebagai alat bantu komputer untuk mengenali pola, mengikuti aturan, membuat prediksi, atau membantu membaca informasi.”
>
> “Dalam pekerjaan administrasi, bantuan itu dapat berupa mengelompokkan data, merangkum laporan, menyusun draf, atau membantu melihat pola dari data yang sudah kita siapkan.”
>
> “Namun keputusan tetap berada pada manusia. AI tidak mengetahui seluruh konteks kantor, kebijakan lokal, atau kewenangan siapa yang harus menyetujui sebuah dokumen.”

### Contoh yang dekat dengan pekerjaan

> “Misalnya, AI dapat membantu mengelompokkan rekap layanan berdasarkan jenis atau status. Tetapi Bapak dan Ibu tetap harus memastikan bahwa kategori dan status tersebut memang sesuai dengan istilah yang digunakan di kantor.”

### Pertanyaan singkat

> “Dari pekerjaan Bapak dan Ibu, tugas apa yang paling sering berulang dan hasilnya masih harus dirapikan secara manual?”

Ambil satu atau dua contoh. Jangan masuk ke diskusi panjang.

---

## Slide 4 — Generative AI dan cara kerjanya

### Pesan utama
Generative AI menghasilkan keluaran berdasarkan instruksi dan konteks yang diberikan.

### Kalimat yang bisa diucapkan

> “Generative AI adalah jenis AI yang dapat menyusun keluaran baru, misalnya teks, ringkasan, rancangan, atau kode, berdasarkan instruksi dan konteks yang kita berikan.”
>
> “Cara berpikir sederhananya adalah: kita memberikan instruksi, kita menyediakan konteks, AI menghasilkan keluaran, lalu manusia memeriksa hasilnya.”
>
> “Kalau instruksi kita terlalu umum, konteksnya tidak lengkap, atau datanya keliru, hasil yang diberikan juga dapat melenceng.”

### Tekankan

> “Jawaban yang terdengar lancar belum tentu benar. Karena itu, kelancaran bahasa tidak boleh dianggap sebagai bukti bahwa isinya sudah sesuai.”

### Contoh singkat

> “Kalau kita hanya menulis, ‘Buatkan dashboard pelayanan’, AI belum tahu dashboard untuk siapa, datanya berisi kolom apa, KPI-nya apa, dan batas keamanan datanya bagaimana.”

---

## Slide 5 — Contoh pemanfaatan AI di kantor kecamatan

### Pesan utama
Mulai dari pekerjaan yang berulang dan mudah diperiksa.

### Kalimat yang bisa diucapkan

> “AI paling aman untuk mulai digunakan pada pekerjaan yang hasilnya dapat diperiksa dengan mudah. Contohnya membantu membuat draf jawaban berdasarkan SOP yang sudah diberikan, membuat ringkasan rapat, mengelompokkan data, atau membantu merancang dashboard.”
>
> “AI dapat membantu mempercepat pekerjaan awal. Bapak dan Ibu tetap memeriksa syarat, angka, tanggal, istilah, dan kebijakan yang berlaku.”
>
> “Untuk dashboard, AI dapat membantu merancang KPI dan kode awal. Tetapi AI tidak boleh menjadi pihak yang menentukan apakah sebuah keputusan pelayanan sudah benar.”

### Jika peserta bertanya apakah AI bisa menggantikan staf

> “AI membantu bagian tertentu dari pekerjaan. Pemahaman proses, pemeriksaan, komunikasi dengan masyarakat, dan tanggung jawab keputusan tetap memerlukan manusia.”

---

## Slide 6 — Batasan AI dan verifikasi manusia

### Pesan utama
AI dapat keliru dengan cara yang terlihat meyakinkan.

### Kalimat yang bisa diucapkan

> “Ada beberapa jenis kesalahan yang perlu kita waspadai. AI dapat membuat fakta atau rujukan yang tidak ada, salah memahami istilah lokal, salah menghitung karena definisinya tidak jelas, atau memberikan kode yang tidak sesuai dengan struktur data kita.”
>
> “Karena itu, setiap keluaran AI harus diperlakukan sebagai bahan kerja. Kita periksa sumbernya, angka dan tanggalnya, statusnya, istilahnya, serta dampaknya apabila digunakan.”
>
> “Untuk angka dashboard, cara paling sederhana adalah membandingkan KPI dengan hitungan manual. Kalau data berjumlah 100, kita harus bisa menjelaskan mengapa totalnya 100 dan bagaimana angka selesai atau diproses diperoleh.”

### Pertanyaan kepada peserta

> “Kalau sebuah angka di dashboard berbeda dengan rekap manual, menurut Bapak dan Ibu bagian mana yang pertama kali perlu diperiksa?”

Arahkan jawaban ke: definisi KPI, header, status, baris kosong, filter, atau data sumber.

### Kalimat penguat

> “Uji dulu dengan contoh normal. Setelah itu uji juga contoh yang sengaja dibuat salah, misalnya status kosong atau nama header berubah.”

---

## Slide 7 — Keamanan data saat memakai AI

### Pesan utama
Latihan memakai data sintetis atau data yang sudah dianonimkan.

### Kalimat yang bisa diucapkan

> “Sebelum memasukkan informasi ke alat AI, kita harus bertanya: apakah data ini boleh dibagikan, apakah ada identitas yang perlu disamarkan, dan siapa yang bertanggung jawab jika hasilnya salah?”
>
> “Selama workshop, kita menggunakan data sintetis. Jangan memasukkan NIK, nomor KK, nomor telepon, alamat lengkap, isi surat, isi aduan, password, token, API key, atau dokumen rahasia ke AI publik.”
>
> “Kalau kebutuhan kita hanya menghitung jumlah layanan per status, kita tidak perlu mengirim identitas warga. Cukup gunakan kolom dan contoh data yang memang diperlukan untuk latihan.”

### Jika peserta bertanya tentang data nyata

> “Penggunaan data nyata harus mengikuti izin, kebijakan organisasi, dan pengaturan akses yang disepakati. Untuk belajar hari ini, kita tidak perlu mengambil risiko itu karena data latihan sudah cukup untuk memahami alurnya.”

### Minta respons bersama

> “Sebelum kita lanjut, mari kita sepakati satu aturan: selama praktik, gunakan data latihan atau data yang sudah dianonimkan.”

---

## Slide 8 — Formula prompting yang benar

### Pesan utama
Prompt yang baik memberi konteks yang cukup agar hasil dapat diperiksa.

### Kalimat yang bisa diucapkan

> “Prompt adalah cara kita memberi instruksi kepada AI. Prompt yang baik tidak harus panjang, tetapi informasi pentingnya harus lengkap.”
>
> “Ada beberapa bagian yang dapat kita sebutkan: peran AI, tujuan pekerjaan, konteks penggunaannya, data atau kolom yang tersedia, batasan keamanan, bentuk keluaran, dan cara menguji hasil.”
>
> “Contohnya, kita bisa mengatakan: bertindak sebagai mentor Apps Script untuk pemula. Bantu membuat ringkasan status layanan dari data sintetis dengan kolom tanggal, jenis layanan, status, dan unit. Buat tiga KPI, satu filter, serta checklist verifikasi. Jangan gunakan data pribadi.”

### Beri penekanan sederhana

> “Kalau kita menyebutkan data, AI tahu bahan yang tersedia. Kalau kita menyebutkan batasan, AI tahu apa yang tidak boleh dilakukan. Kalau kita meminta cara uji, kita tidak berhenti pada jawaban yang terlihat bagus.”

### Minta peserta mengingat formula

> “Kalau nanti Bapak dan Ibu lupa, ingat urutan sederhananya: siapa AI-nya, apa tujuannya, konteksnya apa, datanya apa, batasannya apa, output-nya seperti apa, dan bagaimana cara mengujinya.”

---

## Slide 9 — Prompt buruk versus prompt baik

### Pesan utama
Prompt yang terlalu umum membuat AI menebak terlalu banyak hal.

### Kalimat yang bisa diucapkan

> “Kalimat ‘buatkan aplikasi pelayanan kecamatan yang bagus’ memang menyampaikan keinginan, tetapi belum cukup menjadi instruksi kerja.”
>
> “AI belum tahu aplikasi itu dipakai oleh siapa, data apa yang tersedia, KPI apa yang diperlukan, data apa yang tidak boleh digunakan, dan bagaimana kita memastikan hasilnya benar.”
>
> “Prompt yang lebih baik menyebutkan tujuan, kolom, batasan keamanan, bentuk hasil, dan cara pengujian. Dengan begitu, kita mengurangi tebakan AI dan memudahkan manusia memeriksa jawabannya.”

### Aktivitas 1 menit

> “Sekarang silakan Bapak dan Ibu lihat kebutuhan di sebelah kiri, lalu bayangkan satu informasi tambahan yang perlu ditambahkan agar instruksinya lebih jelas.”

Ambil satu jawaban dari peserta, misalnya: “dashboard untuk pimpinan”, “data per bulan”, “filter status”, atau “tanpa data pribadi”.

---

## Slide 10 — Latihan singkat menyusun prompt

### Tujuan slide
Peserta mencoba menyusun prompt sebelum melihat praktik dashboard.

### Kalimat yang bisa diucapkan

> “Sekarang kita latihan sebentar. Kebutuhan mentahnya adalah: pimpinan ingin tahu berapa surat yang belum selesai.”
>
> “Kalimat itu sudah menunjukkan masalah, tetapi kita perlu melengkapinya. Siapa yang memakai hasilnya? Data apa yang tersedia? Status apa yang digunakan? Output apa yang diminta? Dan bagaimana cara memeriksanya?”
>
> “Bapak dan Ibu tidak perlu membuat prompt yang sempurna. Cukup tambahkan informasi pentingnya. Misalnya: gunakan data latihan, sebutkan kolom surat dan status, minta ringkasan jumlah surat yang belum selesai, serta minta cara mengecek hasilnya.”

### Minta dua atau tiga peserta berbagi

> “Apakah ada satu atau dua kelompok yang bersedia membacakan versi prompt-nya? Kita tidak sedang mencari jawaban yang paling pintar. Kita sedang belajar membuat kebutuhan kerja menjadi instruksi yang jelas.”

### Jika waktu 80 menit terbatas

Minta satu kelompok saja berbagi prompt. Jangan mengoreksi semua kata. Cukup tunjukkan bahwa prompt sudah memuat tujuan, data, batasan, dan cara uji.

---

## Serah-terima dari Mas Syam ke Yazid — slide 11

### Kalimat Mas Syam

> “Bapak dan Ibu, sekarang kita sudah melihat bahwa AI perlu diberi instruksi dan konteks yang jelas. Kita juga sudah menyepakati bahwa data harus aman dan hasilnya harus diperiksa.”
>
> “Selanjutnya Yazid akan menunjukkan bagaimana cara berpikir tersebut dipakai untuk membaca data Excel, menyiapkan Google Sheets, dan membuat dashboard yang bisa diuji.”

### Kalimat Yazid

> “Terima kasih, Mas Syam. Bapak dan Ibu, saya akan membawa formula tadi ke praktik. Kita mulai dari data dan pertanyaan kerja, bukan langsung dari kode. Setelah itu baru kita gunakan ChatGPT dan Apps Script sebagai alat bantu.”

---

# Bagian Yazid — praktik dashboard

## Slide 12 — Hasil yang dibawa pulang

### Kalimat yang bisa diucapkan

> “Di bagian saya, Bapak dan Ibu akan mengikuti satu alur dari file Excel sampai tampilan dashboard. Kita akan memakai data latihan agar setiap langkah dapat dicoba tanpa membuka data sensitif.”
>
> “Hasil yang kita cari bukan sekadar kode. Kita ingin memiliki dashboard yang menampilkan angka, tabel, dan filter yang dapat diuji.”

### Tekankan urutan

> “Kalau nanti terjadi error, kita kembali ke langkah sebelumnya. Kita periksa data, header, definisi KPI, kode, lalu tampilan. Kita tidak langsung mengganti semuanya sekaligus.”

---

## Slide 13 — Masalah kerja: data ada, informasi belum cepat terbaca

### Kalimat yang bisa diucapkan

> “Banyak kantor sudah memiliki data. Tantangannya adalah data itu sering masih berbentuk tabel panjang, sehingga pimpinan atau staf perlu waktu untuk mengetahui jumlah total, status, atau jenis layanan yang paling banyak.”
>
> “Dashboard membantu menyajikan ringkasan dari data tersebut. Dashboard yang baik menjawab pertanyaan kerja lebih cepat, bukan sekadar terlihat menarik.”

### Pertanyaan kepada peserta

> “Kalau Bapak dan Ibu membuka rekap layanan, angka apa yang biasanya ingin diketahui terlebih dahulu?”

Arahkan ke total data, selesai, diproses, dibatalkan, per jenis layanan, atau per unit.

---

## Slide 14 — Dari Excel ke Google Sheets

### Kalimat yang bisa diucapkan

> “Kita mulai dari workbook Excel. Sebelum memasukkannya ke aplikasi, kita periksa dulu nama sheet, header, tanggal, status, dan jumlah baris.”
>
> “Setelah itu file dapat diunggah atau diimpor ke Google Sheets. Google Sheets menjadi tempat data dibaca oleh Apps Script.”
>
> “Nama header sebaiknya tidak diubah sembarangan setelah kode dibuat. Kalau header berubah, kode yang membaca kolom tersebut juga dapat gagal.”

### Saat demo

> “Bapak dan Ibu, perhatikan sheet `Data` sebagai sumber isi dan sheet `Panduan` sebagai keterangan kolom. Kita tidak perlu menghafal semua kode. Yang penting kita tahu data apa yang tersedia dan apa arti setiap kolom.”

---

## Slide 15 — Data dictionary dan data aman

### Kalimat yang bisa diucapkan

> “Data dictionary adalah keterangan sederhana tentang kolom. Misalnya `Tanggal` berisi tanggal permohonan, `Jenis_Layanan` berisi kategori layanan, dan `Status` berisi status proses.”
>
> “Data dictionary membantu manusia dan AI memahami arti data. Tanpa keterangan ini, satu nama kolom bisa ditafsirkan berbeda.”
>
> “Untuk latihan, kita memakai angka agregat, nama unit samaran, dan data sintetis. Jangan menambahkan identitas warga hanya karena kolom itu tersedia di data kantor.”

### Aktivitas kelompok

> “Silakan kelompok membuka sheet `Panduan`, lalu pilih satu kolom dan jelaskan dengan kalimat sendiri: kolom ini menyimpan apa, nilainya seperti apa, dan apakah kolom ini perlu ditampilkan di dashboard.”

---

## Slide 16 — Siapa memakai dashboard dan untuk pertanyaan apa

### Kalimat yang bisa diucapkan

> “Sebelum memilih warna atau grafik, kita tentukan siapa yang akan membaca dashboard dan pertanyaan apa yang ingin dijawab.”
>
> “Kalau penggunanya pimpinan, mungkin yang dibutuhkan adalah ringkasan jumlah dan status. Kalau penggunanya staf, mungkin dibutuhkan tabel detail dan filter untuk menindaklanjuti data.”
>
> “Satu dashboard tidak harus menampilkan semua kolom. Tampilkan informasi yang membantu pekerjaan.”

### Pertanyaan untuk kelompok

> “Silakan setiap kelompok melengkapi kalimat ini: dashboard kami dipakai oleh ..., untuk menjawab pertanyaan ...”

Beri waktu singkat dan minta satu kelompok membaca jawabannya.

---

## Slide 17 — Dari kolom data ke KPI

### Kalimat yang bisa diucapkan

> “KPI adalah angka ringkasan yang membantu kita membaca keadaan data. KPI harus memiliki definisi yang jelas dan dapat dihitung secara manual.”
>
> “Untuk contoh rekap layanan, kita bisa menghitung total seluruh baris, jumlah selesai, jumlah masih diproses, dan jumlah dibatalkan. Nama KPI dapat berbeda sesuai kebutuhan, tetapi definisinya harus ditulis.”
>
> “Jangan membuat KPI hanya karena terlihat bagus. Tanyakan dulu: angka ini membantu keputusan atau pekerjaan apa?”

### Aktivitas kelompok

> “Setiap kelompok silakan pilih maksimal tiga KPI awal. Tulis nama KPI, definisinya, dan kolom yang digunakan untuk menghitungnya.”

---

## Slide 18 — Contoh tampilan dashboard akhir

### Kalimat yang bisa diucapkan

> “Ini contoh tampilan akhir yang kita tuju. Ada kartu ringkasan, rekap kategori, filter, dan tabel.”
>
> “Tampilan ini masih merupakan prototipe latihan. Yang perlu kita perhatikan bukan hanya tampilannya, tetapi apakah angka dan filter bekerja sesuai data sumber.”
>
> “Kalau waktu workshop terbatas, kita prioritaskan satu dashboard yang sederhana tetapi bisa diuji. Fitur tambahan dapat dikerjakan setelah sesi.”

---

## Slide 19 — ChatGPT sebagai alat bantu

### Kalimat yang bisa diucapkan

> “Pada bagian ini ChatGPT membantu kita menyusun rancangan KPI, menjelaskan kode, membuat kode awal, atau membantu membaca pesan error.”
>
> “Kita tidak menyerahkan keputusan kepada ChatGPT. Kita memberikan header, tujuan, dan batasan yang aman. Setelah menerima hasilnya, kita periksa dan mengujinya.”
>
> “Kalau meminta kode, minta hasilnya dipisah menjadi dua file: `Code.gs` untuk pengolahan dan `Index.html` untuk tampilan.”

### Prompt yang bisa dibacakan

> “Bertindak sebagai mentor Google Apps Script untuk pemula. Gunakan data sintetis dengan header yang saya berikan. Buat `Code.gs` dan `Index.html` terpisah. Jangan mengubah nama header. Sertakan tiga KPI, filter status, dan checklist pengujian.”

### Tekankan

> “Jangan menempelkan data sensitif ke chat hanya agar AI bisa membuat kode.”

---

## Slide 20 — Prompt dashboard berdasarkan kolom Sheet

### Kalimat yang bisa diucapkan

> “Sekarang kita gunakan struktur prompt yang tadi dijelaskan Mas Syam. Perhatikan bahwa prompt ini menyebutkan peran, tujuan, header, batasan, output, dan cara uji.”
>
> “Semakin jelas bahan yang kita berikan, semakin mudah kita memeriksa apakah keluaran AI sesuai dengan kebutuhan.”
>
> “Jika hasilnya belum sesuai, jangan langsung meminta ulang dari awal. Jelaskan bagian yang salah dan minta perubahan kecil.”

### Kalimat diagnosis

> “Kalau error, sampaikan pesan error lengkap, nama fungsi, tindakan terakhir, dan header yang tersedia. Jangan hanya menulis ‘tidak bisa’.”

---

## Slide 21 — Membuka Google Apps Script

### Kalimat yang bisa diucapkan

> “Dari Google Sheets, kita buka menu Ekstensi lalu Apps Script. Apps Script adalah tempat kita menempatkan kode yang membaca spreadsheet dan menyajikan halaman dashboard.”
>
> “Bapak dan Ibu tidak perlu takut dengan tampilan editor. Kita hanya akan bekerja pada dua file utama yang disiapkan untuk latihan.”
>
> “Sebelum menjalankan fungsi apa pun, pastikan kita berada pada file spreadsheet dan project yang benar.”

### Saat menunjukkan menu

> “Perhatikan urutannya: buka spreadsheet, pilih Ekstensi, lalu pilih Apps Script. Setelah editor terbuka, kita periksa nama file dan kode sebelum menjalankan.”

---

## Slide 22 — Menempatkan `Code.gs` dan `Index.html`

### Kalimat yang bisa diucapkan

> “`Code.gs` berisi kode server yang membaca data dan menghitung ringkasan. `Index.html` berisi tampilan yang dilihat pengguna di browser.”
>
> “Pada level latihan ini, kita cukup memahami pembagian tugasnya. Kalau ada perubahan pada tampilan, biasanya kita melihat `Index.html`. Kalau ada perubahan pada cara membaca data atau menghitung KPI, biasanya kita melihat `Code.gs`.”
>
> “Jalankan `setupSpreadsheetId()` sesuai panduan pada project latihan yang terhubung dengan spreadsheet. Fungsi ini hanya dijalankan setelah sumber spreadsheet dipastikan benar.”

### Tekankan

> “Jangan menempel kode ke file yang salah. Jangan menghapus kode yang sudah berjalan hanya untuk mencoba satu perubahan.”

---

## Slide 23 — Dashboard berjalan

### Kalimat yang bisa diucapkan

> “Sekarang kita lihat halaman dashboard. Halaman yang terbuka belum otomatis berarti hasilnya benar.”
>
> “Kita periksa apakah totalnya sesuai, apakah jumlah selesai dan diproses sesuai hitungan manual, apakah tabel mengambil data dari sheet `Data`, dan apakah tanggal pembaruan tampil.”
>
> “Kalau satu angka berbeda, kita berhenti sejenak dan mencari penyebabnya. Jangan menyembunyikan perbedaan angka hanya dengan mengubah tampilan.”

### Pertanyaan cek cepat

> “Bapak dan Ibu, dari tampilan ini, bagian mana yang paling cepat menunjukkan apakah dashboard mengambil data yang benar?”

Arahkan ke KPI, tabel, filter, dan tanggal pembaruan.

---

## Slide 24 — Satu perubahan kecil

### Kalimat yang bisa diucapkan

> “Setelah dashboard dasar berjalan, kita tidak perlu langsung menambah banyak fitur. Kita pilih satu perubahan kecil, misalnya menambah filter unit, mengganti label KPI, atau menambah satu kolom tabel.”
>
> “Minta AI menjelaskan file dan fungsi mana yang berubah. Setelah itu uji kembali fitur lama dan fitur baru.”
>
> “Cara bekerja seperti ini lebih aman daripada meminta AI menulis ulang seluruh aplikasi setiap kali ada kebutuhan baru.”

### Instruksi ke kelompok

> “Pilih satu perubahan saja. Catat permintaan yang diberikan kepada AI, file yang berubah, dan tiga langkah pengujian.”

---

## Slide 25 — Testing dan verifikasi

### Kalimat yang bisa diucapkan

> “Sekarang kita uji dengan checklist. Pertama, periksa data: header sesuai, tanggal terbaca, status konsisten, dan tidak ada baris kosong yang tidak sengaja masuk.”
>
> “Kedua, periksa hasil: KPI dibandingkan dengan hitungan manual, satu record diubah untuk melihat apakah hasil ikut berubah, filter dicoba, tabel dan grafik dibaca, lalu error dicatat dengan lengkap.”
>
> “Dashboard yang terlihat rapi masih bisa memiliki perhitungan yang salah. Karena itu pengujian adalah bagian dari pekerjaan, bukan langkah tambahan yang boleh dilewati.”

### Uji yang dapat diperagakan

> “Kita bisa mengubah satu status pada data latihan, memuat ulang dashboard, lalu melihat apakah angka KPI berubah sesuai harapan. Setelah itu kembalikan data latihan ke kondisi semula.”

---

## Slide 26 — Menerbitkan dashboard sebagai link

### Kalimat yang bisa diucapkan

> “Kalau hasil lokal sudah diperiksa, project dapat diterbitkan sebagai Web app agar dibuka melalui link.”
>
> “Di menu Deploy, pilih New deployment dan tipe Web app. Periksa siapa yang menjalankan aplikasi dan siapa yang boleh mengaksesnya. Setelah itu salin URL dan uji dari browser.”
>
> “Jangan memilih akses publik hanya supaya cepat. Pengaturan akses harus mengikuti keputusan tim dan kebijakan organisasi.”
>
> “Kalau belum ada URL nyata yang sudah dibuka dan diuji, kita menyebutnya sebagai rancangan atau preview, bukan deployment yang sudah berhasil.”

### Jika waktu 80 menit terbatas

> “Untuk sesi inti, kita cukup memahami jalur deployment dan menggunakan preview yang sudah disiapkan. Deployment semua kelompok tidak wajib dilakukan di dalam kelas.”

---

## Checklist kelompok — slide 27

### Kalimat yang bisa diucapkan

> “Sebelum kita tutup, setiap kelompok memastikan empat hal tersimpan: sumber data latihan, prompt utama, screenshot atau link jika sudah diuji, dan checklist pengujian.”
>
> “Setiap kelompok juga harus bisa menjelaskan pertanyaan kerja, definisi KPI, batasan data, dan siapa PIC yang akan melanjutkan jika dashboard ingin dikembangkan.”
>
> “Penilaian kita bukan berdasarkan siapa yang membuat fitur paling banyak. Yang penting kelompok dapat menjelaskan alurnya, menjaga data, dan menunjukkan bahwa hasilnya sudah diuji.”

### Jika waktu tersisa sedikit

> “Cukup satu atau dua kelompok berbagi hasil secara singkat. Kelompok lain tetap mengumpulkan checklist dan catatan pengujiannya.”

---

## Penutup bersama — slide 28

### Kalimat Yazid

> “Hari ini kita sudah melihat bahwa dashboard tidak dimulai dari kode. Dashboard dimulai dari pertanyaan kerja, data yang aman, definisi KPI, prompt yang jelas, dan pengujian.”

### Kalimat Mas Syam

> “AI dapat membantu mempercepat pekerjaan awal, tetapi manusia tetap memeriksa fakta, menjaga data, dan bertanggung jawab atas hasil yang digunakan.”

### Kalimat penutup bersama

> “Silakan mulai dari data latihan. Setelah alurnya dipahami dan aksesnya disepakati, barulah tim dapat mempertimbangkan data yang lebih dekat dengan kebutuhan kerja.”
>
> “Terima kasih atas partisipasi Bapak dan Ibu. Semoga setelah sesi ini, Bapak dan Ibu bukan hanya mengetahui apa itu AI, tetapi juga dapat menggunakannya dengan aman dan menjelaskan hasil dashboard yang dibuat.”

### Pertanyaan exit ticket

> “Sebelum selesai, mohon masing-masing kelompok menyebutkan satu data atau pekerjaan yang ingin diringkas, dan satu batasan keamanan yang akan dijaga.”

---

## Kalimat yang sebaiknya dihindari

| Hindari | Gunakan sebagai gantinya |
|---|---|
| “AI bisa mengerjakan semuanya.” | “AI membantu bagian awal, lalu manusia memeriksa hasilnya.” |
| “Tinggal upload data warga ke ChatGPT.” | “Gunakan data sintetis atau data yang sudah dianonimkan dan diizinkan.” |
| “Kalau halaman terbuka berarti sudah berhasil.” | “Kita perlu memeriksa KPI, tabel, filter, dan akses.” |
| “Bapak/Ibu harus bisa coding hari ini.” | “Bapak/Ibu perlu memahami alur, membaca struktur kode, dan mampu menguji perubahan.” |
| “Dashboard ini sudah siap untuk pelayanan produksi.” | “Ini prototipe latihan yang perlu penyesuaian, persetujuan, dan uji akses sebelum dipakai.” |

## Catatan durasi

### Jika slot inti 80 menit

- Slide 1–2: 5 menit.
- Slide 3–10: 25 menit. Ambil satu contoh peserta saja.
- Slide 11: 3 menit.
- Slide 12–26: 39 menit. Gunakan satu dataset utama, satu demo end-to-end, dan satu perubahan kecil.
- Slide 27–28: 5 menit.
- Sisakan sekitar 3 menit untuk kendala teknis.

### Jika slot penuh 120 menit

- Beri waktu lebih panjang pada latihan prompt, data dictionary, KPI, dan pengujian kelompok.
- Tiga kelompok dapat mencoba kasus masing-masing.
- Deployment dilakukan hanya jika akun, akses, dan URL sudah siap diuji.

## Handoff singkat yang perlu dihafalkan

### Pembukaan ke Mas Syam

> “Sebelum praktik dashboard, kita mulai dari cara memahami AI, batas penggunaannya, dan cara memberi instruksi yang benar. Mas Syam akan membawakan bagian teori dan keamanan data.”

### Mas Syam ke Yazid

> “Sekarang kita sudah memiliki cara berpikir dan batas aman penggunaan AI. Yazid akan menunjukkan bagaimana hal itu diterapkan dari Excel sampai dashboard yang dapat diuji.”

### Yazid ke penutup

> “Dashboard yang baik bukan yang paling banyak fiturnya. Dashboard yang baik adalah dashboard yang datanya aman, angkanya dapat dijelaskan, dan hasilnya sudah diuji.”
