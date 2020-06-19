const validationInputRef = document.querySelector('#validation-input');
validationInputRef.addEventListener('change', event => {
  console.log(event.target.value.length);

  validationInputRef.classList.add('invalid');

  if (event.target.value.length === 6) {
    validationInputRef.classList.remove('invalid');
    validationInputRef.classList.add('valid');
  }
});
