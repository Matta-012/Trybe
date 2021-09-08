const assert = require('assert');

// 1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const reduceArray = ((acc, value) => {
  const array = acc;
  
  value.forEach(element => array.push(element));

  return array;
});

function flatten() {
  // escreva seu código aqui
  const newArray = arrays.reduce(reduceArray, []);

  return newArray;
}
console.table(flatten());
assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);