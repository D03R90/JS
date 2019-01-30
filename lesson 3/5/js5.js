  "use strict";

const arr = [
  [2, 4, 6],
  [1, 5, 10],
  [7, 4, 1],
];

let maxSumOfArrayIndex = 0;
let maxSumOfArray = getSumOfElements(arr[maxSumOfArrayIndex]);
//массив, у которого сумма всех чисел максимальна
for (let i = 1; i < arr.length; i++) {
  const sumOfElements = getSumOfElements(arr[i]);
  if (sumOfElements> maxSumOfArray) {
    maxSumOfArray = sumOfElements;
    maxSumOfArrayIndex = i;
  }
}

console.log(`Индекс массива, сумма элементов которого максимальна = ${maxSumOfArrayIndex}`)
//минимальное значение найденное в массиве, который мы получили в первом пункте.
const innerArr = arr[maxSumOfArrayIndex];

let minNumber = innerArr[0];

for (let i = 1; i < innerArr.length; i++) {
  if (innerArr[i] < minNumber) {
    minNumber = innerArr[i];
  }
}

console.log(`Минимальный элемент в найденном массиве = ${minNumber}`)

/**
 * Функция возвращает сумму элементов массива.
 * @param {number[]} arr Массив, сумма элементов которого вернет функция.
 * @returns {number} Сумма элементов в массиве.
 */
function getSumOfElements(arr) {
  let sum = 0;

  for (const val of arr) {
    sum = sum + val; // sum += val; - сокращёная версия
  }

  return sum;
}