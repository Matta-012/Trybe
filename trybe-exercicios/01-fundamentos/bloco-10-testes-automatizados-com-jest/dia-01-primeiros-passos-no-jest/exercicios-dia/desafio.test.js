const searchEmployee = require('./desafio');

describe('Testa a função searchEmployee() do desafio', () => {
  it('Testa se a função searchEmployee é definida', () => {
    expect(searchEmployee).toBeDefined();
  });

  it('Testa se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('Testa se searchEmployee lança uma exceção quando um id não consta no quadro de funcionários', () => {
    expect(() => { searchEmployee('0000-0', 'Ana') }).toThrow();
    expect(() => { searchEmployee('0000-1', 'Gates') }).toThrow();
    expect(() => { searchEmployee('0000-5', 'Jobs') }).toThrow();
  });
  it('Testa se searchEmployee lança uma exceção quando um id não consta no quadro de funcionários com a mensagem "ID não identificada".', () => {
    expect(() => { searchEmployee('0000-0', 'Ana') }).toThrowError(new Error('ID não identificada'));
    expect(() => { searchEmployee('0000-1', 'Gates') }).toThrowError(new Error('ID não identificada'));
    expect(() => { searchEmployee('0000-5', 'Jobs') }).toThrowError(new Error('ID não identificada'));
  });

  it('Testa se searchEmployee lança uma exceção quando os detalhes do funcionário não constam no quadro de funcionários', () => {
    expect(() => { searchEmployee('8579-6', 'Jordão') }).toThrow();
    expect(() => { searchEmployee('8579-6', 'Hadouken') }).toThrow();
    expect(() => { searchEmployee('8579-6', 'Xablau') }).toThrow();
  });
  it('Testa se searchEmployee lança uma exceção quando os detalhes do funcionário não constam no quadro de funcionários com a mensagem "Informação indisponível".', () => {
    expect(() => { searchEmployee('8579-6', 'Jordão') }).toThrowError(new Error('Informação indisponível'));
    expect(() => { searchEmployee('8579-6', 'Hadouken') }).toThrowError(new Error('Informação indisponível'));
    expect(() => { searchEmployee('8579-6', 'Xablau') }).toThrowError(new Error('Informação indisponível'));
  });

  it('Ao receber um ID válido e um detalhe válido, deve retornar um objeto com o ID e a informação consultada: { id: "4456-4", lastName: "Zuckerberg" }', () => {
    expect(searchEmployee('1256-4', 'Linda')).toEqual({ id: '1256-4', firstName: 'Linda' });
    expect(searchEmployee('1256-4', 'Bezos')).toEqual({ id: '1256-4', lastName: 'Bezos' });
    expect(searchEmployee('1256-4', 'Hooks')).toEqual({ id: '1256-4', specialities: 'Hooks' });
    expect(searchEmployee('1256-4', 'Context API')).toEqual({ id: '1256-4', specialities: 'Context API' });
    expect(searchEmployee('1256-4', 'Tailwind CSS')).toEqual({ id: '1256-4', specialities: 'Tailwind CSS' });
  });
});