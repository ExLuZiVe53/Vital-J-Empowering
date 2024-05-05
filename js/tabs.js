const activeBtn = document.querySelector('.btnArrow');
const hideList = document.querySelector('.interface-list__one-item');

const onActiveClick = event => {
  activeBtn.classList.toggle('btnRotate');
  hideList.classList.toggle('hidden');
};

const onHiddenList = () => {
  console.log('click hideList');
};

activeBtn.addEventListener('click', onActiveClick);
hideList.addEventListener('click', onHiddenList);
