// const testObj = {};

// testObj.test = "test";
// delete testObj.test;

// console.log(testObj);

// const obj = {
//   defaultValue: 0,
//   add: function () {
//     obj.defaultValue += 1;
//   },
// };

// obj.add();
// console.log(obj);

// ==========================================
// ===add , minus , divide , multiply===

// const obj = {
//   defaultValue: 0,

//   add: function (n) {
//     obj.defaultValue += n;
//   },

//   minus: function (n) {
//     obj.defaultValue -= n;
//   },

//   divide: function (n) {
//     obj.defaultValue /= n;
//   },

//   multiply: function (n) {
//     obj.defaultValue *= n;
//   },

//   result: function () {
//     console.log(obj.defaultValue);
//   },
// };

// obj.add(100);

// obj.minus(20);

// obj.divide(2);

// obj.multiply(2);

// console.log(obj);
// obj.result();

// ==========================================

// ==========================================

// ========For ...in=======

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// let total = 0;

// for (let key in obj) {
//   console.log(`${key} is equal to ${obj[key]} `);

//   total += obj[key];
// }

// console.log(total);

// ==========================================

// console.log(Object.keys(obj));
// console.log(Object.value(obj));
// console.log(Object.entries(obj)[1] [1]);

// / ==========================================

// let obj1 = {
//   a: 1,
//   b: 2,
// };

// let obj2 = {
//   b: 5,
//   c: 7,
// };

// let obj3 = { ...obj1, ...obj2 };

// console.log(obj3);

//  ==========================================

// ==================================================

// ==========Module-3 task-3(2)========

// =====II-Option=====

// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного(который выполнил больше всех задач).Сотрудники и кол - во выполненых задач содержатся как свойства объекта в формате "имя": "кол-во задач".

// const findBestEmployee = function (employees) {
//   const theBestEmployee = Object.entries(employees);

//   let theBestName = theBestEmployee[0][0];
//   let theBestScore = theBestEmployee[0][1];
//   //   console.log(theBestName, theBestScore);

//   for (let i = 0; i < theBestEmployee.length; i += 1) {
//     // console.log(theBestEmployee[i]);

//     const innerBestEmployee = theBestEmployee[i];

//     let name = innerBestEmployee[0];
//     let score = innerBestEmployee[1];

//     if (theBestScore < score) {
//       theBestScore = score;
//       theBestName = name;

//       // console.log(theBestName, theBestScore);
//     }
//   }

//   return theBestName;
// };

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux

// ==================================================

// ==================================================

// const getMeEven = function (...args) {
//   for (let i = 0; i <= args.length; i += 1) {
//     if (args[i] % 2 === 0) {
//       console.log(args[i]);
//     }
//   }
// };

// getMeEven(1, 2, 3, 4, 5, 6, 7, 8);

// ==================================================

// / ____________________________________;

// Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно
// больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

// const isNumberInRange = function (n) {
//   return n > 0 && n < 10;
// };

// console.log(isNumberInRange(5));
// console.log(isNumberInRange(20));
// ____________________________________;
// Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
// Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск.
// Функция должна возвращать true или false
// var str = "яблоbко";
// var arr = ["банан", "яблоко", "персик"];

// var str = "яблоbко";
// var arr = ["банан", "яблоко", "персик"];

// const inArray = function (str, arr) {
//   //   if (arr.includes(str)) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //     }
//   return arr.includes(str);
// };

// console.log(inArray(str, arr));

// _____________________________________________;
// Есть массив уникальных чисел uniqueNumbers.
// Написать функцию, addUniqueNumbers(...),
// которая получает произвольное кол-во чисел как аргументы,
// и добавляет в массив uniqueNumbers только уникальные,
// а те которые в массиве уже есть игнорирует.
