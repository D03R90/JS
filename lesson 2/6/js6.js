  "use strict";

const amount = parseInt(prompt('Введите сумму.'));
const correctWord = declianationOfNumber(amount, 'рубль', 'рубля', 'рублей');
console.log(`Ваша сумма в ${amount} ${correctWord} успешно зачислена`);

function declianationOfNumber(count, one, two, five) {
  const n = Math.abs(count) % 100; // Функция вернёт положительное число (Math.abs)
  const n10 = n % 10;
  // 111   n = 11, n10 = 1 - пример распределени значений

  if (n >= 5 && n <= 20) {
    return five;
  } else if (n10 > 1 && n10< 5) {
    return two;
  } else if (n10 === 1) {
    return one;
  } else {
    return five;
  }
}