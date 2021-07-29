let custo = 100;
let precoVenda = 200;
let lucro;

if (custo >= 0 && precoVenda >= 0) {
    lucro = (precoVenda * 1000) - (custo * 1.20 * 1000);
    console.log("O lucro é de: " + lucro);
}
else {
    console.log("Valor inválido!");
}