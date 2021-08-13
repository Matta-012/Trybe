const getBackgroundColor = document.getElementById('container');
const getParagraph = document.getElementById('journalParagraph');
const getBackgroundInput = document.getElementById('background');
const getColorInput = document.getElementById('textColor');
const getFontSizeInput = document.getElementById('fontSize');
const getLineHeightInput = document.getElementById('lineHeight');
const getFontFamilyInput = document.getElementById('fontFamily');
const bgButton = document.getElementById('bgButton');
const textButton = document.getElementById('textButton');
const sizeButton = document.getElementById('sizeButton');
const lineButton = document.getElementById('lineButton');
const fontButton = document.getElementById('fontButton');
let styleChanges = {};

//Implementa mudança de cor do background,salva no localStorage e depois recupera ela.
function handleBackgroundColorChange() {
    styleChanges.background = getBackgroundInput.value;
    getBackgroundColor.style.backgroundColor = styleChanges.background;

    localStorage.setItem('background', JSON.stringify(styleChanges.background));
}
bgButton.addEventListener('click', handleBackgroundColorChange);

function restoreBackgroundStorage() {
    const color = JSON.parse(localStorage.getItem('background'));
    getBackgroundColor.style.backgroundColor = color;
}

//Implementa mudança de cor no text, salva no localStorage e depois recupera ela.
function handleTextColorChange() {
    styleChanges.text = getColorInput.value;
    getParagraph.style.color = styleChanges.text;

    localStorage.setItem('text', JSON.stringify(styleChanges.text));
}
textButton.addEventListener('click', handleTextColorChange);

function restoreTextColorStorage() {
    const color = JSON.parse(localStorage.getItem('text'));
    getParagraph.style.color = color;
}

window.onload = function() {
    restoreBackgroundStorage();
    restoreTextColorStorage();
}