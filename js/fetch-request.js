/* eslint-disable max-len */
/* eslint-disable no-undef */
const localHost = 'http://localhost:3000/api/blogs';
const container = document.querySelector('.latest-stories');
const images = [...container.querySelectorAll('img')];
const titles = [...container.querySelectorAll('h1')];
const descriptions = [...container.querySelectorAll('p')];
const watches = [...container.querySelectorAll('.watches span')];
const comments = [...container.querySelectorAll('.comments span')];

const footer = document.getElementById('contact');
const footerContainer = footer.querySelector('.section-footer__top__blogs');
const footerImages = footerContainer.querySelectorAll('img');
const footerTitles = footerContainer.querySelectorAll('.text');
const footerDates = footerContainer.querySelectorAll('.date');

const dateOption = {
  day: {
    day: '2-digit',
  },
  month: {
    month: 'short',
  },
  entire: {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  },
};

fetch(localHost)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < images.length; i++) {
        images[i].src = data.blogs[i].previewImg;
        titles[i].innerHTML = data.blogs[i].title;
        descriptions[i].innerHTML = data.blogs[i].description;
        watches[i].innerHTML = data.blogs[i].watched;
        comments[i].innerHTML = data.blogs[i].comments;
      }

      for (let i = 0; i < footerImages.length; i++) {
        const date = new Date(data.blogs[i + 3].published);

        footerImages[i].src = data.blogs[i + 3].previewImg;
        footerTitles[i].innerHTML = data.blogs[i + 3].title;
        footerDates[i].innerHTML = date.toLocaleDateString('en-GB', dateOption.entire);
      }
    });
