// 1.Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const listEl = document.querySelector('#categories');
console.log(`Number of categories: ${listEl.children.length}`);

//2.Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст//
//  заголовку елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >, вкладених в нього).//

[...listEl.children].forEach(item =>
  console.log(
    `Category: ${item.firstElementChild.textContent}\nElements: ${item.lastElementChild.children.length}`
  )
);
