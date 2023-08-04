// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

const validateInput = document.querySelector('#validation-input');
validateInput.addEventListener('input', onSymbolInput);

function onSymbolInput() {
  validateInput.value.length > validateInput.dataset.length
    ? validateInput.classList.add('invalid')
    : validateInput.classList.replace('invalid', 'valid');
}
