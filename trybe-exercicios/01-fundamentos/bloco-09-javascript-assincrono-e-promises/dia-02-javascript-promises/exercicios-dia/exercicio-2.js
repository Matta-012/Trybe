const squaredRandomNumbers = () => {
  const number = Array.from({length: 10}, () => Math.floor(Math.random() * 50) ** 2);

  return number;
};
  const promise = new Promise((resolve, reject) => {
    const arrOfNumbers = squaredRandomNumbers();
  
    const sumOfNumbers = arrOfNumbers.reduce((acc, number) => acc + number, 0);
  
    if (sumOfNumbers < 8000) {
      const numbersToDivide = [2, 3, 5, 10];

      const result = numbersToDivide.map((number) => Math.round(sumOfNumbers / number));

      return resolve(result);
    }

    return reject('É mais de oito mil! Essa promise deve estar quebrada!');
  })
    .then((arrOfNumbers) => arrOfNumbers)
    .then((dividedNumbers) => console.log(dividedNumbers.reduce((acc, number) => acc + number, 0)))
    .catch((error) => console.log(error));