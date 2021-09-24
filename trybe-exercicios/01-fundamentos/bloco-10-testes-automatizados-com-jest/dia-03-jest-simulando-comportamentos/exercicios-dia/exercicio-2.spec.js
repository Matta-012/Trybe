const randomNumber = require('./exercicio-1');

describe('Testa createRandomNumber', () => {
  it('Implementa novo comportamento para createRandomNumber', () => {
    randomNumber.createRandomNumber = jest.spyOn(randomNumber, "createRandomNumber").mockImplementationOnce((a, b) => a / b);

    expect(randomNumber.createRandomNumber(10, 2)).toBe(5);
    expect(randomNumber.createRandomNumber).toHaveBeenCalled();
    expect(randomNumber.createRandomNumber).toHaveBeenCalledTimes(1);
  });
});