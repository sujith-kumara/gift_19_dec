// Image paths - all 52 images from Kittu folder
const images = [
    'Kittu/IMG-20250531-WA0073.jpg',
    'Kittu/IMG-20250531-WA0074.jpg',
    'Kittu/IMG-20250531-WA0136.jpg',
    'Kittu/IMG_20250531_192617545.jpg',
    'Kittu/IMG_20250601_113344324.jpg',
    'Kittu/IMG_20250601_113429091.jpg',
    'Kittu/IMG_20250601_113454058.jpg',
    'Kittu/IMG_20250601_113458202.jpg',
    'Kittu/IMG_20250601_193722964.jpg',
    'Kittu/IMG_20250601_193724002.jpg',
    'Kittu/IMG_20250601_193724208.jpg',
    'Kittu/IMG_20250601_193729395_HDR.jpg',
    'Kittu/IMG_20250601_193730350.jpg',
    'Kittu/IMG_20250601_193745267_HDR.jpg',
    'Kittu/IMG_20250601_193746057_HDR.jpg',
    'Kittu/IMG_20250601_193757373_HDR.jpg',
    'Kittu/IMG_20250601_193759181_HDR.jpg',
    'Kittu/IMG_20250601_205029942.jpg',
    'Kittu/IMG_20250601_205032947.jpg',
    'Kittu/IMG_20250601_205041679.jpg',
    'Kittu/IMG_20250601_205044032.jpg',
    'Kittu/IMG_20250601_205058975.jpg',
    'Kittu/IMG_20250601_205101561.jpg',
    'Kittu/IMG_20251117_212847938.jpg',
    'Kittu/IMG_20251118_195151523.jpg',
    'Kittu/IMG_20251118_195152753.jpg',
    'Kittu/IMG_20251119_071304758.jpg',
    'Kittu/IMG_20251119_071306502.jpg',
    'Kittu/IMG_20251119_165416877.jpg',
    'Kittu/IMG_20251119_165421108.jpg',
    'Kittu/IMG_20251119_165422604.jpg',
    'Kittu/IMG_20251119_173312638_HDR.jpg',
    'Kittu/IMG_20251119_173316869_HDR.jpg',
    'Kittu/IMG_20251119_173317675_HDR.jpg',
    'Kittu/IMG_20251119_173321438_HDR.jpg',
    'Kittu/IMG_20251119_173322268_HDR.jpg',
    'Kittu/IMG_20251119_175051284_HDR.jpg',
    'Kittu/IMG_20251119_175055811_HDR.jpg',
    'Kittu/IMG_20251119_175056612_HDR.jpg',
    'Kittu/IMG_20251119_175057730_HDR.jpg',
    'Kittu/IMG_20251119_175106154_HDR.jpg',
    'Kittu/IMG_20251119_213727670.jpg',
    'Kittu/IMG_20251119_213807088.jpg',
    'Kittu/IMG_20251119_213812071.jpg',
    'Kittu/IMG_20251119_213815580.jpg',
    'Kittu/IMG_20251119_213824447.jpg',
    'Kittu/IMG_20251119_213836023.jpg',
    'Kittu/IMG_20251119_213841278.jpg',
    'Kittu/IMG_20251119_213844728.jpg',
    'Kittu/IMG_20251120_153042062.jpg',
    'Kittu/IMG_20251120_153044002.jpg',
    'Kittu/IMG_20251120_153044926.jpg'
];

// Initialize slideshows
let headerIndex = 0;
let footerIndex = Math.floor(images.length / 2); // Start footer from middle

// Create slideshow images
function initSlideshow(containerId, startIndex) {
    const container = document.getElementById(containerId);

    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('slideshow-image');
        if (index === startIndex) {
            img.classList.add('active');
        }
        img.alt = 'Our precious memories';
        container.appendChild(img);
    });
}

// Change slide with smooth fade
function changeSlide(containerId, currentIndex) {
    const container = document.getElementById(containerId);
    const slides = container.querySelectorAll('.slideshow-image');

    // Remove active class from current
    slides[currentIndex].classList.remove('active');

    // Calculate next index
    const nextIndex = (currentIndex + 1) % images.length;

    // Add active class to next
    slides[nextIndex].classList.add('active');

    return nextIndex;
}

