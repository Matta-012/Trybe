function createBrazilStates() {
    const states = [];
}




function handleSubmitBtn(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
}

function addSubmitBtnEvent() {
    const submitBtn = document.getElementById('enviar');
    submitBtn.addEventListener('click', handleSubmitBtn);
}

window.onload = function() {
    addSubmitBtnEvent();
}