/* eslint-disable no-undef */
let navBanner = document.getElementById('nav-banner');

window.onscroll = function() {
  if (window.scrollY > 200) {
    navBanner.classList.add('scroll');
  } else {
    navBanner.classList.remove('scroll');
  }
};

