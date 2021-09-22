function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

describe('Função myRemove() - remove items de um array e os trasnfere para um novo array', () => {
  it('Verifica se myRemove() é uma função', () => {
    expect('function').toBe(typeof myRemove);
  })

  it('Verifica se myRemove([1, 2, 3, 4], 3) remove o número 3 do array.', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('Verifica se myRemove([1, 2, 3, 4], 3) é diferente de [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it("Verifica se myRemove([1, 2, 3, 4], 5) é diferente de [1, 2, 3, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});