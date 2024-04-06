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

// // Modal scroll
// document.body.style.position = 'fixed';
// document.body.style.top = `-${window.scrollY}px`;

// document.body.style.position = '';
// document.body.style.top = '';

// const scrollY = document.body.style.top;
// document.body.style.position = '';
// document.body.style.top = '';
// window.scrollTo(0, parseInt(scroll || '0') * -1);

// window.addEventListener('scroll', () => {
//   document.documentElement.style.setProperty(
//     '--scroll-y',
//     `${window.scrollY}px`
//   );
// });
