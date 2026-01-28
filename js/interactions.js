// interactions.js - All interactive features

let noClickCount = 0;

// Love Question Feature
function handleYes() {
    const response = document.getElementById('loveResponse');
    response.innerHTML = `
        <h3>Aku tau kok! 💖</h3>
        <p>Aku juga sayang banget sama kamu, Lixie! ❤️</p>
        <p>Kamu yang terbaik! 🥰</p>
    `;
    response.classList.remove('hidden');
    triggerConfetti();
}

function handleNo() {
    noClickCount++;
    const noBtn = document.getElementById('noBtn');
    const counter = document.getElementById('loveCounter');
    
    if (noClickCount < 10) {
        // Make button move randomly
        const randomX = Math.random() * 50 - 25;
        const randomY = Math.random() * 50 - 25;
        noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
        
        counter.textContent = `Mencoba ${noClickCount}x... Coba lagi! 😏`;
        
        // Add shake animation
        noBtn.style.animation = 'shake 0.5s';
        setTimeout(() => noBtn.style.animation = '', 500);
    } else {
        // Auto change to Yes
        noBtn.textContent = 'Yes! 💖';
        noBtn.style.transform = 'translate(0, 0)';
        noBtn.onclick = handleYes;
        counter.textContent = 'Akhirnya! Aku tau kok kamu sayang aku 😊';
        setTimeout(handleYes, 500);
    }
}

// Mood Slider Feature
const moodComments = [
    { range: [0, 20], text: "Yah... lagi down ya? Aku peluk deh 🤗" },
    { range: [21, 40], text: "Hmm... kurang semangat nih kayanya 😔" },
    { range: [41, 60], text: "Biasa aja nih kayanya..." },
    { range: [61, 80], text: "Lumayan happy nih! Keep it up! 😊" },
    { range: [81, 100], text: "Wah semangat banget! Love it! 🥳✨" }
];

document.addEventListener('DOMContentLoaded', () => {
    const moodSlider = document.getElementById('moodSlider');
    const moodValue = document.getElementById('moodValue');
    const moodComment = document.getElementById('moodComment');
    
    if (moodSlider) {
        moodSlider.addEventListener('input', (e) => {
            const value = e.target.value;
            moodValue.textContent = value + '%';
            
            const comment = moodComments.find(c => value >= c.range[0] && value <= c.range[1]);
            moodComment.textContent = comment ? comment.text : '';
        });
    }
    
    // Love Meter Feature
    const loveSlider = document.getElementById('loveSlider');
    const loveValue = document.getElementById('loveValue');
    const heartsDisplay = document.getElementById('heartsDisplay');
    
    if (loveSlider) {
        loveSlider.addEventListener('input', (e) => {
            const value = e.target.value;
            loveValue.textContent = value + '%';
            
            // Update hearts glow
            const hearts = heartsDisplay.querySelectorAll('.heart-icon');
            const activeHearts = Math.ceil((value / 100) * hearts.length);
            
            hearts.forEach((heart, index) => {
                if (index < activeHearts) {
                    heart.classList.add('glow');
                } else {
                    heart.classList.remove('glow');
                }
            });
        });
    }
});

// Memory/Kenangan Feature
const memories = [
    {
        date: '22 Desember 2024',
        text: 'Ga nyangka karena nama Facebook kita bisa jadian. Walaupun banyak ujian tetap bisa kita lewatin, aku masih inget kamu gamau di HTS in wkwk 😏💖'
    },
    {
        date: '6 Juni 2025',
        text: 'Aku ke Cianjur, bayangin di jalan selalu kepikiran kamu, grogi kalau aku bakal ke rumah kamu dan ketemu orang tua. Ternyata orang tua kamu mau nerima aku apa adanya aja, seneng banget rasanya 💖'
    }
];

let currentMemoryIndex = 0;

function loadRandomMemory() {
    currentMemoryIndex = Math.floor(Math.random() * memories.length);
    const memory = memories[currentMemoryIndex];
    
    const memoryText = document.getElementById('memoryText');
    memoryText.textContent = '';
    
    const fullText = `${memory.date}\n\n${memory.text}`;
    typeWriter(fullText, memoryText, 0);
}

function typeWriter(text, element, index) {
    if (index < text.length) {
        element.textContent += text.charAt(index);
        setTimeout(() => typeWriter(text, element, index + 1), 30);
    }
}

