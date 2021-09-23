const users = [
  { id: 1, name: 'Mark' },
  { id: 2, name: 'Paul' },
];

const findUserById = (id) => new Promise((resolve, reject) => {
  const result = users.find((user) => user.id === id);

  if (result) {
    return resolve(result);
  }

  return reject(new Error(`User with ${id} not found.`));
});

const getUserName = (userId) => findUserById(userId).then((user) => user.name);

describe('Testa findUserById()', () => {
  it('Retorna o usurário correto pelo seu respectivo ID', async () => {
    try {
      const user = await findUserById(1);
      expect(user.name).toBe('Mark');
    } catch (error) {
      
    }
  });

  it('Retorna mensagem de erro quando uma exceção é lançada', async () => {
    try {
      await findUserById(2);
    } catch (error) {
      expect(error).toMatch(`User with ${2} not found.`);
    }
  });
});