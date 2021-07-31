//   *  
//  ***
// *****


let n = 5;
const asterisk = "*";
const blankSpaces = " ";
let pyramid;

for (let i = 2; i < n; i += 1) {
    pyramid = blankSpaces.repeat(n - i) + asterisk.repeat(i) + blankSpaces.repeat(n - i);
    console.log(pyramid);
}