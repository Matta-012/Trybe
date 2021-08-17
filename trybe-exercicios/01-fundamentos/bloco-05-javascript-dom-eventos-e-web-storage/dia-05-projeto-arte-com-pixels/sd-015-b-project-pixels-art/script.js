// Requisito 7 - Seleciona um quadrado da paleta de cores e adiciona a classe 'selected', excluindo esta classe de todos os outros quadrados.
const getColorPalette = document.getElementsByClassName('color');

function handleColorPaletteSelection(event) {
  const targetEvent = event;
  for (let i = 0; i < getColorPalette.length; i += 1) {
    getColorPalette[i].classList.remove('selected');
  }
  targetEvent.target.classList.add('selected');
}
function addPaletteEventListener() {
  for (let i = 0; i < getColorPalette.length; i += 1) {
    getColorPalette[i].addEventListener('click', handleColorPaletteSelection);
  }
}

// Requisito 8 - Pintar quadrados do pixel board.
function handlePaintingPixelBoard(event) {
  const selectedColor = document.querySelector('.selected');
  const newColor = window.getComputedStyle(selectedColor).backgroundColor;
  const targetEvent = event;
  targetEvent.target.style.backgroundColor = newColor;
}

function addPixelEventListener() {
  const allPixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < allPixels.length; i += 1) {
    allPixels[i].addEventListener('click', handlePaintingPixelBoard);
  }
}

// Requisito 9 - Resetar todos os quadrados com a cor branca.
function handleClearButton() {
  const allPixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < allPixels.length; i += 1) {
    allPixels[i].style.backgroundColor = 'white';
  }
}

function addClearButtonEventListener() {
  const clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', handleClearButton);
}

// Requisito 4 - Cria um board com 25 pixels.
const pixelLine = 'pixel-line';
function createDivColumns(input, index) {
  for (let j = 0; j < input; j += 1) {
    const getPixelLine = document.getElementsByClassName(pixelLine);
    const newColumnDiv = document.createElement('div');
    newColumnDiv.className = 'pixel';
    newColumnDiv.style.backgroundColor = 'white';
    getPixelLine[index].appendChild(newColumnDiv);
  }
}

const pixelBoard = 'pixel-board';
function buildBoard(input) {
  const getPixelBoardContainer = document.getElementById(pixelBoard);

  for (let i = 0; i < input; i += 1) {
    const newLineDiv = document.createElement('div');
    newLineDiv.className = pixelLine;
    newLineDiv.style.backgroundColor = 'white';
    getPixelBoardContainer.appendChild(newLineDiv);

    createDivColumns(input, i);
  }
  addPixelEventListener();
}

// Requisito 10 - Fazer o tamanho do quadro de pixels ser definido pelo usuário.
// Emite mensagem de erro quando o input é vazio
const boardSize = 'board-size';
function alertErrorMessage() {
  const inputValue = document.getElementById(boardSize);
  if (!inputValue.value) {
    return alert('Board inválido!');
  }
}

// Refaz o board com base N.
function deletePreviousBoard() {
  const getPixelBoard = document.getElementById(pixelBoard);

  getPixelBoard.remove();
}

// Requisito 11 - Atribui 5 como valor mínimo e 50 como máximo.
function checkInputValue(input) {
  let inputValue = input;
  if (inputValue < 5) {
    inputValue = 5;
  } if (inputValue > 50) {
    inputValue = 50;
  }

  return inputValue;
}

function rebuildBoard() {
  deletePreviousBoard();

  const getBoardContainer = document.getElementById('board-container');
  const newPixelBoardContainer = document.createElement('div');
  newPixelBoardContainer.id = pixelBoard;
  getBoardContainer.appendChild(newPixelBoardContainer);

  const inputValue = document.getElementById(boardSize).value;
  buildBoard(checkInputValue(inputValue));
}

const newBoardButton = document.getElementById('generate-board');
function addNewBoard() {
  newBoardButton.addEventListener('click', alertErrorMessage);
  newBoardButton.addEventListener('click', rebuildBoard);
}

// Requisito 12 - Gera uma paleta de cores aleatoriamente a cada refresh.
function generateRandomColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}

function assignRandomColor() {
  getColorPalette[0].style.backgroundColor = 'black';

  for (let i = 1; i < getColorPalette.length; i += 1) {
    getColorPalette[i].style.backgroundColor = generateRandomColor();
  }
}

function generateWebPage() {
  assignRandomColor();
  buildBoard(5);
  addPaletteEventListener();
  addPixelEventListener();
  addClearButtonEventListener();
  addNewBoard();
}

window.onload = function () {
  generateWebPage();
};
