// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployeeByID = employeeID => {
  const findID = professionalBoard.find(({ id }) => employeeID === id);
  
  if (!findID) throw new Error('ID não identificada');

  return findID;
};

const employeeSearch = (detail, id, firstName, lastName) => {
  const employeeSearchResult = {};
  if (detail === firstName) {
    employeeSearchResult.id = id;
    employeeSearchResult.firstName = detail;
  } else if (detail === lastName) {
    employeeSearchResult.id = id;
    employeeSearchResult.lastName = detail;
  } else {
    employeeSearchResult.id = id;
    employeeSearchResult.specialities = detail;
  }

  return employeeSearchResult;
};

const searchEmployee = (employeeID, detail) => {
  // Implemente seu código aqui
  const { id, firstName, lastName, specialities } = searchEmployeeByID(employeeID);

  const isSpeciality = specialities.includes(detail) || false;

  if (detail !== firstName && detail !== lastName && !isSpeciality) {
    throw new Error('Informação indisponível');
  }

  const employeeSearchResult = employeeSearch(detail, id, firstName, lastName, specialities);
  
  return employeeSearchResult;
};

// Resolução do gabarito - Interpretei errado o enunciado, o dado passado nos detalhes seria o nome da chave do objeto retornado no find. A informação a ser exibida seria o valor contido na chave.

const searchEmployee = (id, detail) => {
  const employee = professionalBoard.find(employee => employee.id === id);

  if (!employee) {
    throw new Error("ID não identificada");
  };
  if (!employee[detail]) {
    throw new Error("Informação indisponível");
  };

  return employee[detail];
};

module.exports = searchEmployee;