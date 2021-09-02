const newEmployees = (personCallback) => {
  const employees = {
    id1: personCallback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: personCallback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: personCallback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

const createPersonData = (name) => {
  return {
    nomeCompleto: name,
    email: `${name}@trybe.com`,
  };
};

console.log(newEmployees(createPersonData));

const bet = (number, callback) => {
    const randomNumber = Math.round(Math.random() * (5 - 1) + 1);

    return callback(number, randomNumber);
}

const verifyBet = (betNumber, randomNumber) => {

    return betNumber === randomNumber ? 'Parabéns você ganhou!' : 'Tente novamente!'

}

console.log(bet(3, verifyBet));

const checkAnswers = (rightAnswers, studentAnswers, callback) => {
    return callback(rightAnswers, studentAnswers);
}

const calculateGrade = (rightAnswers, studentAnswers) => {
    let grade = 0;
    for (let index in rightAnswers) {
        if (studentAnswers[index] === rightAnswers[index]) {
            grade += 1;
        } else if (studentAnswers[index] === 'N.A') {
            grade += 0;
        } else {
            grade -= 0.5;
        }
    }

    return `Sua nota é: ${grade}`;
}

console.log(checkAnswers(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'], ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'], calculateGrade));

