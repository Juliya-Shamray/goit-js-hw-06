// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
//   підставляє його поточне значення в span#name - output.Якщо інпут порожній,
//   у спані повинен відображатися рядок "Anonymous".

const userName = document.querySelector('#name-input');
const greetUserEl = document.querySelector('#name-output');

userName.addEventListener('input', onInput);

function onInput() {
  userName.value !== ''
    ? (greetUserEl.textContent = userName.value)
    : (greetUserEl.textContent = 'Anonymous');
}
