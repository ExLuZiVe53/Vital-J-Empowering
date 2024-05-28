const cardHistoryBox = document.querySelector('.card-history__box');
// const cardHistoryBtn = document.querySelector('.cards-history');
const cardHistoryBtnIcon = document.querySelector('.cards-history__btn-icon');

const onCardHistoryClick = () => {
  cardHistoryBtnIcon.classList.toggle('openClick');
  cardHistoryBox.classList.toggle('open');
};

const onCardHistoryBox = event => {
  //   if (event.target.nodeName === 'BUTTON') {
  //     cardHistoryBox.classList.add('open');
  //   } else {
  //     cardHistoryBox.classList.remove('open');
  //   }
};

cardHistoryBox.addEventListener('click', onCardHistoryBox);
cardHistoryBtnIcon.addEventListener('click', onCardHistoryClick);
