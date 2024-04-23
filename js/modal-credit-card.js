const modalCreditCard = document.querySelector('.modal-credit-card');
const openModal = document.querySelector('.btn-icon');
const btnClose = document.querySelector('.btn-close');

const onModalBackdrop = () => {
  modalCreditCard.classList.add('js-modal');
};

const onOpenModal = () => {
  openModal.classList.toggle('js-open-modal');
  modalCreditCard.classList.add('js-modal');
};

const onCloseModal = event => {
  console.log('Click for btn-close', event.code);
};

modalCreditCard.addEventListener('click', onModalBackdrop);
openModal.addEventListener('click', onOpenModal);
document.addEventListener('keyup', onCloseModal);
