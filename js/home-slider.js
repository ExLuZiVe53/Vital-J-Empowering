const arrowLeftBtn = document.querySelector('.card-wrapper__button-arrow.left');
const arrowRightBtn = document.querySelector(
  '.card-wrapper__button-arrow.right'
);
const cardContainer = document.querySelector('.card-container');
console.log(cardContainer);

const onArrowLeftBtn = event => {
  // console.log('click slider button left');
};
const onArrowRightBtn = event => {
  // console.log('click slider button right');
};

arrowLeftBtn.addEventListener('click', onArrowLeftBtn);
arrowRightBtn.addEventListener('click', onArrowRightBtn);
