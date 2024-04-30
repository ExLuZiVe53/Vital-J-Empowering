const modalDellOpenBtn = document.querySelector('.icon-basket-card');
const openModalDell = document.querySelector('.modal-credit-card.del');
// const clickBtnNo = document.querySelector('.js-close-no');
const clickBackdrop = document.querySelector('.modal-backdrop.open');

const onOpenDell = () => {
  modalDellOpenBtn.classList.add('js-open-modal');
  openModalDell.classList.add('js-open');
};

const onJsCloseEsc = event => {
  if (event.code === 'Escape') {
    modalDellOpenBtn.remove('js-open-modal');
    openModalDell.remove('js-open');
  }
};

const onClickBackdrop = event => {
  if (event.target.nodeName === 'BUTTON') {
    modalDellOpenBtn.remove('js-open-modal');
    openModalDell.remove('js-open');
  }
  console.log(event.target);
};

modalDellOpenBtn.addEventListener('click', onOpenDell);
document.addEventListener('keydown', onJsCloseEsc);
clickBackdrop.addEventListener('click', onClickBackdrop);
