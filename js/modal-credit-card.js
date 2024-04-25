const modalCreditCard = document.querySelector('.modal-credit-card');
const openModal = document.querySelector('.btn-icon');
const btnCross = document.querySelector('.btn-cross');

const onModalBackdrop = () => {
  modalCreditCard.classList.add('js-modal');
};

const onOpenModal = () => {
  openModal.classList.add('js-open-modal');
  modalCreditCard.classList.add('js-modal');
};

const onCloseModal = () => {
  console.log('click cross');
  modalCreditCard.classList.remove('js-modal');
};

modalCreditCard.addEventListener('click', onModalBackdrop);
openModal.addEventListener('click', onOpenModal);
btnCross.addEventListener('click', onCloseModal);
