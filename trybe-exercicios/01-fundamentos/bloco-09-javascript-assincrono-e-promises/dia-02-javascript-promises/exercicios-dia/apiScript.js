// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const sendJoke = (jokes) => {
  const jokeContainer = document.querySelector('#jokeContainer');
  const jokeParagraph = document.createElement('p');
  jokeParagraph.innerText = jokes.joke;

  jokeContainer.append(jokeParagraph);
}

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then(data => sendJoke(data));
};

window.onload = () => {
  fetchJoke();
};