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

function submitPreventDefault(event) {
    event.preventDefault();
}

function addSubmitBtnEvent() {
    const btnSubmit = document.getElementById('enviar');
    btnSubmit.addEventListener('submit', submitPreventDefault);
}


window.onload = function() {

    document.getElementById('data-inicio').DatePickerX.init({format: 'dd/mm/yyyy'});
    createBrazilStates();
    addSubmitBtnEvent();
    new window.JustValidate('.js-form', {
        rules: {
            myName: {
                required: true,
                maxLength: 40
            },
            email: {
                required: true,
                email: true,
                maxLength: 50
            },
            myCPF: {
                required: true,
                maxLength: 11
            },
            myAddress: {
                required: true,
                maxLength: 200
            },
            myCity: {
                required: true,
                maxLength: 28
            },
            myState: {
                required: true
            },
            radio: {
                required: true,
            },
            myText: {
                required: true,
                maxLength: 1000
            },
            myJob: {
                required: true,
                maxLength: 40
            },
            myJobDescription: {
                required: true,
                maxLength: 500
            },
            myDate: {
                required: true,
                maxLength: 10
            }
        }
    });
}