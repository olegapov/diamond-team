//TODO: 1 ===================================
// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

// const num = 10;

// num === 10 ? console.log("Вірно"):console.log("Невірно");

// if (num === 10) {
// 	console.log("Вірно");
// } else {
// 	console.log("Невірно");
// }

//TODO: 2 ===================================
// У змінній min лежить число від 0 до 59. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту).

// const num = 60;

// if (num >= 0 && num < 15) {
// 	console.log("Перша чверть");
// } else if (num >= 15 && num < 30) {
// 	console.log("Друга чверть");
// }
//  else if (num >= 30 && num < 45) {
// 	console.log("Третя чверть");
// }
//  else if (num >= 45 && num <= 59) {
// 	console.log("Четверта чверть");
// } else {
// 	console.log("Помилка");
// }

//TODO: 3 ===================================
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = 5;

// let result = null;

// switch (num) {
//   case 1:
//     result = "Зима";

//     break;

//   case 2:
//     result = "Весна";

//     break;

//   case 3:
//     result = "Літо";

//     break;

//   case 4:
//     result = "Осінь";

//     break;

//   default:
//   result = "Помилка";
//     break;
// }
//  console.log(result)

//TODO: 4 ===================================
// скористаємося циклом while та виведіть у консоль числа від 0 до 50

// let i = 0;

// while (i < 50) {

//     console.log (i)

//     i += 1;
// }

//TODO: 5 ===================================
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

// const min = 5;

// const max = 50;

// let total = 0;

// for (let index = max ; index >= min ; index -= 1) {

//     console.log(index);

//   if (index % 2 !== 0) {
//     continue
//   }
//   console.log("Парні:",index);
//     total+=index;
// }
// console.log("Сума усіх парних:", total);

//TODO: 6 ===================================
// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо відвідувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл має питати число, поки відвідувач не
// введе число більше 100, або натисне кнопку
// скасування в prompt

// const input = prompt("Ведіть число більше 100")

// let number  ;

// do {
//     number = Number.parseFloat(prompt("Ведіть число більше 100"));
// } while (number < 100);

// alert(number);

// TODO: 7 ===================================
// Написати ф-цію, яка створює масив із зазначеною довжиною та наповнює його переданим значенням
// приклад: ф-ція fillArray(3, 'a') повинна повертати масив ['a', 'a', 'a']

// function fillArray(count, symbol) {
//     let array = [];
//     for (let i = 0; i < count; i+=1) {
//         array.push(symbol);
//     }
//     return array;
// }

// console.log(fillArray(10, 'a'));

//TODO: 8 ===================================
// Написати ф-цію, яка прибиратиме з масиву всі значення, які перетворюються на false
// undefined, null, false, '', 0, NaN

// const array = [
//   1,
//   0,
//   54,
//   "doc",
//   null,
//   "jpg",
//   undefined,
//   "",
//   "png",
//   "exe",
//   false,
//   "mp4",
//   NaN,
//   "hbs",
// ];

// function clearArray(array) {
//     let newArray = [];
//     for (const item of array) {
//         if (item) {
//             newArray.push(item);
//         }
//     }
//     return newArray;
// }

// console.log(clearArray(array));