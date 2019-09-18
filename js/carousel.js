/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
let topSlides = [...document.getElementsByClassName('top-slide')];
let bottomSlides = [...document.getElementsByClassName('bottom-slide')];
let slideIndex = 1;

function changeTop(i) {
  showSlides(slideIndex += i, topSlides);
}

function changeBottom(i) {
  showSlides(slideIndex += i, bottomSlides);
}

function showSlides(n, slides) {
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  slides[slideIndex - 1].style.display = 'flex';
}

showSlides(slideIndex, topSlides);
showSlides(slideIndex, bottomSlides);
