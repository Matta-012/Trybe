const fetch = require('node-fetch');

const API_URL = 'https://dog.ceo/api/breeds/image/random';

const fetchAPI = async () => (await fetch(API_URL)).json();

module.exports = { fetchAPI };