const activeTab = document.querySelector('.buttons-select');

const dataActions = ['Description', 'Compound', 'Use'];
const markup = dataActions
  .map(
    (actionName, index) => `
  <button
  class="buttons-select__tab"
  type="radio"
  data-action=${index}
              >${actionName}
              </button>`
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
  )
  .join('');
const buttonSelect = document.querySelector('.buttons-select__tab');
console.log(buttonSelect);

activeTab.insertAdjacentHTML('beforeend', markup);

const onActiveTab = () => {
  activeTab.classList.toggle('addClass');
};

const onButtonSelect = () => {
  buttonSelect.classList.add('active');
};

activeTab.addEventListener('click', onActiveTab);
buttonSelect.addEventListener('click', onButtonSelect);
