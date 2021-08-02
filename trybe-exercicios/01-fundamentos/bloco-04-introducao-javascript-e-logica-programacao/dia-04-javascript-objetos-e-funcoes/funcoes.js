//Exercício 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function checkPalindrome(word) {
    if (word === word.split("").reverse().join("")) {
        return true;
    }
    else {
        return false;
    }
}

console.log(checkPalindrome("arara"));

//Exercício 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
