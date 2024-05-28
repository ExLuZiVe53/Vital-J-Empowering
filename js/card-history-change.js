const cardHistoryBox = document.querySelector('.card-history__box');
const cardHistoryBtn = document.querySelector('.cards-history');
const cardHistoryBtnIcon = document.querySelector('.cards-history__btn-icon');

const onCardHistoryClick = () => {
  //   cardHistoryBox.classList.toggle('open');
};

const onCardHistoryBtn = event => {
  if (event.target.nodeName === 'BUTTON') {
    cardHistoryBox.style.display = 'block';
  } else if (event.target.nodeName === 'BUTTON') {
    cardHistoryBox.style.display = 'none';
  }
};

cardHistoryBox.addEventListener('click', onCardHistoryClick);
cardHistoryBtn.addEventListener('click', onCardHistoryBtn);
