const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let slideIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

function updateIndicator(index) {
  const dots = indicator.querySelectorAll('.dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

slider.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});

slider.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].clientX;
  if (touchStartX - touchEndX > 50) {
    // Swipe left
    nextSlide();
  } else if (touchEndX - touchStartX > 50) {
    // Swipe right
    prevSlide();
  }
});

setInterval(nextSlide, 3000); // Change image every 3 seconds


