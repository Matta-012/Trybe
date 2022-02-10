const fs = require('fs').promises;

const checkNumber = (number) => {
  if (typeof number !== 'number') return 'o valor deve ser um número';

  if (number === 0) return 'neutro';

  if (number < 0) return 'negativo';

  return 'positivo';
};

const writeFile = async (filename, content) => {
  try {
    await fs.writeFile(filename, content);
    return 'ok';
  } catch (error) {
    return 'erro ao escrever o arquivo'
  }
};

module.exports = { checkNumber, writeFile };