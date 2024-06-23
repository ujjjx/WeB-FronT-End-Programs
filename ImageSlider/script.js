let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length; // slides.length tells the total number of slides

// Function to display current slide
function showSlide() {
  slides.forEach((slide, index) => { //forEach() method calls a function once for each element in an array, in order.
    if (index === slideIndex) {
      slide.style.display = 'block'; //display the slide
    } else {
      slide.style.display = 'none'; //hide the slide
    }
  });
}

// Function to display next slide
function nextSlide() {
  slideIndex = (slideIndex + 1) % totalSlides;
  showSlide();
}

// Function to display previous slide
function prevSlide() {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  showSlide();
}

// Initial display of first slide
showSlide();
