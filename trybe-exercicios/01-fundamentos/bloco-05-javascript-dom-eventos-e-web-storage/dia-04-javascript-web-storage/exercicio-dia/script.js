const getBackgroundColor = document.getElementById('container');
const getParagraph = document.getElementById('journalParagraph');
const getBackgroundInput = document.getElementById('background');
const getColorInput = document.getElementById('textColor');
const getFontSizeInput = document.getElementById('fontSize');
const getLineHeightInput = document.getElementById('lineHeight');
const getFontFamilyInput = document.getElementById('fontFamily');

window.onload = function() {
    restoreBackgroundStorage;
    console.log(restoreBackgroundStorage);
}

function handleBackgroundColorChange() {
    getBackgroundColor.style.backgroundColor = getBackgroundInput.value;

    const color = getBackgroundInput.value;
    localStorage.setItem('colors', JSON.stringify(color));
}
getBackgroundInput.addEventListener('keyup', handleBackgroundColorChange);

function restoreBackgroundStorage() {
    const color = JSON.parse(localStorage.getItem('colors'));

    getBackgroundColor.style.backgroundColor = color;
}