// Magic Number Feature
const magicPredictions = [
    "Ramalan: Hari ini kamu bakal ketemu orang yang sayang banget sama kamu! (Spoiler: itu aku 😏)",
    "Ramalan: Angka keberuntungan kamu menunjukkan... kamu bakal dapet pelukan gratis dari aku! 🤗",
    "Ramalan: Bintang-bintang bilang... kamu cantik banget hari ini! ✨",
    "Ramalan: Karma baik kamu akan kembali berlipat ganda! Keep being awesome! 💖",
    "Ramalan: Seseorang sedang memikirkan kamu sekarang... (Yep, it's me! 😊)",
    "Ramalan: Hari ini adalah hari spesial kamu! Celebrate it! 🎉",
    "Ramalan: Angka ini membawa energi cinta yang luar biasa! 💕",
    "Ramalan: Kebahagiaan sedang menuju ke arahmu dengan kecepatan penuh! 🚀"
];

function getMagicPrediction() {
    const input = document.getElementById('magicNumber');
    const result = document.getElementById('magicResult');
    const value = input.value;
    
    if (!value) {
        alert('Masukkan angka favorit kamu dulu! 😊');
        return;
    }
    
    const randomPrediction = magicPredictions[Math.floor(Math.random() * magicPredictions.length)];
    
    result.innerHTML = `
        <h4>Angka Kamu: ${value}</h4>
        <p>${randomPrediction}</p>
    `;
    result.classList.remove('hidden');
}

// Gift Box Feature
let giftOpened = false;

function openGift() {
    if (giftOpened) return;
    
    const giftBox = document.getElementById('giftBox');
    const giftOpened = document.getElementById('giftOpened');
    
    giftBox.style.display = 'none';
    giftOpened.classList.remove('hidden');
    
    triggerConfetti();
    createSparkles(giftOpened);
    
    giftOpened = true;
}

// Timeline Feature
const timelineDetails = [
    {
        title: '6 Juni 2025 - Pertama Kali Ketemu',
        content: `
            <h3>Momen Yang Ga Akan Pernah Terlupakan 💖</h3>
            <p>Aku ke Cianjur, bayangin di jalan selama perjalanan selalu kepikiran kamu. Grogi banget kalau aku bakal ke rumah kamu dan ketemu orang tua kamu.</p>
            <p>Ternyata orang tua kamu mau nerima aku apa adanya aja, seneng banget rasanya! Itu salah satu hari paling berkesan dalam hidup aku 🥰</p>
        `
    },
    {
        title: '22 Desember 2024 - Hari Jadian Kita',
        content: `
            <h3>The Best Day Ever! 💕</h3>
            <p>Ga nyangka karena nama Facebook kita bisa jadian. Lucu banget kan awal kita? 😄</p>
            <p>Walaupun banyak ujian tetap bisa kita lewatin bersama. Aku masih inget kamu gamau di HTS in wkwk 😏</p>
            <p>Semoga kita bisa terus bersama sampai tua ya! 💖</p>
        `
    },
    {
        title: '1 Februari 2025 - Ulang Tahun Lixie',
        content: `
            <h3>Happy Birthday My Love! 🎂</h3>
            <p>Hari spesial untuk orang yang paling spesial dalam hidup aku!</p>
            <p>Semoga di umur yang baru ini, kamu selalu sehat, bahagia, dan semua impian kamu tercapai 🌟</p>
            <p>Thank you udah jadi bagian terpenting dalam hidup aku. I love you so much! ❤️</p>
        `
    }
];

function showTimelineDetail(index) {
    const detail = document.getElementById('timelineDetail');
    const content = document.getElementById('timelineDetailContent');
    
    content.innerHTML = timelineDetails[index].content;
    detail.classList.remove('hidden');
}

function closeTimelineDetail() {
    const detail = document.getElementById('timelineDetail');
    detail.classList.add('hidden');
}

// Typewriter Message Feature
const specialMessage = "Lixie, kamu adalah alasan aku tersenyum setiap hari. Terima kasih sudah menjadi bagian dari hidupku. Aku berjanji akan selalu ada untuk kamu, di saat senang maupun susah. I love you more than words can say. Happy Birthday, my everything! 💖✨";

function startTypewriterMessage() {
    const element = document.getElementById('typewriterMessage');
    if (!element) return;
    
    let index = 0;
    
    function type() {
        if (index < specialMessage.length) {
            element.textContent += specialMessage.charAt(index);
            index++;
            setTimeout(type, 50);
        }
    }
    
    type();
}
