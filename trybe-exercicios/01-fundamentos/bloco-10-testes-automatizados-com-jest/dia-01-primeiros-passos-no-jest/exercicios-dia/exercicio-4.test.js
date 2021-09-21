function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

describe('Função myFizzBuzz()', () => {
  it('Verifica se myFizzBuzz() é uma função', () => {
    expect('function').toBe(typeof myFizzBuzz);
  })

  it('Verifica se myFizzBuzz(15) retorna fizzbuzz.', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('Verifica se myFizzBuzz(3) retorna fizz.', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });

  it('Verifica se myFizzBuzz(5) retorna buzz.', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });

  it('Verifica se myFizzBuzz(4) retorna 4.', () => {
    expect(myFizzBuzz(4)).toBe(4);
  });

  it("Verifica se myFizzBuzz('4') retorna 4.", () => {
    expect(myFizzBuzz('4')).toBe(false);
  });
});