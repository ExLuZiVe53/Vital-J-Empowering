const activeBtn = document.querySelector('.btn-arrow');
const rotateArrow = document.querySelector('.no-rotate');

const onActiveClick = event => {
  activeBtn.classList.toggle('.active');
  rotateArrow.classList.toggle('.rotate');
};

activeBtn.addEventListener('click', onActiveClick);
