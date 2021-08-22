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

    return isValidDate;
}

function isValidField(input, maxLength) {
    return input.length > 0 && input.length <= maxLength;
}

function verifyAllInputFields() {
    let isAllValid = true;
    const name = isValidField(document.getElementById('nome').value, 40);
    const email = isValidField(document.getElementById('email').value, 50);
    const cpf = isValidField(document.getElementById('cpf').value, 11);
    const address = isValidField(document.getElementById('endereco').value, 200);
    const city = isValidField(document.getElementById('cidade').value, 28);
    const curriculum = isValidField(document.getElementById('cv').value, 1000);
    const job = isValidField(document.getElementById('cargo').value, 40);
    const jobDescription = isValidField(document.getElementById('descricao-cargo').value, 500);
    const date = isValidDate();

    isAllValid = name && email && cpf && address && city && curriculum && job && jobDescription && date;

    return isAllValid;
}

function handleSubmitBtn(event) {
    event.preventDefault();
    if (verifyAllInputFields()) {
        alert('Todos os campos foram preenchidos');
    } else {
        alert('Nem todos os campos foram preenchidos!');
    }
}

function addSubmitBtnEvent() {
    const submitBtn = document.getElementById('enviar');
    submitBtn.addEventListener('click', handleSubmitBtn);
}

window.onload = function() {
    addSubmitBtnEvent();
    createBrazilStates();
}