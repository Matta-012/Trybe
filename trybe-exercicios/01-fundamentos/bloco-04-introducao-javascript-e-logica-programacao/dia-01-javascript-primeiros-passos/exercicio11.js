let salarioBruto = 3000;
let salarioLiquido, inss, ir;

//Calcula desconto INSS
if (salarioBruto <= 1556.94) {
    inss = salarioBruto * 0.08;
}
else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    inss = salarioBruto * 0.09;
}
else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    inss = salarioBruto * 0.11;
}
else {
    inss = 570.88;
}

salarioLiquido = salarioBruto - inss;

//Calcula desconto IR
if (salarioLiquido > 4664.68) {
    ir = salarioLiquido * 0.275 - 869.36;
}
else if (salarioLiquido >= 3751.06 && salarioLiquido <= 4664.68) {
    ir = salarioLiquido * 0.225 - 636.13;
}
else if (salarioLiquido >= 2826.66 && salarioLiquido <= 3751.05) {
    ir = salarioLiquido * 0.15 - 354.80;
}
else if (salarioLiquido >= 1903.99 && salarioLiquido <= 2826.65) {
    ir = salarioLiquido * 0.075 - 142.80;
}
else {
    ir = 0;
}

salarioLiquido -= ir;

console.log("O salário líquido é: R$ " + salarioLiquido);

