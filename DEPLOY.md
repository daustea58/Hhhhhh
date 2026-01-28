# 🚀 Panduan Deploy Website Lixie Birthday

## Cara Paling Mudah: Netlify Drop

1. **Buka Netlify Drop**
   - Kunjungi: https://app.netlify.com/drop
   
2. **Extract File ZIP**
   - Extract file `lixie-birthday.zip` yang sudah kamu download
   
3. **Drag & Drop**
   - Drag seluruh folder `lixie-birthday` ke halaman Netlify Drop
   - ATAU klik area upload dan pilih folder
   
4. **Tunggu Deploy**
   - Netlify akan otomatis upload dan deploy website
   - Proses hanya 10-30 detik
   
5. **Website Online!**
   - Netlify akan memberikan URL gratis: `random-name.netlify.app`
   - Kamu bisa ubah nama URL di dashboard Netlify
   
6. **Share ke Lixie**
   - Copy URL dan kirim ke Lixie
   - Website bisa diakses dari HP/komputer manapun!

## Custom Domain (Opsional)

Jika kamu punya domain sendiri (misal: `lixie.com`):
1. Login ke Netlify dashboard
2. Klik "Domain Settings"
3. Tambahkan custom domain
4. Ikuti instruksi setup DNS

## Alternatif Deploy: GitHub Pages

1. **Upload ke GitHub**
   ```bash
   # Buat repository baru di GitHub
   # Upload folder lixie-birthday ke repo
   ```

2. **Aktifkan GitHub Pages**
   - Masuk ke Settings > Pages
   - Source: pilih branch (main/master)
   - Folder: pilih root
   - Save

3. **Akses Website**
   - URL: `username.github.io/repo-name`

## Alternatif Deploy: Vercel

1. Buka https://vercel.com
2. Sign up/Login dengan GitHub
3. Klik "New Project"
4. Import folder `lixie-birthday`
5. Deploy!

## Tips

- **Gratis**: Netlify, Vercel, dan GitHub Pages semuanya GRATIS
- **HTTPS**: Otomatis dapat SSL certificate (aman)
- **Fast**: Loading cepat karena CDN global
- **Update**: Kalau mau update website, tinggal upload ulang

## Troubleshooting

**Website tidak muncul setelah deploy?**
- Tunggu 1-2 menit untuk propagasi
- Clear cache browser (Ctrl+Shift+R)
- Cek console browser untuk error

**Folder structure salah?**
- Pastikan `index.html` ada di root folder
- Struktur: `lixie-birthday/index.html` (BENAR)
- Bukan: `lixie-birthday/lixie-birthday/index.html` (SALAH)

---

Selamat deploy! Semoga Lixie suka! 💖
