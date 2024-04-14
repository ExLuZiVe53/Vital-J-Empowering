const activeBtn = document.querySelector('.btnArrow');

const onActiveClick = event => {
  activeBtn.classList.toggle('btnRotate');
};

activeBtn.addEventListener('click', onActiveClick);
