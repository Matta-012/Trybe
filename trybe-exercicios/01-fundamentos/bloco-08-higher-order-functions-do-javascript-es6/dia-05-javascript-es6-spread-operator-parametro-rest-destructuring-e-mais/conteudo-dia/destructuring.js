/* ------------------------------------------------------------------------------------------------------------- */

function drawES2015Chart({
  size = "big",
  cords = { x: 0, y: 0 },
  radius = 25,
}) {
  console.log(size, cords, radius);
  // big { x: 18, y: 30 } 30
}

drawES2015Chart({
  cords: { x: 18, y: 30 },
  radius: 30,
});

/* ------------------------------------------------------------------------------------------------------------- */

let a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

/* ------------------------------------------------------------------------------------------------------------- */

var url = "https://developer.mozilla.org/en-US/Web/JavaScript";

var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
console.log(parsedURL); 
// ["https://developer.mozilla.org/en-US/Web/JavaScript", "https",
// "developer.mozilla.org", "en-US/Web/JavaScript"]

var [, protocol, fullhost, fullpath] = parsedURL;

console.log(protocol); // "https"

/* ------------------------------------------------------------------------------------------------------------- */
// Para fixar

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [hello, greeting] = saudacoes;

greeting(hello);

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
[comida, animal, bebida] = [bebida, comida, animal]

console.log(comida, animal, bebida); // arroz gato água

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[ , , , ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];
