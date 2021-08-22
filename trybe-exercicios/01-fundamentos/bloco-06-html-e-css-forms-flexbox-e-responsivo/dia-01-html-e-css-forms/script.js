function createBrazilStates() {
    const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];
    const initials = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF'];
    const dropDownStates = document.getElementById('estado');

    for (let i in states) {
        const newState = document.createElement('option');
        newState.innerText = states[i];
        newState.value = initials[i];
        dropDownStates.appendChild(newState);
    }
}

// Verifica se o dia é válido
function isValidDay(day) {
    const intDay = parseInt(day, 10);

    return intDay > 0 && intDay <= 31;
}

// Verifica se o mês é válido
function isValidMonth(month) {
    const intMonth = parseInt(month, 10);

    return intMonth > 0 && intMonth <= 12;
}

// Verifica se o ano é válido
function isValidYear(year) {
    const intyear = parseInt(year, 10);

    return intyear > 0;
}

function isValidDate() {
    let isValidDate = true;
    const date = document.getElementById('data-inicio').value;

    const dateInput = date.split('/');
    const day = dateInput[0];
    const month = dateInput[1];
    const year = dateInput[2];

    isValidDate = isValidDay(day) && isValidMonth(month) && isValidYear(year);
    
    if (!isValidDate) { return alert('Data inválida!'); }

    return date;
}

function isValidField(input, maxLength) {
    return input.length > 0 && input.length < maxLength;
}

function handleSubmitBtn(event) {
    event.preventDefault();
}

function addSubmitBtnEvent() {
    const submitBtn = document.getElementById('enviar');
    submitBtn.addEventListener('click', handleSubmitBtn);
    submitBtn.addEventListener('click', isValidDate);
}

window.onload = function() {
    addSubmitBtnEvent();
    createBrazilStates();
}