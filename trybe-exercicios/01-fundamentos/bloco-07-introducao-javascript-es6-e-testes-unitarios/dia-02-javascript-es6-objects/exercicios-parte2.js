const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

// Exercício 1
const newShift = (obj, key, value) => obj[key] = value;
newShift(lesson2, 'turno', 'manhã');

// Exercício 2
const allObjKeys = obj => Object.keys(obj);
allObjKeys(lesson3);

// Exercício 3
const objLength = obj => Object.keys(obj).length;
objLength(lesson3);

// Exercício 4
const allObjValues = obj => Object.values(obj);

// Exercício 5
const cloneAllLessons = (lesson1, lesson2, lesson3) => {
    newShift(lesson2, 'turno', 'noite');

    const allLessons = {
        lesson1: Object.assign({}, lesson1),
        lesson2: Object.assign({}, lesson2),
        lesson3: Object.assign({}, lesson3),
    };

    return allLessons;
};

// Exercício 6
const allLessons = cloneAllLessons(lesson1, lesson2, lesson3);

const totalStudents = allLessons => {
    const students = Object.values(allLessons);

    let sumOfStudents = 0;

    for (let index in students) {
        sumOfStudents += students[index].numeroEstudantes;
    }

    return sumOfStudents;
}

totalStudents(allLessons);

// Exercício 7
const selectObjValueByKey = (obj, key) => {
    const arrOfValues = Object.values(obj);

    return `Output: ${arrOfValues[key]}`;
}

selectObjValueByKey(lesson1, 0);

// Exercício 8
const verifyObjKeyValue = (obj, key, value) => {
    const objKey = Object.keys(obj)

    return objKey.includes(key) && obj[key] === value;
}

console.log(verifyObjKeyValue(lesson2, 'numeroEstudantes', 20));