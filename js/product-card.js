const activeTab = document.querySelector('.buttons-select');
const buttonSelect = document.querySelector('.buttons-select__tab');
console.log(buttonSelect);

const onActiveTab = () => {
  activeTab.classList.toggle('addClass');
};

const onButtonSelect = () => {
  buttonSelect.classList.add('active');
};

activeTab.addEventListener('click', onActiveTab);
buttonSelect.addEventListener('click', onButtonSelect);
