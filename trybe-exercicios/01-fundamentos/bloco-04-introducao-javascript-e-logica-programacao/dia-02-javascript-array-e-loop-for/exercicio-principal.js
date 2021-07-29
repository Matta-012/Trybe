let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1-Percorre todo o array e imprime seus valores na tela.
// for (let number of numbers) {
//     console.log(number);
// }

//2-Soma todos os valores do array e imprime na tela.
// let soma = 0;
// for (let number of numbers) {
//     soma += number;
// }
// console.log("A soma dos elementos do array é: " + soma);

//3-Calcula e imprime a média aritmética dos elementos do array.
// let soma = 0;
// let media = 0;

// for (let number of numbers) {
//     soma += number;
// }

// media = soma / numbers.length;
// console.log("A media dos elementos do array é: " + media);

// //4-Verifica se o valor é maior ou menor do que 20.
// if (media > 20) {
//     console.log("Valor maior que 20.");
// }
// else {
//     console.log("Valor menor ou igual a 20.");
// }

//5-Calcula qual o maior valor do array e imprime na tela.
// let maior = 0;
// for (let number of numbers) {
//     if (number > maior) {
//         maior = number;
//     }
// }
// console.log("O maior valor é: " + maior);

//6-Calcula quantos valores ímpares o array possui e imprime na tela.
// let impar = 0;
// for (let number of numbers) {
//     if (number % 2 === 1) {
//         impar++;
//     }
// }
// if (impar > 0) {
//     console.log("A quantidade de números ímpares é: " + impar);
// }
// else {
//     console.log("Nenhum valor ímpar encontrado.");
// }

//7-Calcula o menor valor do array e imprime na tela.
// let menor = numbers[0];
// for (let number of numbers) {
//     if (number < menor) {
//         menor = number;
//     }
// }
// console.log("O menor valor é: " + menor);

//8- Cria um array que vai de um até 25.
let arrayOfNumbers = [];
for (i = 0; i < 25; i += 1) {
    arrayOfNumbers[i] = i + 1;
}
for (let number of arrayOfNumbers) {
    //console.log(number);
}

//9-Utiliza o array anterior e calcula o valor de cada posição dividido por 2.
for (let number of arrayOfNumbers) {
    console.log(number + " dividido por 2 é: " + number / 2);
}