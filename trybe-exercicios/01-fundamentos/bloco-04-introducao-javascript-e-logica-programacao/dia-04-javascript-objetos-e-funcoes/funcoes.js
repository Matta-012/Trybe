//Exercício 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// function checkPalindrome(word) {
//     if (word === word.split("").reverse().join("")) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// let input = "arara";
// console.log("Is " + input + " a palindrome? " + checkPalindrome(input));

//Exercício 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// let numbers = [2, 23, 6, 7, 110, 1];
// function highestValueIndex(arrOfNumbers) {
//     let highestValue = arrOfNumbers[0];
//     let indexPosition = 0;

//     for (let i = 0; i < arrOfNumbers.length; i++) {
//         if (arrOfNumbers[i] > highestValue) {
//             highestValue = arrOfNumbers[i];
//             indexPosition = i;
//         }
//     }

//     return indexPosition;
// }

// console.log("The highest number index is: " + highestValueIndex(numbers));

//Exercício 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
let arrOfNumbers = [2, -4, 6, 7, -10, 0, -13];
function lowestValueIndex(arrOfNumbers) {
    let lowestValue = arrOfNumbers[0];
    let indexPosition = 0;

    for (let i in arrOfNumbers) {
        if (arrOfNumbers[i] <= lowestValue) {
            lowestValue = arrOfNumbers[i];
            indexPosition = i;
        }
    }

    return indexPosition;
}
console.log("The lowest number index is: " + lowestValueIndex(arrOfNumbers));