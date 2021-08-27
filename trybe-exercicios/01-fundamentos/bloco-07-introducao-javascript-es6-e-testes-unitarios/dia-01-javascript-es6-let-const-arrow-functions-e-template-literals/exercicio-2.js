// Calcula o Fatorial
const factorial = number => {
    let sum = number;
    for (let i = number - 1; i > 0; i -= 1) {
        sum *= i;
    }
    return sum;
}

// console.log(factorial(4));

// Fatorial na versão recursiva
const recursiveFactorial = number => number === 0 ? console.log(1) : console.log(factorial(number));

recursiveFactorial(4);

// Retorna maior palavra
const phrase = input => {
    const arrOfStrings = input.split(' ');
    const longestWord = arrOfStrings.sort((a, b) => b.length - a.length);
    return longestWord[0];
}

console.log(phrase("Antônio foi no banheiro e não sabemos o que aconteceu"));