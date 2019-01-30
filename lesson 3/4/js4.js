  "use strict";

/*  //Начинал массив с 2ки, так как это первое, простое число.
let number = [ 2 ],
a = 2;
while ( a < 100) {
let numcheck = 1;
for ( let i = 0; i < number.length; i++) {
    if ( a % number[ i ] === 0) {
        numcheck = 0;
    }
}
if ( numcheck === 1 ) {
  number.push( a );
}
  a++;
}
console.log ( number ); */

let i = 0;
while (i <100) {
  if (isPrimeNumber(i)) {
    console.log(i);
  }
  i++;
}

/**
 * Функия проверяет является ли число простым.
 * @param {int} number Число, которое проверяем.
 * @returns {boolean} Вернет true, если сичло простое, иначе false.
 */
function isPrimeNumber(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    return false;
    }
  }
  return true;
}

