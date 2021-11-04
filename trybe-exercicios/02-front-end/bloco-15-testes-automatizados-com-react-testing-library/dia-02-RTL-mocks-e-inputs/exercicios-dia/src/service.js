const randomNumber = () => Math.floor(Math.random() * 101);

const stringToUpperCase = string => string.toUpperCase();

const getFirstLetter = string => string[0];

const concatStrings = (str1, str2) => str1.concat(str2);

const fetchDogAPI = async () => {
  const URL = 'https://dog.ceo/api/breeds/image/random';
  const dog = fetch(URL)
    .then(res => res.json())
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res));

  return dog;
};

module.exports = { randomNumber, stringToUpperCase, getFirstLetter, concatStrings, fetchDogAPI };