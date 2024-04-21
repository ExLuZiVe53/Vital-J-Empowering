const myForm = document.querySelector('.js-myFormData');
console.log(myForm);

const onInputChange = event => {
  // console.log(event.target.value);
  // console.log(event.target.name);
};

myForm.addEventListener('input', onInputChange);
