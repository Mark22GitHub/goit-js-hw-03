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

// // =======GOIT-JS-HW-03========


// // ========task-7(optional).js=========


// // Напиши скрипт управления личным кабинетом интернет банка.Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {
//     const transaction = { amount: amount, type: type };
//     return transaction;
//   },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {
//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(transaction);

//     return (this.balance += amount);
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     if (this.balance >= amount) {
//       const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//       this.transactions.push(transaction);
//       return this.blance -= amount;
//     }
//     return "Not enough money on your balance";
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {},

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {},

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {},
// };

// console.log(account.createTransaction(500, Transaction.DEPOSIT));

// console.log(account.deposit(4000));

// console.log(account.deposit(3000));

// console.log(account.withdraw(1000));



// ==================================================