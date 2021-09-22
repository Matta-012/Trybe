function getIntegers(string) {
  const regex = /\d+/g;
  const arrOfNumbers = string.match(regex);

  return arrOfNumbers.reduce((acc, number) => {
    acc.push(parseInt(number, 10))

    return acc;
  }, []);
}

const hydrate = (string) => {
  const arrOfIntegers = getIntegers(string);

  const sumOfDrinks = arrOfIntegers.reduce((acc, currentValue) => acc + currentValue, 0);

  return sumOfDrinks === 1 ? `${sumOfDrinks} copo de água` : `${sumOfDrinks} copos de água`;
};

module.exports = hydrate;