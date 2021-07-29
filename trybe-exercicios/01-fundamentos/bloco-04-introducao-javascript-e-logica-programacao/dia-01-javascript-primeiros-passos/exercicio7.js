let nota = 85;

if (nota >= 0 && nota <=100) {
    if (nota >= 90) {
        nota = "A";
    }
    else if (nota >= 80 && nota < 90) {
        nota = "B";
    }
    else if (nota >= 70 && nota < 80) {
        nota = "C";
    }
    else if (nota >= 60 && nota < 70) {
        nota = "D";
    }
    else if (nota >= 50 && nota < 60) {
        nota = "E";
    }
    else {
        nota = "F";
    }
    console.log(nota);
}
else {
    console.log("nota inválida.");
}

