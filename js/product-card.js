const activeTab = document.querySelector('.buttons-select');
const activeButton = document.querySelectorAll('.button-select__tab');

const dataActions = ['Description', 'Compound', 'Use'];
const markup = dataActions
  .map((actionName, index) => {
    return `<button
            class="buttons-select__tab" type="radio" data-action=${index}>
            ${actionName}
            </button>`;
  })
  .join('');
activeTab.innerHTML = markup;
// createButton();

// function createButton() {
//   const items = [];
//   for (let i = 0; i < dataActions.length; i += 1) {
//     const item = document.createElement('button');
//     item.type = 'radio';
//     item.classList.add('button-select__tab');
//     item.style.width = '100px';
//     item.style.height = '50px';
//     item.style.margin = '10px';
//     items.push(item);
//   }
//   activeTab.append(...items);
// }

const buttonHandler = event => {
  switch (event.target.dataset.action) {
    case '0':
      console.log('Zero');
      break;

    case '1':
      console.log('One');
      break;

    case '2':
      console.log('Two');
      break;

    default:
      return null;
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
