const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});


let currentIndex = 0;
const images = document.querySelectorAll(".slider-container img");
const totalImages = images.length;

function showSlide(index) {
    const sliderContainer = document.querySelector(".slider-container");
    const offset = -index * 100;
    sliderContainer.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showSlide(currentIndex);
}


setInterval(nextSlide, 5000);


document.querySelectorAll('.grid img').forEach(img => {
    img.addEventListener('click', () => {
        const fullscreenDiv = document.createElement('div');
        fullscreenDiv.className = 'fullscreen';
        fullscreenDiv.innerHTML = `
            <span class="close" id="closeFullscreen">&times;</span>
            <img src="${img.src}" alt="">
        `;
        document.body.appendChild(fullscreenDiv);

        document.getElementById('closeFullscreen').addEventListener('click', () => {
            fullscreenDiv.remove();
        });

        fullscreenDiv.addEventListener('click', (e) => {
            if (e.target === fullscreenDiv) fullscreenDiv.remove();
        });
    });
});

const galleryImages = document.querySelectorAll('.grid img');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

galleryImages.forEach(img => {
    img.classList.add('hidden');
    observer.observe(img);
});

