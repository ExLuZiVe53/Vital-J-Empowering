const modalCreditCard = document.querySelector('.modal-credit-card');
const openModal = document.querySelector('.btn-icon');
const btnCross = document.querySelector('.btn-cross');

const onOpenModal = () => {
  openModal.classList.add('js-open-modal');
  modalCreditCard.classList.add('js-modal');
};

const onCloseModal = () => {
  modalCreditCard.classList.remove('js-modal');
  openModal.classList.remove('js-open-modal');
};

const onClickEsc = event => {
  if (event.code === 'Escape') {
    modalCreditCard.classList.remove('js-modal');
    openModal.classList.remove('js-open-modal');
  }
};

openModal.addEventListener('click', onOpenModal);
btnCross.addEventListener('click', onCloseModal);
document.addEventListener('keydown', onClickEsc);
