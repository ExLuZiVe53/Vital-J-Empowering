const activeTab = document.querySelector('.buttons-select');
const activeButton = document.querySelectorAll('.buttons-select__tab');

const dataActions = ['Description', 'Compound', 'Use'];
const markup = dataActions
  .map((actionName, index) => markupButtons(actionName, index))
  .join('');
activeTab.insertAdjacentHTML('beforeend', markup);

function markupButtons(actionName, index) {
  return `<button
  class="buttons-select__tab"
  type="radio"
  data-action=${index}>${actionName}</button>`;
}

const buttonHandler = event => {
  console.log(event.target);
  console.log(event.currentTarget);
  if (event.currentTarget !== event.target) {
    switch (event.target.dataset.action) {
      case '0':
        console.log('Zero');
        break;
      case '1':
        console.log('First');
        break;
      case '2':
        console.log('Two');
        break;

      default:
        return null;
    }
  }
};
activeTab.addEventListener('click', buttonHandler);

{
  /* <button
    class="buttons-select__tab"
    type="radio"
    data-action="active"
  >
  Description
  </button>
  <button
    class="buttons-select__tab"
    type="radio"
    data-action="noActive"
  >
    Compound
  </button>
  <button
    class="buttons-select__tab"
    type="radio"
    data-action="visually"
  >
    Use
  </button> */
}
