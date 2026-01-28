// main.js - Main initialization and utility functions

// Ensure authentication
function checkAuth() {
    if (!localStorage.getItem('authenticated') && window.location.pathname.includes('home.html')) {
        window.location.href = 'index.html';
    }
}

// Initialize all features on page load
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    
    // Initialize particles if on main page
    if (document.getElementById('particlesCanvas')) {
        initParticles('particlesCanvas');
    }
    
    // Initialize music player
    if (document.getElementById('musicGrid')) {
        initMusicPlayer();
    }
    
    // Load random memory
    if (document.getElementById('memoryText')) {
        setTimeout(loadRandomMemory, 500);
    }
    
    // Start typewriter message
    if (document.getElementById('typewriterMessage')) {
        setTimeout(startTypewriterMessage, 1000);
    }
});

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Prevent right click and text selection for a cleaner experience (optional)
// Uncomment if you want this feature
// document.addEventListener('contextmenu', e => e.preventDefault());
// document.addEventListener('selectstart', e => e.preventDefault());

// Add touch feedback for mobile
document.addEventListener('touchstart', function(){}, {passive: true});

// Log to console
console.log('💖 Happy Birthday Lixie! Made with love by Ryzen 💖');
