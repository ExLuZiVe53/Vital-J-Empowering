const modalDellOpenBtn = document.querySelector('.icon-basket');
const openModalDell = document.querySelector('.modal-credit-card.del');
const JsCloseNo = document.querySelector('.js-close-no');

const onOpenDell = () => {
  modalDellOpenBtn.classList.add('js-open-modal');
  openModalDell.classList.add('js-open');
};

const onJsCloseNo = event => {
  if (event.code === 'Escape') {
    modalDellOpenBtn.remove('js-open-modal');
    openModalDell.remove('js-open');
  }
};

modalDellOpenBtn.addEventListener('click', onOpenDell);
document.addEventListener('keydown', onJsCloseNo);
