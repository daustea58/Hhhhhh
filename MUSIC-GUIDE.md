# 🎵 Panduan Upload Musik MP3 Lokal

## Langkah-langkah:

### 1. Siapkan File MP3
Rename file MP3 kamu sesuai nama di bawah (atau sesuaikan nama di code):

**Kategori SEDIH:**
- `menerima-luka.mp3` - Menerima Luka (Natasya Sabella)
- `bersenja-gurau.mp3` - Bersenja Gurau (Raim Laode)
- `dirimu-yang-dulu.mp3` - Dirimu Yang Dulu (Anggis Devaki)

**Kategori MOOD:**
- `mistletoe.mp3` - Mistletoe (Justin Bieber)
- `18.mp3` - 18 (One Direction)
- `trouble.mp3` - Trouble (ciaffa, fedo DJ)

**Kategori SEMANGAT:**
- `payphone.mp3` - Payphone (Maroon 5)
- `perfect.mp3` - Perfect (One Direction)
- `where-we-are.mp3` - Where We Are (One Direction)

**Kategori FAVORIT:**
- `kota-ini.mp3` - Kota ini tak sama tanpamu (Nadhif Basalamah)
- `masa-ini.mp3` - Masa ini, Nanti, dan Masa Indah Lainnya (Nuca)
- `8-letters.mp3` - 8 Letters (Why Don't We)

### 2. Upload ke Folder Assets
```
lixie-birthday/
└── assets/
    ├── menerima-luka.mp3
    ├── bersenja-gurau.mp3
    ├── dirimu-yang-dulu.mp3
    ├── mistletoe.mp3
    ├── 18.mp3
    ├── trouble.mp3
    ├── payphone.mp3
    ├── perfect.mp3
    ├── where-we-are.mp3
    ├── kota-ini.mp3
    ├── masa-ini.mp3
    └── 8-letters.mp3
```

### 3. Sudah Auto-Update!
File `js/music-player.js` sudah diupdate dengan path yang benar. Tinggal:
1. Extract ZIP
2. Taruh file MP3 ke folder `assets/`
3. Deploy atau buka langsung di browser
4. Klik kartu musik untuk play! ✅

### Opsi: Ganti Nama File MP3 Sendiri

Kalau mau pakai nama file lain, edit `js/music-player.js` bagian ini:

```javascript
const musicData = {
    sedih: [
        { title: 'Menerima Luka', artist: 'Natasya Sabella', url: 'assets/nama-file-kamu.mp3' },
        // ... dst
    ]
}
```

### Tips:
- ✅ Gunakan huruf kecil untuk nama file
- ✅ Ganti spasi dengan dash (-) 
- ✅ Format: MP3 only
- ✅ File size: usahakan < 10MB per lagu biar loading cepat
- ❌ Jangan pakai karakter spesial: !@#$%^&*()

### Troubleshooting:

**Musik tidak muncul?**
- Cek nama file MP3 sama dengan yang di code
- Pastikan file ada di folder `assets/`
- Cek console browser (F12) untuk error

**Musik tidak bisa diputar?**
- Pastikan format MP3 (bukan M4A, WAV, dll)
- Coba convert ke MP3 dulu kalau format lain
- Test di browser Chrome/Firefox

---

Sekarang website udah siap pakai dengan musik lokal! 🎵💖
