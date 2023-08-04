// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const buttonDecrement = document.querySelector(
  "button[data-action='decrement']"
);
const buttonIncrement = document.querySelector(
  "button[data-action='increment']"
);
let result = document.querySelector('#value');
buttonDecrement.addEventListener('click', onDecrement);
buttonIncrement.addEventListener('click', onIncrement);

let counterValue = 0;

function onDecrement() {
  counterValue -= 1;
  result.textContent = counterValue;
}

function onIncrement() {
  counterValue += 1;
  result.textContent = counterValue;
}
