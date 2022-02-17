const connection = require('./connection');

const create = async (firstName, lastName, email, password) => {
  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?);'
  const [result] = await connection.execute(query, [firstName, lastName, email, password]);

  return result;
};

module.exports = {
  create,
}
