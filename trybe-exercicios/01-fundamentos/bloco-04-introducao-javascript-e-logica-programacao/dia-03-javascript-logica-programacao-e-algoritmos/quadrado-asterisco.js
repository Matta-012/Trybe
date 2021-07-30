let n = 3;
let pyramid = "*";

for (let i = 1; i < n; i += 1) {
    pyramid += "*";
}

for (let i = 0; i < n; i += 1) {
    console.log(pyramid);
}