/* eslint-disable no-invalid-this */
/* eslint-disable no-undef */
import {modalPopup} from './modules/modal-module.js';

const modalWindow = document.getElementById('myModal');
const modalImg = document.getElementById('img01');


document.querySelector('.pictures').addEventListener('click', function(evt) {
  const currentImg = evt.target.firstElementChild;

  modalImg.src = currentImg.src;
  modalPopup.openModal(modalWindow);

  modalWindow.onclick = function(el) {
    if (!el.target.classList.contains('modal__content')) {
      modalPopup.closeModal(modalWindow);
    }
  };
});
