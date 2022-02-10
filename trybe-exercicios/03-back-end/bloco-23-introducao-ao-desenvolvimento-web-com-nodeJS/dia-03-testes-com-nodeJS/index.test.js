const { expect } = require('chai');
const checkNumber = require('./index');

describe('Testes do exercício 1, 2 e 3', () => {
  describe('Testa se a função reconhece', () => {
    it('Se o número passado por parâmetro é positivo', () => {
      const checkedNumber = checkNumber(2);

      expect(checkedNumber).to.be.equals('positivo');
    });

    it('Se o número passado por parâmetro é negativo', () => {
      const checkedNumber = checkNumber(-2);

      expect(checkedNumber).to.be.equals('negativo');
    });

    it('Se o número passado por parâmetro é igual a zero, ou seja, neutro', () => {
      const checkedNumber = checkNumber(0);

      expect(checkedNumber).to.be.equals('neutro');
    });

    it('Quando o valor passado por parâmetro for diferente de um número, retorna uma mensagem de erro', () => {
      const checkedNumber = checkNumber('number');

      expect(checkedNumber).to.be.equals('o valor deve ser um número');
    });
  });
});