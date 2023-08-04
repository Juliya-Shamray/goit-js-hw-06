// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input)
// і змінює інлайн - стиль span#text, оновлюючи властивість font - size.В результаті,
//   перетягуючи повзунок, буде змінюватися розмір тексту.

const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
fontSizeControl.addEventListener('input', onInputControl);

function onInputControl() {
  console.log(fontSizeControl.value);
  console.dir((text.style.fontSize = `${fontSizeControl.value}px`));
}
