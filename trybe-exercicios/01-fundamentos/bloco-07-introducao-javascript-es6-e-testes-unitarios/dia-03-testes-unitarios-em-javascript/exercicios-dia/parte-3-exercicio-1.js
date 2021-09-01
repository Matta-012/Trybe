const assert = require('assert');
const greetPeople = (people) => {
    const greeting = 'Hello';
    const newGreeting = [];

    for (let person in people) {
        newGreeting.push(`${greeting} ${people[person]}`);
    }
    return newGreeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);