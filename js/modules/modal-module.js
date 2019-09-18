const modalPopup = (function() {
  return {
    openModal: (modal) => {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    },
    closeModal: (modal) => {
      modal.style.display = 'none';
      document.body.style.overflow = 'visible';
    },
  };
}());

export {modalPopup};
