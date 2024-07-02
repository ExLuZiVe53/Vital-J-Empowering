const arrowLeftBtn = document.querySelector('.card-wrapper__button-arrow.left');
const arrowRightBtn = document.querySelector(
  '.card-wrapper__button-arrow.right'
);

const onArrowLeftBtn = event => {
  console.log('click left');
};
const onArrowRightBtn = event => {
  console.log('click right');
};

arrowLeftBtn.addEventListener('click', onArrowLeftBtn);
arrowRightBtn.addEventListener('click', onArrowRightBtn);
