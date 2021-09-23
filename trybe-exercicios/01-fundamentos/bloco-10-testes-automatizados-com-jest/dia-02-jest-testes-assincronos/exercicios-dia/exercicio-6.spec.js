const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 1, type: 'Cat' },
];

// const findAnimalsByType = (type) => (
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const arrayAnimals = Animals.filter((animal) => animal.type === type);
//       if (arrayAnimals.length !== 0) {
//         return resolve(arrayAnimals);
//       };

//       return reject({ error: 'Não possui esse tipo de animal.' });
//     }, 100);
//   })
// );

// const getListAnimals = (type) => (
//   findAnimalsByType(type).then(list => list)
// );

/* --------------------------------------------------------------------------------- */

const findAnimalByName = (name) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find((animal) => animal.name === name);

      if (animal) return resolve(animal);

      return reject(new Error('Nenhum animal com esse nome!'));
    }, 100);
  })
);

// ---------------------

// describe('Testando promise - findAnimalByName', () => {
//   describe('Quando existe o animal com o nome procurado', () => {
//     test('Retorne o objeto do animal', () => (
//       findAnimalByName('Dorminhoco').then(animal => {
//         expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
//       })
//     ));
//   });

//   describe('Quando não existe o animal com o nome procurado', () => {
//     test('Retorna um erro', () => {
//       expect.assertions(1);
//       return findAnimalByName('Bob').catch((error) => {
//         expect(error.message).toEqual('Nenhum animal com esse nome!');
//       });
//     });
//   });
// });

/* ***************************************************************************************************** */

const findAnimalByAge = (age) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.filter((animal) => animal.age === age);

      if (animal.length > 0) return resolve(animal);

      return reject(new Error('Nenhum animal com essa idade!'));
    }, 100);
  })
);

describe('Testando Promise findAnimalByAge()', () => {
  it('Retorna um array de objetos quando uma idade válida é passada', async () => {
    const data = await findAnimalByAge(1);
    expect(data).toHaveLength(2);
    expect(data[0]).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
    expect(data[1]).toEqual({ name: 'Preguiça', age: 1, type: 'Cat' });
  })

  it('Retorna um erro quando um parâmetro inválido é passado', async () => {
    expect.assertions(1);
    return expect(findAnimalByAge(10)).rejects.toThrowError('Nenhum animal com essa idade!');
  })
});