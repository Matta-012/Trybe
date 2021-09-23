const math = require('./fixacao');

// 1 - Faça o mock da funcão subtrair e teste sua chamada.
const mockSubtrair = jest.spyOn(math, "subtrair");
describe('Testa a função subtrair()', () => {
  it('Faz o mock e testa sua chamada', () => {
    mockSubtrair(5, 2);

    expect(mockSubtrair).toHaveBeenCalled();
    expect(mockSubtrair).toHaveBeenCalledTimes(1);
    expect(mockSubtrair).toHaveBeenCalledWith(5, 2);
    expect(mockSubtrair(5, 2)).toBe(3);
  })
});

// 2 - Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno.
describe('Testa a função multiplicar()', () => {
  it('Faz o mock de multiplicar() e implementa seu retorno padrão em 10', () => {
    math.multiplicar = jest.fn().mockReturnValue(10);
    math.multiplicar(5, 2);

    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar).toHaveBeenCalledTimes(1);
    expect(math.multiplicar).toHaveBeenCalledWith(5, 2);
    expect(math.multiplicar(5, 2)).toBe(10);
  })
});

// 3 - Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.
describe('Testa a função somar()', () => {
  it('Faz o mock de somar(), soma e retorna seus valores.', async () => {
    math.somar = jest.spyOn(math, "somar").mockImplementation((a, b) => a + b);
    math.somar(5, 2);

    expect(math.somar).toHaveBeenCalled();
    expect(math.somar).toHaveBeenCalledTimes(1);
    expect(math.somar).toHaveBeenCalledWith(5, 2);
    expect(math.somar(5, 2)).toBe(7);
  })
});

// 4 - Faça o mock da função dividir e implemente um retorno padrão com o valor '15'. Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.
describe('Testa a função dividir()', () => {
  it('Faz o mock de dividir() e implementa seu retorno padrão em 15', () => {
    math.dividir = jest.fn().mockReturnValue(15);
    math.dividir(2, 5);

    expect(math.dividir).toHaveBeenCalled();
    math.dividir(2, 5);
    expect(math.dividir).toHaveBeenCalledTimes(2);
    expect(math.dividir).toHaveBeenCalledWith(2, 5);
    expect(math.dividir(2, 5)).toBe(15);
  })
});

// 5 - Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.
describe('Testa a função subtrair() e depois a restaura', () => {
  it('Faz o mock de subtrair(), implementa seu retorno padrão em 20 e depois restaura sua implementação original', () => {
    mockSubtrair.mockReturnValue(20);
    mockSubtrair.mockClear();
    mockSubtrair(5, 2);

    expect(mockSubtrair).toHaveBeenCalled();
    expect(mockSubtrair).toHaveBeenCalledTimes(1);
    expect(mockSubtrair).toHaveBeenCalledWith(5, 2);
    expect(mockSubtrair(5, 2)).toBe(20);

    mockSubtrair.mockRestore();
    mockSubtrair.mockImplementation((a, b) => a - b)
    expect(mockSubtrair(5, 2)).toBe(3);
  })
});