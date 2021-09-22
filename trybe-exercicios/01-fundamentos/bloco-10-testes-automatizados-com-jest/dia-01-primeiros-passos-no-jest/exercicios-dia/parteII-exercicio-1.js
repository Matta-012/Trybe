function checkingTranslation(encodedString, i) {
  let arrOfVogals = ['a', '1', 'e', '2', 'i', '3', 'o', '4', 'u', '5'];

  for (let j = 0; j < arrOfVogals.length - 1; j += 2) {
    if (encodedString[i] === arrOfVogals[j]) {
      return arrOfVogals[j + 1];
    }
  }
  return encodedString[i];
}

function encode(string) {
  let encodedString = string.split('');
  let translatedString = [];

  for (let i = 0; i < encodedString.length; i += 1) {
    translatedString.push(checkingTranslation(encodedString, i));
  }

  return translatedString.join('');
}

function decode(string) {
  let decodedString = string.split('');
  let translatedString = [];
  let vogalsObj = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  for (let i = 0; i < decodedString.length; i += 1) {
    if (vogalsObj[decodedString[i]]) {
      decodedString[i] = vogalsObj[decodedString[i]];
    }
    translatedString.push(decodedString[i]);
  }
  return translatedString.join('');
}

module.exports = { encode, decode, };