const sumFixAmount = (amount) => {
  return (number) => amount + number;
};

const initialSum = sumFixAmount(15);
console.log(initialSum(5));
// Resultado: 20

// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(5, console.group);

// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(3, (number) => {
//   if (number % 2 === 0) {
//     console.log(number, "is even");
//   }
// });

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, "is even");
  }
};

const isOdd = (number) => {
  if (number % 2 > 0) {
    console.log(number, "is odd");
  }
};

// repeat(3, isEven); // Testa quais números serão pares;
// repeat(3, isOdd); // Testa quais números serão ímpares;

const wakeUp = () => console.log('Acordando!');

const breakfast = () => console.log('Bora tomar café!');

const goingToSleep = () => console.log('Partiu dormir!');

const doingThings = (func) => func();

doingThings(wakeUp);
doingThings(breakfast);
doingThings(goingToSleep);