// music-player.js - Music player functionality

const musicData = {
    sedih: [
        { title: 'Menerima Luka', artist: 'Natasya Sabella', url: 'assets/menerima-luka.mp3' },
        { title: 'Bersenja Gurau', artist: 'Raim Laode', url: 'assets/bersenja-gurau.mp3' },
        { title: 'Dirimu Yang Dulu', artist: 'Anggis Devaki', url: 'assets/dirimu-yang-dulu.mp3' }
    ],
    mood: [
        { title: 'Mistletoe', artist: 'Justin Bieber', url: 'assets/mistletoe.mp3' },
        { title: '18', artist: 'One Direction', url: 'assets/18.mp3' },
        { title: 'Trouble', artist: 'ciaffa, fedo DJ', url: 'assets/trouble.mp3' }
    ],
    semangat: [
        { title: 'Payphone', artist: 'Maroon 5', url: 'assets/payphone.mp3' },
        { title: 'Perfect', artist: 'One Direction', url: 'assets/perfect.mp3' },
        { title: 'Where We Are', artist: 'One Direction', url: 'assets/where-we-are.mp3' }
    ],
    favorit: [
        { title: 'Kota ini tak sama tanpamu', artist: 'Nadhif Basalamah', url: 'assets/kota-ini.mp3' },
        { title: 'Masa ini, Nanti, dan Masa Indah Lainnya', artist: 'Nuca', url: 'assets/masa-ini.mp3' },
        { title: '8 Letters', artist: 'Why Don\'t We', url: 'assets/8-letters.mp3' }
    ]
};

let currentCategory = 'sedih';
let currentAudio = null;

function initMusicPlayer() {
    showCategory('sedih');
    
    const uploadInput = document.getElementById('uploadMusic');
    uploadInput.addEventListener('change', handleFileUpload);
}

function showCategory(category) {
    currentCategory = category;
    
    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target?.classList.add('active') || document.querySelector(`[data-testid="category-${category}"]`).classList.add('active');
    
    // Display music cards
    const musicGrid = document.getElementById('musicGrid');
    musicGrid.innerHTML = '';
    
    musicData[category].forEach((song, index) => {
        const card = document.createElement('div');
        card.className = 'music-card';
        card.setAttribute('data-testid', `music-card-${index}`);
        card.innerHTML = `
            <h4>${song.title}</h4>
            <p>${song.artist}</p>
        `;
        card.onclick = () => {
            if (song.url) {
                playMusic(song.title, song.url);
            } else {
                alert('Link musik belum tersedia. Silakan upload MP3 sendiri! 🎵');
            }
        };
        musicGrid.appendChild(card);
    });
}

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    if (file.type !== 'audio/mpeg' && file.type !== 'audio/mp3') {
        alert('Please upload MP3 file only!');
        return;
    }
    
    const url = URL.createObjectURL(file);
    playMusic(file.name.replace('.mp3', ''), url);
}

function playMusic(title, url) {
    const musicPlayer = document.getElementById('musicPlayer');
    const songName = document.getElementById('songName');
    const audioPlayer = document.getElementById('audioPlayer');
    
    // Stop current audio if playing
    if (currentAudio) {
        currentAudio.pause();
    }
    
    // Update player
    songName.textContent = title;
    audioPlayer.src = url;
    musicPlayer.classList.remove('hidden');
    
    // Play audio
    audioPlayer.play();
    currentAudio = audioPlayer;
    
    // Scroll to player
    musicPlayer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
