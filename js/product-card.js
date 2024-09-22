const buttonsSelect = document.querySelector('.buttons-select');

const onButtonSelect = () => {
  console.log('Click on handler');
};

buttonsSelect.addEventListener('click', onButtonSelect);

function createMarkupButtons() {
  let buttons = [];

  for (let i = 0; i < 3; i += 1) {
    const buttonItem = document.createElement('button');
    buttonItem.type = 'radio';
    buttonItem.classList.add('buttons-select__tab');
    buttonItem.dataset.action = 0;
    buttons.push(buttonItem);
  }
  buttonsSelect.append(...buttonItem);
}
console.log(createMarkupButtons());

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
