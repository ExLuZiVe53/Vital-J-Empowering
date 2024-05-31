const cardHistoryBox = document.querySelector('.card-history__box');
const cardHistoryBtnIcon = document.querySelector('.cards-history__btn-icon');
const interfaceList = document.querySelector('.interface-list');

const onCardHistoryClick = () => {
  cardHistoryBtnIcon.classList.toggle('openClick');
  cardHistoryBox.classList.toggle('open');
};

const onInterfaceListClick = event => {
  // if (event.target.nodeName !== 'BUTTON') {
  //   return;
  // }
  // cardHistoryBtnIcon.classList.toggle('openClick');
  // cardHistoryBox.classList.toggle('open');
  // console.log(event.target);
  // console.log(event.currentTarget);
};

interfaceList.addEventListener('click', onInterfaceListClick);
cardHistoryBox.addEventListener('click', () => {
  console.log('click history box');
});
cardHistoryBtnIcon.addEventListener('click', onCardHistoryClick);
