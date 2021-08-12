const firstLi = document.getElementById('firstLi');
const secondLi = document.getElementById('secondLi');
const thirdLi = document.getElementById('thirdLi');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');
let allPageElements = [firstLi, secondLi, thirdLi, myWebpage];

// 1. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 1.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
const classTech = document.body.getElementsByClassName('tech');
function handleClassTech(event) {
    for (let i = 0; i < classTech.length; i += 1) {
        classTech[i].className = '';
    }
    event.target.className = 'tech';
}

for (let i in allPageElements) {
    allPageElements[i].addEventListener('click', handleClassTech);
}

// 2. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';
function handleInputText() {
    classTech[0].innerText = input.value;
}
input.addEventListener('keyup', handleInputText);

// 3. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;
// 3.1. Que tal redirecionar para seu portifólio?
function handleRedirectEvent() {
  window.open('https://github.com/Matta-012', '_blank');
}
myWebpage.addEventListener('dblclick', handleRedirectEvent);

// 4. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;
function handleMouseOver() {
  myWebpage.style.color = 'red';
}
myWebpage.addEventListener('mouseover', handleMouseOver);

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
    event.target.innerText = 'Opção reiniciada';
    //Retorna um alert com o ID do elemento que recebeu o doubleClick.
    //alert(event.srcElement.className);

  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.