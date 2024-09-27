const activeTab = document.querySelector('.buttons-select');
console.log(activeTab);
const dataActions = ['Description', 'Compound', 'Use'];
const markup = dataActions
  .map((actionName, index) => markupButtons(actionName, index))
  .join('');
activeTab.insertAdjacentHTML('beforeend', markup);

function markupButtons(actionName, index) {
  console.log(actionName);
  return `<button
  class="buttons-select__tab"
  type="radio"
  data-action=${index}>${actionName}</button>`;
}

const buttonHandler = event => {
  console.log(event.currentTarget);
};
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
