const assert = require('assert');

// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  const total = names.reduce((sum, string) => sum + string.toLowerCase().split('a').length - 1, 0 );

  return total;
}

assert.deepStrictEqual(containsA(), 20);