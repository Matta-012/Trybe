const { expect } = require('chai');
const fs = require('fs');
const sinon = require('sinon');
const { checkNumber, writeFile } = require('./index');

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

describe('Testes do exercício 4 e 5', () => {
  describe('Testa se a função "writeFile"', () => {
    beforeEach(() => {
      sinon.stub(fs, 'writeFile').returns('ok');
    });

    afterEach(() => {
      fs.writeFile.restore();
    });

    it('retorna um "ok" quando recebe como parâmetro o nome do arquivo e o conteúdo a ser escrito', async () => {
      const file = './text.txt';
      const content = 'Hello World!';
      const returnedMessage = await writeFile(file, content);
      

      expect(returnedMessage).to.be.a('string');
      expect(returnedMessage).to.be.equals('ok');
    });
  });
});