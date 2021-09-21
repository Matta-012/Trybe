const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

describe('Compara se os objetos são iguais.', () => {
  it('Verifica se obj1 é igual a obj2', () => {
    expect(obj1).toEqual(obj2);
  });

  it('Verifica se obj1 é igual a obj3', () => {
    expect(obj1).not.toEqual(obj3);
  });

  it('Verifica se obj2 é igual a obj3', () => {
    expect(obj2).not.toEqual(obj3);
  });
});