const activeBtn = document.querySelector('.btnArrow');
const formSub = document.querySelector('.formSubmit');

const onActiveClick = event => {
  activeBtn.classList.toggle('btnRotate');

  //   rotateArrow.classList.toggle('.rotate');
};

const onFormChange = event => {
  console.dir(event.target.checked);
  console.log(event.target.value);
};

activeBtn.addEventListener('click', onActiveClick);
formSub.addEventListener('change', onFormChange);
