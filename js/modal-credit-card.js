const modalCreditCard = document.querySelector('.modal-credit-card');
const openModal = document.querySelector('.btn-icon');

const onModalBackdrop = () => {
  modalCreditCard.classList.add('js-modal');
};

const onOpenModal = () => {
  openModal.classList.toggle('js-open-modal');
  modalCreditCard.classList.add('js-modal');
};

const onCloseModal = event => {
  console.log(event.currentTarget);
};

modalCreditCard.addEventListener('click', onModalBackdrop);
openModal.addEventListener('click', onOpenModal);
burgerBtnClose.addEventListener('click', onCloseModal);
