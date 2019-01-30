  "use strict";

  /**
  * Функция складывает два переданных числа.
  * @param {number} a - первое число, которое будет складываться в функции.
  * @param {number} b - второе число, которое будет складываться в функции.
  * @returns {number} - вернёт число, получившееся в результате двух чисел.
  */
 function add(a, b) {
  return a + b;
}

/**
* Функция вычитает два переданных числа.
* @param {number} a - первое число, которое будет уменьшаемым в функции.
* @param {number} b - второе число, которое будет вычитаемое в функции.
* @returns {number} - вернёт число, получившееся в результате вычитания двух чисел.
*/  
function reduce(a, b) {
  return a - b;
}

/**
* Функция делит два переданных числа.
* @param {number} a - первое число, которое будет делимым в функции.
* @param {number} b - второе число, которое будет делителем в функции.
* @returns {number} - вернёт число, получившееся в результате деления двух чисел.
*/  
function divide(a, b) {
  return a / b;
}

/**
* Функция перемножает два переданных числа.
* @param {number} a - первое число, которое будет множителем в функции.
* @param {number} b - второе число, которое будет множителем в функции.
* @returns {number} - вернёт число, получившееся в результате перемножения двух чисел.
*/  
function multiply(a, b) {
  return a * b;
}

  /**
   * Функция проводит одну из арифмитических операций.
   * @param {number} arg1 - Первый параметр.
   * @param {number} arg1 - Второй параметр.
   * @param {string} operation - Тип операции
   * @returns {number} - Значение, которое вернёт функция выбранной операции.
   */
  function mathOperation(arg1, arg2, operation) {
  	switch (operation) {
  		case 'add':
  			return add(arg1, arg2);
  		case 'reduce':
  			return reduce(arg1, arg2);
  		case 'divide':
  			return divide(arg1, arg2);
  		case 'multiply':
  			return multiply(arg1, arg2);
  	}
  }

  console.log(mathOperation(6, 2, 'add')); // Выведется число 8
  console.log(mathOperation(6, 2, 'reduce')); // Выведется число 4
  console.log(mathOperation(6, 2, 'divide')); // Выведется число 3
  console.log(mathOperation(6, 2, 'multiply')); // Выведется число 12
