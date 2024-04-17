const modalCreditCard = document.querySelector('.modal-credit-card');
const openModal = document.querySelector('.btn-icon');

const onModalBackdrop = () => {
  modalCreditCard.classList.toggle('js-modal');
};

const onOpenModal = () => {
  openModal.classList.toggle('js-open-modal');
  modalCreditCard.classList.toggle('js-modal');
};

modalCreditCard.addEventListener('click', onModalBackdrop);
openModal.addEventListener('click', onOpenModal);
