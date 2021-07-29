//1-Ordena o array em ordem CRESCENTE com o BUBBLE SORT e imprime na tela.
// let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < array.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//         if (array[index] < array[secondIndex]) {
//             let position = array[index];
//             array[index] = array[secondIndex];
//             array[secondIndex] = position;
//         }
//     }
// }
// for (let number of array) {
//     console.log(number);
// }

//2-Ordena o array em ordem DECRESCENTE com o BUBBLE SORT e imprime na tela.
// let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < array.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//         if (array[index] > array[secondIndex]) {
//             let position = array[index];
//             array[index] = array[secondIndex];
//             array[secondIndex] = position;
//         }
//     }
// }
// for (let number of array) {
//     console.log(number);
// }

//3-Cria um segundo array, a partir do anterior, com o valor da posição atual vezes o próximo.
let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arrOfMultiplication = [];

for (let index = 0; index < array.length; index += 1) {
        if (index < array.length - 1) {
            arrOfMultiplication.push(array[index] * array[index + 1]);
        }
        else {
            arrOfMultiplication.push(array[index] * 2);
        }
}
console.log(arrOfMultiplication);