/* eslint-disable max-len */
/* eslint-disable no-invalid-this */
/* eslint-disable no-undef */
const acc = [...document.getElementsByClassName('dropdown')];
const pictures = ['imgs/img-photography.png', 'imgs/img-creativity.jpg', 'imgs/img-web-design.jpg'];
const pictureMain = document.querySelector('.left-pic');

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    acc.forEach((el) => {
      if (el !== acc[i]) {
        el.nextElementSibling.classList.remove('active');
      }
      acc[i].nextElementSibling.classList.toggle('active');
    });
    pictureMain.src = pictures[i];
  });
}
