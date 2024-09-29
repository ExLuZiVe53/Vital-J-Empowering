const activeTab = document.querySelector('.buttons-select');

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

const buttonHandler = event => {};
activeTab.addEventListener('click', buttonHandler);

//   <button
//   class="buttons-select__tab"
//   type="radio"
//   data-action="active"
// >
//   Description
// </button>
// <button
//   class="buttons-select__tab"
//   type="radio"
//   data-action="noActive"
// >
//   Compound
// </button>
// <button
//   class="buttons-select__tab"
//   type="radio"
//   data-action="visually"
// >
//   Use
// </button>
