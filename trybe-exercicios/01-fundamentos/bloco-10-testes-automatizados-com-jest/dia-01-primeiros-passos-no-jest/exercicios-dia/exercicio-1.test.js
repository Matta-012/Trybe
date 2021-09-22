function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

describe('Função sum()', () => {
  it('Verifica se sum() é uma função', () => {
    expect('function').toBe(typeof sum);
  })

  it('Verifica se sum(4, 9) = 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('Verifica se sum(0, 0) = 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it("Verifica se sum(4, '5') lança um erro", () => {
    expect(() => { sum(4, '5') }).toThrow();
  });

  it("Verifica se sum(4, '5') lança um erro com a mensagem 'parameters must be numbers'", () => {
    expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
  });
});