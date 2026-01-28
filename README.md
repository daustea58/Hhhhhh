# Website Ulang Tahun Romantis untuk Lixie 💙

Website ulang tahun multi-page yang dibuat dengan HTML, CSS, dan Vanilla JavaScript. Website ini menampilkan cerita romantis, surat digital, dan fitur interaktif yang hangat dan tulus.

## 🎯 Fitur Utama

- **Background Music** - Musik "Perfect" by Ed Sheeran yang auto-play dan persisten antar halaman
- **Page Transitions** - Transisi halus dengan loading animasi romantis
- **Our Story Timeline** - Timeline cerita hubungan dengan animasi fade-in on scroll
- **Open-When Letters** - 7 surat digital untuk berbagai situasi (capek, kangen, sendiri, dll)
- **Mood Selector** - Pilih mood dengan pesan empati dan perubahan background
- **Memory Shuffle** - Acak kenangan random dari hubungan
- **"Kamu Sayang Aku Ga?"** - Fitur interaktif lucu dengan tombol YES/NO
- **Ending Cinematic** - Penutup dengan efek fade yang emosional

## 📁 Struktur File

```
website-lixie/
├── index.html          # Halaman pembuka
├── about.html          # Tentang Lixie
├── story.html          # Timeline cerita
├── letter.html         # Surat digital
├── future.html         # Masa depan & mood selector
├── fun.html            # Memory shuffle & fitur gemas
├── closing.html        # Penutup
├── assets/
│   ├── css/
│   │   └── style.css   # Semua styling
│   ├── js/
│   │   ├── music.js    # Background music handler
│   │   ├── transition.js # Page transitions
│   │   └── main.js     # Interactive features
│   └── audio/          # (kosong - musik dari YouTube)
├── netlify.toml        # Konfigurasi Netlify
└── README.md           # Dokumentasi ini
```

## 🚀 Cara Deploy ke Netlify

### Metode 1: Drag & Drop (Paling Mudah)

1. **Persiapan File**
   - Pastikan semua file sudah ada di folder `website-lixie`
   - Zip folder `website-lixie` menjadi satu file (atau tidak perlu zip, langsung drag folder)

2. **Login ke Netlify**
   - Buka https://app.netlify.com
   - Login atau buat akun gratis (bisa pakai GitHub, Email, atau GitLab)

3. **Deploy Website**
   - Di dashboard Netlify, scroll ke bawah ke bagian "Deploys"
   - Atau langsung ke: https://app.netlify.com/drop
   - **Drag & drop folder `website-lixie`** ke area yang bertulisan "Drag and drop your site output folder here"
   - Tunggu proses upload selesai (biasanya < 1 menit)

4. **Website Live!**
   - Netlify akan memberikan URL random seperti: `https://random-name-12345.netlify.app`
   - Klik URL tersebut untuk membuka website
   - Website sudah bisa diakses oleh siapa saja!

5. **Custom Domain (Opsional)**
   - Di dashboard Netlify, klik site yang baru di-deploy
   - Klik "Domain settings"
   - Klik "Options" → "Edit site name"
   - Ubah nama site menjadi lebih personal, contoh: `lixie-birthday-2025`
   - URL akan berubah menjadi: `https://lixie-birthday-2025.netlify.app`

### Metode 2: Netlify CLI (Untuk yang Familiar dengan Terminal)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login ke Netlify
netlify login

# Deploy dari folder website
cd website-lixie
netlify deploy

# Pilih "Create & configure a new site"
# Pilih team/account Anda
# Masukkan site name (opsional)

# Deploy production
netlify deploy --prod
```

## 🎵 Tentang Musik

Website ini menggunakan YouTube IFrame API untuk memutar lagu "Perfect" by Ed Sheeran:
- Auto-play saat pertama kali membuka website
- Tombol mute/unmute di pojok kanan atas
- Musik akan terus berjalan saat pindah halaman (menggunakan localStorage)
- Posisi musik akan tersimpan dan dilanjutkan

**Catatan:** Beberapa browser mungkin memblokir auto-play. User hanya perlu klik tombol musik untuk memulai.

## 🎨 Desain & Tema

- **Warna:** Biru mewah (Navy, Royal Blue, Putih, Silver)
- **Font:** Playfair Display (heading), Inter (body)
- **Style:** Elegant, clean, premium dengan glass-morphism effect
- **Responsive:** Mobile-first design, optimal di semua device

## 🔧 Customisasi

### Mengganti Musik

Edit file `assets/js/music.js`, cari bagian:
```javascript
videoId: 'RvA3q0ZU-NQ', // Perfect - Ed Sheeran
```
Ganti dengan video ID YouTube lain. Cara mendapatkan video ID:
- Contoh URL: `https://www.youtube.com/watch?v=RvA3q0ZU-NQ`
- Video ID adalah: `RvA3q0ZU-NQ` (setelah `watch?v=`)

### Menambah/Mengubah Konten

- **Surat Digital:** Edit array `letters` di file `letter.html`
- **Kenangan:** Edit array `memories` di file `fun.html`
- **Mood Messages:** Edit object `moodMessages` di file `future.html`

## 📱 Kompatibilitas

- ✅ Chrome, Firefox, Safari, Edge (versi terbaru)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Responsive untuk semua ukuran layar
- ⚠️ Internet Explorer tidak didukung

## 💡 Tips

1. **Test di Local:** Buka file `index.html` langsung di browser untuk preview
2. **Musik Auto-Play:** Jika musik tidak auto-play, user perlu klik tombol musik (policy browser)
3. **Share Link:** Setelah deploy, copy link Netlify dan share ke Lixie
4. **Privacy:** Website ini publik, siapa saja dengan link bisa akses

## 🎁 Untuk Lixie

Website ini dibuat dengan penuh ketulusan oleh Ryzen untuk merayakan ulang tahun Lixie yang ke-22. Setiap halaman, setiap kata, dan setiap fitur dirancang untuk menunjukkan kasih sayang yang tulus.

**Selamat ulang tahun, Lixie! 💙**

---

## 📝 Technical Details

- **Framework:** Vanilla JavaScript (no dependencies)
- **Styling:** Pure CSS3 dengan custom properties
- **Music:** YouTube IFrame API
- **Storage:** LocalStorage untuk music state persistence
- **Hosting:** Optimized untuk Netlify static hosting
- **Performance:** Lightweight, fast loading, no build process needed

## 🐛 Troubleshooting

**Musik tidak auto-play:**
- Ini adalah kebijakan browser modern
- User hanya perlu klik tombol musik (🔊) untuk memulai

**Page transition tidak smooth:**
- Pastikan JavaScript enabled di browser
- Clear browser cache dan reload

**Layout berantakan di mobile:**
- Pastikan viewport meta tag ada di semua HTML file (sudah included)

---

Made with 💙 by Ryzen for Lixie
