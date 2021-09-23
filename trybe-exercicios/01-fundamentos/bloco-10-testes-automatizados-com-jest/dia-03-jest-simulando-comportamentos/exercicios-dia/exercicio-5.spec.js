const funcs = require('./exercicio-4.js');

describe('Reimplementa função toUpper()', () => {
  it('Retorna uma string em lower case e depois restaura comportamento', () => {
    funcs.toUpper = jest.spyOn(funcs, "toUpper").mockImplementation((string) => string.toLowerCase());
    expect(funcs.toUpper('XABLAU')).toBe('xablau');
    

    funcs.toUpper.mockRestore();
    expect(funcs.toUpper('xablau')).toBe('XABLAU');
  });
});