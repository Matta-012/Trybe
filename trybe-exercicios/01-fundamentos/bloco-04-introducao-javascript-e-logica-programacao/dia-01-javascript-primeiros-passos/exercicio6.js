let pecaXadrez = "xablau";

switch (pecaXadrez.toLowerCase()) {
    case "torre":
        console.log("vertical e horizontal");
    break;
    case "bispo":
        console.log("diagonais");
    break;
    case "cavalo":
        console.log("em L");
    break;
    case "dama":
        console.log("diagonais, vertical e horizontal");
    break;
    case "peão":
        console.log("uma casa na vertical");
    break;
    case "rei":
        console.log("uma casa nas diagonais, vertical e horizontal");
    break;
    default:
        console.log("peça inválida.");
}