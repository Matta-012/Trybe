function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

describe('Função myRemoveWithoutCopy() - remove items de um array', () => {
  it('Verifica se myRemoveWithoutCopy() é uma função', () => {
    expect('function').toBe(typeof myRemoveWithoutCopy);
  })

  it('Verifica se myRemoveWithoutCopy([1, 2, 3, 4], 3) remove o número 3 do array.', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('Verifica se myRemoveWithoutCopy([1, 2, 3, 4], 3) é diferente de [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it("Verifica se myRemoveWithoutCopy([1, 2, 3, 4], 1) tem seu length como 3", () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 1)).toHaveLength(3);
  });

  it("Verifica se myRemoveWithoutCopy([1, 2, 3, 4], 5) é diferente de [1, 2, 3, 4]", () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});