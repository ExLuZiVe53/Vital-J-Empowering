const activeBtn = document.querySelector('.btnArrow');

const onActiveClick = event => {
  activeBtn.classList.toggle('btnRotate');

  //   rotateArrow.classList.toggle('.rotate');
};

activeBtn.addEventListener('click', onActiveClick);
