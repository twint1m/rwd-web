// Задание 1. Приготовление сэндвичей
const countSandwiches = function (bread, cheese) {
  let counter = 0;
  while (bread > 0 && cheese > 0) {
    bread--;
    bread--;
    cheese--;
    counter++;
  }
  console.log(`Вы можете приготовить ${counter} сэндвичей`);
};

countSandwiches(10, 5);

// Задание 2. Таблица умножения
function generateMultiplicationTable(number) {
  // Создаем и выводим каждую строку таблицы умножения
  for (let index = 1; index <= number; index++) {
    let row = "";
    for (let nestedIndex = 1; nestedIndex <= number; nestedIndex++) {
      row += `${index * nestedIndex}\t`;
    }
    console.log(row);
  }
}

generateMultiplicationTable(10);

// Задание 3. Цитата в рамочке
const showQuote = function (word1, word2, word3, word4) {
  const max = Math.max(word1.length, word2.length, word3.length, word4.length);
  let stars = "*".repeat(max + 4);
  console.log(stars);
  console.log(`* ${word1}${" ".repeat(max - word1.length)} *`);
  console.log(`* ${word2}${" ".repeat(max - word2.length)} *`);
  console.log(`* ${word3}${" ".repeat(max - word3.length)} *`);
  console.log(`* ${word4}${" ".repeat(max - word4.length)} *`);
  console.log(stars);
};

showQuote("Hello", "World", "In", "JS");

// Задание 4. Объединение массивов
const mergeArrays = function (arr1, arr2) {
  let merged = [];
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    if (i < arr1.length) merged.push(arr1[i]);
    if (i < arr2.length) merged.push(arr2[i]);
  }
  console.log(merged);
};

mergeArrays([1, 3, 5], [2, 4, 6, 7, 8, 9, 10]);

// Задание 5. Счетчик уникальных значений массива
const countUniqueValues = function (arr) {
  let obj = {};
  for (let el of arr) {
    if (obj[el]) {
      obj[el]++;
    } else {
      obj[el] = 1;
    }
  }
  console.table(obj);
};

countUniqueValues([1, 2, 1, 2, 3, 4, 2, 5]);

// Задание 6. Бургер-меню
let burger = document.querySelector(".burger");
let burgerList = document.querySelector(".list");

burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  burgerList.classList.toggle("list-active");
});

// Задание 7. Toast


document.addEventListener("DOMContentLoaded", function () {
  const name = document.querySelector(".name");
  const message = document.querySelector(".message");
  const toast = document.querySelector(".toast");
  const cross = document.querySelector(".toast__link");

  // таймаут на появление тостера
    const slideRight = function () {
      toast.style.display = "flex"
      toast.classList.toggle('slide-right');
    };
    setTimeout(slideRight, 2000);

  // объявляем объект
  const information = {
    name: "Some name",
    message: "Some string",
  };

  // присваиваем свойства объекта html элементу
  message.textContent = information.message;
  name.textContent = information.name;

  // анимация закрытия
  const slideLeft = function () {
    toast.classList.add("slide-left");
    setTimeout(function() {
      toast.classList.remove("slide-left");
    }, 1000);
  };

  // функция для скрытия toast
  const toastDisplayNone = function () {
    toast.style.display = "none"
  };

  // слушатель события на анимацию закрытия
  cross.addEventListener("click", function () {
    slideLeft();
    setTimeout(toastDisplayNone, 1000);
  });

}); 

