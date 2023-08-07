// Напиши скрипт створення і очищення колекції елементів.Користувач вводить кількість елементів в input
// і натискає кнопку Створити, після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число.Функція створює стільки < div >,
//   скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('#controls>input');

const buttonCreate = document.querySelector('#controls>button[data-create]');
const buttonDestroy = document.querySelector('#controls>button[data-destroy]');
const boxes = document.querySelector('#boxes');

buttonCreate.addEventListener('click', onButtonCreate);
buttonDestroy.addEventListener('click', onButtonDestroy);

function onButtonCreate() {
  createBoxes(inputEl.value);
}

function createBoxes(num) {
  let newBoxes = [];
  let defaultSize = 30;
  for (let i = 0; i < num; i += 1) {
    defaultSize += 10;
    const box = document.createElement('div');
    box.style.width = `${defaultSize}px`;
    box.style.height = `${defaultSize}px`;
    box.style.background = getRandomHexColor();
    newBoxes.push(box);
  }

  return boxes.append(...newBoxes);
}

function onButtonDestroy() {
  boxes.innerHTML = '';
  inputEl.value = '';
}
