const clickCategory = document.querySelector('.click-category');
const onBtnArrow = document.querySelector('.btnArrow');

const onClickCategory = event => {
  clickCategory.classList.toggle('openCategory');
  onBtnArrow.classList.toggle('onBtnClick');
};

const onOpenBtnArrow = event => {
  onBtnArrow.classList.toggle('onBtnClick');
  clickCategory.classList.toggle('openCategory');
};

clickCategory.addEventListener('click', onClickCategory);
onBtnArrow.addEventListener('click', onOpenBtnArrow);
