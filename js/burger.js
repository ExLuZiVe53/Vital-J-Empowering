const burgerBtn = document.querySelector('.burger-btn');
const burgerMenu = document.querySelector('.menu-container');
const burgerBtnClose = document.querySelector('.btn-close');

const onClick = () => {
  burgerBtn.classList.toggle('js-open-btn');
  burgerMenu.classList.toggle('js-open-menu');
};
const onMenuCloseClick = () => {
  burgerMenu.classList.remove('js-open-menu');
};
burgerBtn.addEventListener('click', onClick);
burgerBtnClose.addEventListener('click', onMenuCloseClick);
