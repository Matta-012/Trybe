
const funcs = require('./exercicio-4.js');
jest.mock('./exercicio-4.js');

describe('Reimplementa função toUpper()', () => {
  it('Retorna uma string em lower case', () => {
    const toLower = funcs.toUpper.mockImplementation((string) => string.toLowerCase());
    expect(toLower('XABLAU')).toBe('xablau');
  });
});

describe('Reimplementa função firstChar()', () => {
  it('Retorna a última letra da string', () => {
    const lastChar = funcs.firstChar.mockImplementation((string) => string.slice(-1));
    expect(lastChar('XABLAU')).toBe('U');
  });
});

describe('Reimplementa função stringConcat()', () => {
  it('Concatena 3 strings', () => {
    const concat = funcs.stringConcat.mockImplementation((a, b, c) => a.concat(b, c));
    expect(concat('a', 'l', 'o')).toBe('alo');
  });
});