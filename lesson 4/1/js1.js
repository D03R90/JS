  "use strict";

let a = +prompt("Введите число от 1 до 999");
  function getDigitsObjFromNum(num) {
  //Сортировка, чтобы число было целым и < 0, > 999
  if (!Number.isInteger(num) || num < 0 || num > 999) {
    alert('Ошибка. Необходимо указывать только числа от 0 до 999');
    return {}; //obj
  }
  const obj = {};
  //Перебирает число
  obj['едининцы'] = num % 10; //firstDigit
  obj['десятки'] = Math.floor(num / 10) % 10; // secondDigit
  obj['сотни'] = Math.floor(num / 100); //thirdDigit

  return obj;
}

console.log(getDigitsObjFromNum(a));