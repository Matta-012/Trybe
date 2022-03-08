const connection = require('./connection');

const create = async (firstName, lastName, email, password) => {
  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?);'
  const [result] = await connection.execute(query, [firstName, lastName, email, password]);

  return result;
};

const getAll = async () => {
  const query = 'SELECT * FROM users;';

  const [result] = await connection.execute(query);

  return result.length > 0 ? result : [];
};

const getById = async (id) => {
  const query = 'SELECT * FROM users WHERE id = ?;';

  const [result] = await connection.execute(query, [id]);

  return result;
};

const update = async (id, firstName, lastName, email, password) => {
  const query = 'UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?;'

  const [result] = await connection.execute(query, [firstName, lastName, email, password, id]);

  return result;
};

module.exports = {
  create,
  getAll,
  getById,
  update,
}
