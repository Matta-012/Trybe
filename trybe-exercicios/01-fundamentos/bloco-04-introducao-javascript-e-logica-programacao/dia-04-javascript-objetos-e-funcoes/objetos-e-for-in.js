//Exercício 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};

// console.log("Bem vinda, " + info.personagem);
// //Exercício 3 - Faça um for/in que mostre todas as chaves do objeto.
// for (let key in info) {
//     console.log(key);
// }

// //Exercício 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
// for (let key in info) {
//     console.log(info[key]);
// }

// Exercício 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 
// 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. 
// Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.
let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};

for (let key in info2) {
    if (key !== 'recorrente') {
        console.log(info[key] + " e " + info2[key]);
    }
    else {
        console.log("Ambos recorrentes");
    }
}
