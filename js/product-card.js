const buttonsSelect = document.querySelector('.buttons-select');

const onButtonSelect = () => {
  console.log('Click on handler');
};

buttonsSelect.addEventListener('click', onButtonSelect);

createMarkupButtons();
function createMarkupButtons() {
  const buttons = [];
  for (let i = 0; i < 3; i += 1) {
    const buttonItem = document.createElement('button');
    buttonItem.type = 'radio';
    buttonItem.classList.add('buttons-select__tab');
    buttonItem.dataset.action;
    buttons.push(buttonItem);
    console.log(buttonItem);
  }
  buttonsSelect.append(...buttonItem);
}

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
