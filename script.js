const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

const images = document.querySelectorAll(".carousel-container img");
const totalImages = images.length;

function showSlide(index) {
  const carouselContainer = document.querySelector(".carousel-container");
  const offset = -index * 100;
  carouselContainer.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalImages;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showSlide(currentIndex);
}

document.addEventListener("DOMContentLoaded", function () {
  showSlide(currentIndex);
});


// Powiększanie zdjęcia
document.querySelectorAll('.grid img').forEach(img => {
  img.addEventListener('click', () => {
    const viewer = document.getElementById('fullscreenViewer');
    const fullscreenImg = document.getElementById('fullscreenImage');
    fullscreenImg.src = img.src;
    viewer.classList.remove('hidden');
  });
});

function closeFullscreen() {
  document.getElementById('fullscreenViewer').classList.add('hidden');
}
