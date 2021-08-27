const clickButton = document.querySelector('button');
let counterText = document.querySelector('b');
let counter = 0;

window.onload = () => {

    clickButton.addEventListener('click', () => {
        counter++;
        counterText.innerHTML = `${counter}`;
    });
}