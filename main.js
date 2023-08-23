document.addEventListener('DOMContentLoaded', function() {
      // Get the current URL, removing any fragment
      var documentUrl = document.location.href.replace(/#.*$/, '')

      // Iterate through all links
      var linkEls = document.getElementsByTagName('A')
      for (var linkIndex = 0; linkIndex < linkEls.length; linkIndex++) {
        var linkEl = linkEls[linkIndex]

        // Ignore links that don't begin with #
        if (!linkEl.getAttribute('href').match(/^#/)) {
          continue;
        }

        // Convert to an absolute URL
        linkEl.setAttribute('href', documentUrl + linkEl.getAttribute('href'))
      }
    })

//slider 

const slider = document.querySelector('.slider');
const sliderImages = slider.querySelectorAll('img');
//const prevButton = document.querySelector('.prev-btn');
//const nextButton = document.querySelector('.next-btn');
let count = 0;

function slideNext() {
  count++;
  if (count >= sliderImages.length) {
    count = 0;
  }
  updateSlider();
}

function slidePrev() {
  count--;
  if (count < 0) {
    count = sliderImages.length - 1;
  }
  updateSlider();
}

function updateSlider() {
  const offset = -count * slider.offsetWidth;
  slider.style.transform = `translateX(${offset}px)`;
}

slider.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});

slider.addEventListener('touchmove', (e) => {
  touchMoveX = e.touches[0].clientX;
});

slider.addEventListener('touchend', () => {
  const diffX = touchMoveX - touchStartX;
  if (diffX > 50) {
    slidePrev();
  } else if (diffX < -50) {
    slideNext();
  }
});

//nextButton.addEventListener('click', slideNext);
//prevButton.addEventListener('click', slidePrev);

// Automatically loop the slider
setInterval(slideNext, 3000); // Change interval time as desired
