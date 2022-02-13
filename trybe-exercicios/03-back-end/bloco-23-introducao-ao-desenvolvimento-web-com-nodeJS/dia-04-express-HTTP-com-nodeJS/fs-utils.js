const fs = require("fs").promises;

const getSimpsons = () => {
  return fs.readFile('./simpsons.json')
    .then((rawData) => JSON.parse(rawData));
};

const setSimpsons = (newSimpson) => {
  return fs.writeFile('./simpsons.json', JSON.stringify(newSimpson));
};

module.exports = { getSimpsons,  setSimpsons};