const checkNumber = (number) => {
  if (typeof number !== 'number') return 'o valor deve ser um número';

  if (number === 0) return 'neutro';

  if (number < 0) return 'negativo';

  return 'positivo';
};

module.exports = checkNumber;