let n = 5;
const asterisk = "*";
const blankSpaces = " ";
let pyramid;

for (let i = 1; i <= n; i += 1) {
    pyramid = blankSpaces.repeat(n - i) + asterisk.repeat(i);
    console.log(pyramid);
}