// Auto-advance slideshows
function startSlideshows() {
    // Header slideshow - change every 4 seconds
    setInterval(() => {
        headerIndex = changeSlide('headerSlideshow', headerIndex);
    }, 4000);

    // Footer slideshow - change every 5 seconds (different timing for variety)
    setInterval(() => {
        footerIndex = changeSlide('footerSlideshow', footerIndex);
    }, 5000);
}

// Background Music Control
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
let isPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicToggle.classList.remove('playing');
    } else {
        bgMusic.play().catch(err => {
            console.log('Autoplay prevented:', err);
        });
        musicToggle.classList.add('playing');
    }
    isPlaying = !isPlaying;
});

// Try to autoplay music (may be blocked by browser)
window.addEventListener('load', () => {
    bgMusic.play().then(() => {
        isPlaying = true;
        musicToggle.classList.add('playing');
    }).catch(err => {
        console.log('Autoplay prevented. User interaction required.');
    });
});

// Floating Hearts Animation
function createHeart() {
    const heartsContainer = document.getElementById('heartsContainer');
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '❤️';

    // Random horizontal position
    heart.style.left = Math.random() * 100 + '%';

    // Random animation delay
    heart.style.animationDelay = Math.random() * 5 + 's';

    // Random size variation
    const size = 15 + Math.random() * 15;
    heart.style.fontSize = size + 'px';

    heartsContainer.appendChild(heart);

    // Remove heart after animation completes
    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// Create hearts periodically
function startHearts() {
    setInterval(createHeart, 800);
}

// Add sparkles to letter paper
function createSparkle() {
    const letterPaper = document.querySelector('.letter-paper');
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');

    // Random position within letter paper
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';

    // Random delay
    sparkle.style.animationDelay = Math.random() * 2 + 's';

    letterPaper.appendChild(sparkle);

    // Remove after animation
    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}

// Create sparkles periodically
function startSparkles() {
    setInterval(createSparkle, 1500);
}

// Scroll-triggered animations for letter content
function observeLetterAnimation() {
    const letterContent = document.querySelector('.letter-content');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Start typing effect when letter comes into view
                startTypingEffect();
                observer.unobserve(entry.target); // Only trigger once
            }
        });
    }, {
        threshold: 0.1
    });

    if (letterContent) {
        observer.observe(letterContent);
    }
}

// Typing effect for letter content
let typingInProgress = false;

function typeText(element, text, speed = 30) {
    return new Promise((resolve) => {
        let index = 0;
        element.textContent = ''; // Clear existing content

        // Create cursor element
        const cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        element.appendChild(cursor);

        function type() {
            if (index < text.length) {
                // Insert character before cursor
                const textNode = document.createTextNode(text.charAt(index));
                element.insertBefore(textNode, cursor);
                index++;
                setTimeout(type, speed);
            } else {
                // Remove cursor when done
                cursor.remove();
                resolve();
            }
        }

        type();
    });
}

async function startTypingEffect() {
    if (typingInProgress) return;
    typingInProgress = true;

    const letterContent = document.getElementById('letterContent');
    const paragraphs = letterContent.querySelectorAll('[data-text]');

    // Type each paragraph sequentially
    for (let i = 0; i < paragraphs.length; i++) {
        const paragraph = paragraphs[i];
        const text = paragraph.getAttribute('data-text');

        // Add a small pause between paragraphs
        if (i > 0) {
            await new Promise(resolve => setTimeout(resolve, 400));
        }

        // Type the paragraph
        await typeText(paragraph, text, 30);
    }

    typingInProgress = false;
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize both slideshows
    initSlideshow('headerSlideshow', headerIndex);
    initSlideshow('footerSlideshow', footerIndex);

    // Start automatic slideshow transitions
    startSlideshows();

    // Start floating hearts
    startHearts();

    // Start sparkles
    startSparkles();

    // Observe letter animations
    observeLetterAnimation();
});

// Add smooth scroll behavior for any internal links
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

// Prevent context menu on images (optional - protects photos)
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
});
