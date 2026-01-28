// animations.js - Floating hearts, particles, and confetti effects

function initFloatingHearts(canvasId) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const hearts = [];
    const heartColors = ['#FFB6C1', '#DDA0DD', '#E6E6FA', '#FF69B4'];
    
    class Heart {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + Math.random() * 100;
            this.size = Math.random() * 20 + 10;
            this.speed = Math.random() * 1 + 0.5;
            this.color = heartColors[Math.floor(Math.random() * heartColors.length)];
            this.opacity = Math.random() * 0.5 + 0.3;
            this.swing = Math.random() * 2 - 1;
        }
        
        draw() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = this.color;
            ctx.font = `${this.size}px Arial`;
            ctx.fillText('❤️', this.x, this.y);
            ctx.restore();
        }
        
        update() {
            this.y -= this.speed;
            this.x += Math.sin(this.y * 0.01) * this.swing;
            
            if (this.y < -50) {
                this.y = canvas.height + 50;
                this.x = Math.random() * canvas.width;
            }
        }
    }
    
    for (let i = 0; i < 15; i++) {
        hearts.push(new Heart());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        hearts.forEach(heart => {
            heart.update();
            heart.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

function initParticles(canvasId) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleColors = ['#FFB6C1', '#DDA0DD', '#E6E6FA', '#FFE5D9', '#B0E0E6'];
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.color = particleColors[Math.floor(Math.random() * particleColors.length)];
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        draw() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
    }
    
    for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

function triggerConfetti() {
    const container = document.getElementById('confettiContainer');
    if (!container) return;
    
    const colors = ['#FFB6C1', '#DDA0DD', '#E6E6FA', '#FFE5D9', '#B0E0E6', '#90EE90'];
    const confettiCount = 100;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.animationDuration = Math.random() * 2 + 2 + 's';
        
        container.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 4000);
    }
}

function createSparkles(element) {
    const sparkleColors = ['#FFB6C1', '#DDA0DD', '#FFD700', '#FFFFFF'];
    
    for (let i = 0; i < 10; i++) {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'absolute';
        sparkle.style.width = '5px';
        sparkle.style.height = '5px';
        sparkle.style.background = sparkleColors[Math.floor(Math.random() * sparkleColors.length)];
        sparkle.style.borderRadius = '50%';
        sparkle.style.left = '50%';
        sparkle.style.top = '50%';
        sparkle.style.pointerEvents = 'none';
        
        element.appendChild(sparkle);
        
        const angle = (Math.PI * 2 * i) / 10;
        const distance = 50;
        
        sparkle.animate([
            { transform: 'translate(0, 0)', opacity: 1 },
            { 
                transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`,
                opacity: 0
            }
        ], {
            duration: 1000,
            easing: 'ease-out'
        });
        
        setTimeout(() => sparkle.remove(), 1000);
    }
}
