// const { it } = require('@jest/globals');
const randomNumber = require('./exercicio-1');

describe('Testa createRandomNumber', () => {
  it('Verifica o comportamento da função createRandomNumber', () => {
    randomNumber.createRandomNumber = jest.fn().mockReturnValue(10);
    randomNumber.createRandomNumber();

    expect(randomNumber.createRandomNumber).toHaveBeenCalled();
    expect(randomNumber.createRandomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber.createRandomNumber()).toBe(10);
  });
});