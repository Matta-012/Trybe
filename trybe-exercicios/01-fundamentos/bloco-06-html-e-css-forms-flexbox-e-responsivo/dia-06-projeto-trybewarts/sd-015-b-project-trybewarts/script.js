const evaluationForm = 'evaluation-form';

function verifyLogin(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const validEmail = 'tryber@teste.com';
  const validPassword = '123456';

  if (email === validEmail && password === validPassword) {
    return alert('Olá, Tryber!');
  }

  return alert('Email ou senha inválidos.');
}

function addBtnLoginEvent() {
  const loginButton = document.getElementById('btn-login');

  loginButton.addEventListener('click', verifyLogin);
}

function isAgreementChecked() {
  const agreementCheckbox = document.getElementById('agreement').checked;
  const submitButton = document.getElementById('submit-btn');

  if (agreementCheckbox) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

function addAgreementCheckboxEvent() {
  const agreementCheckbox = document.getElementById('agreement');

  agreementCheckbox.addEventListener('click', isAgreementChecked);
}

function charCounter(event) {
  const maxLength = event.target.getAttribute('maxlength');
  const currentLength = event.target.value;

  const counter = parseInt(maxLength, 10) - parseInt(currentLength.length, 10);
  const counterSpan = document.getElementById('counter');
  counterSpan.innerText = `${counter} characters left.`;
}

function addTextAreEvent() {
  const textArea = document.getElementById('textarea');

  textArea.addEventListener('keyup', charCounter);
}

function getHouse() {
  const house = document.querySelectorAll('input[name=family]');
  let family = 'Família Frontend';

  for (let i = 0; i < house.length; i += 1) {
    if (house[i].checked) {
      family = house[i].value;
    }
  }

  return family;
}

function isChecked(index, tech, arrOfTech) {
  if (tech[index].checked && index === 0) {
    return arrOfTech.push(`${tech[index].value}`);
  }

  if (tech[index].checked && index > 0) {
    arrOfTech.push(` ${tech[index].value}`);
  }
}
function getTechnologies() {
  const technologies = document.querySelectorAll('.subject');
  const arrOfTechnologies = [];

  for (let i = 0; i < technologies.length; i += 1) {
    isChecked(i, technologies, arrOfTechnologies);
  }

  return arrOfTechnologies;
}

function getRating() {
  const rate = document.querySelectorAll('input[name=rate]');
  let rating = rate[9].value;

  for (let i = 0; i < rate.length; i += 1) {
    if (rate[i].checked) {
      rating = rate[i].value;
    }
  }

  return rating;
}

function getFormInputData() {
  const formDataObj = {
    Nome: document.getElementById('input-name').value,
    Sobrenome: document.getElementById('input-lastname').value,
    Email: document.getElementById('input-email').value,
    Casa: document.getElementById('house').value,
    Família: getHouse(),
    Matérias: getTechnologies(),
    Avaliação: getRating(),
    Observações: document.getElementById('textarea').value,
  };

  return formDataObj;
}

function deleteForm() {
  const form = document.getElementById(evaluationForm);
  const mainContainer = document.querySelector('.main-container');

  mainContainer.removeChild(form);
}

function replaceFormElement() {
  const newTitle = document.createElement('h2');
  const newDataContainer = document.createElement('div');
  const mainContainer = document.querySelector('.main-container');

  newTitle.innerText = 'Formulário de Avaliação';
  mainContainer.appendChild(newDataContainer);
  newDataContainer.id = evaluationForm;
  newDataContainer.appendChild(newTitle);
}

function createNewFormData(key, value, container) {
  let newParagraph = document.createElement('p');
  newParagraph.innerHTML = `${key[0]}: ${value[0]} ${value[1]}`;
  container.appendChild(newParagraph);

  for (let i = 2; i < key.length; i += 1) {
    newParagraph = document.createElement('p');
    newParagraph.innerHTML = `${key[i]}: ${value[i]}`;
    container.appendChild(newParagraph);
  }
}

function displayFormData(event) {
  event.preventDefault();
  const formData = getFormInputData();
  const key = Object.keys(formData);
  const value = Object.values(formData);

  // Exclui form do HTML.
  deleteForm();
  // Cria novos elementos no lugar do form.
  replaceFormElement();

  // Imprime os dados do form.
  const newDataContainer = document.getElementById(evaluationForm);
  createNewFormData(key, value, newDataContainer);
}

function addSubmitBtnEvent() {
  const submitButton = document.getElementById('submit-btn');

  submitButton.addEventListener('click', displayFormData);
}

window.onload = function () {
  addBtnLoginEvent();
  addAgreementCheckboxEvent();
  addTextAreEvent();
  addSubmitBtnEvent();
};
