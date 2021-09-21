const { encode, decode, } = require('./parteII-exercicio-1');

describe('Função encode() - Codifica as vogais de uma string por números', () => {
  it('Verifica se encode() é uma função', () => {
    expect('function').toBe(typeof encode);
  })

  it('Verifica se encode(aeiou) é igual a 12345, respectivamente.', () => {
    expect(encode('aeiou')).toEqual('12345');
  });

  it("Verifica se encode('xablau') é igual a 'x1bl15'.", () => {
    expect(encode('xablau')).toEqual('x1bl15');
  });

  it("Verifica se encode('jhow') é igual a 'jh4w'.", () => {
    expect(encode('jhow')).toEqual('jh4w');
  });

  it("Verifica se encode('xablau') tem o length 6.", () => {
    expect(encode('xablau')).toHaveLength(6);
  });
});

describe('Função decode() - Decodifica os números de uma string por vogais', () => {
  it('Verifica se encode() é uma função', () => {
    expect('function').toBe(typeof decode);
  })

  it('Verifica se decode(12345) é igual a aeiou, respectivamente.', () => {
    expect(decode('12345')).toEqual('aeiou');
  });

  it("Verifica se decode('x1bl15') é igual a 'xablau'.", () => {
    expect(decode('x1bl15')).toEqual('xablau');
  });

  it("Verifica se decode('jh4w') é igual a 'jhow'.", () => {
    expect(decode('jh4w')).toEqual('jhow');
  });

  it("Verifica se decode('x1bl15') tem o length 6.", () => {
    expect(decode('x1bl15')).toHaveLength(6);
  });
});