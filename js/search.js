const searchBtn = document.querySelector('.navigation-search-link');
const searchContainer = document.querySelector('.modal-search-wrapper');
const inputSearch = document.querySelector('.modal-search');

const onOpenBtn = () => {
  searchBtn.classList.add('is-open');
  searchContainer.classList.add('no-hidden');
};
const onHideSearch = event => {
  if (event.code === 'Escape') {
    event.preventDefault();
    searchContainer.classList.remove('no-hidden');
  }
};
const onBackdropClick = event => {
  if (event.currentTarget === event.target) {
    searchContainer.classList.remove('no-hidden');
  }
};
const onInput = event => {
  console.log(event.target.value);
};

searchBtn.addEventListener('click', onOpenBtn);
searchContainer.addEventListener('keyup', onHideSearch);
searchContainer.addEventListener('click', onBackdropClick);
inputSearch.addEventListener('input', onInput);
