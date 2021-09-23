const createRandomNumber = require('./exercicio-1');

describe('Testa createRandomNumber', () => {
  it('Implementa novo comportamento para createRandomNumber', () => {
    const randomNumber = jest.spyOn(createRandomNumber, "createRandomNumber").mockImplementation((a, b, c) => a * b * c);

    expect(randomNumber(10, 2, 2)).toBe(40);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);

    randomNumber.mockRestore();
    randomNumber.mockImplementation((a) => a * 2);
    expect(randomNumber(10)).toBe(20);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
  });
});