const squaredRandomNumbers = () => {
  const number = Array.from({length: 10}, () => Math.floor(Math.random() * 50) ** 2);

  return number;
};
  const promise = async () => {
    const arrOfNumbers = squaredRandomNumbers();
  
    const sumOfNumbers = arrOfNumbers.reduce((acc, number) => acc + number, 0);
  
    try {
      if (sumOfNumbers < 8000) {
        const numbersToDivide = [2, 3, 5, 10];
  
        const result = numbersToDivide.map((number) => Math.round(sumOfNumbers / number));

        const sumOfNumbers = await result.reduce((acc, number) => acc + number, 0);
  
        return console.log(sumOfNumbers);
      } else {
        throw new Error();
      }
    } catch(error) {
      console.log('É mais de oito mil! Essa promise deve estar quebrada!');
    }
  }

promise();