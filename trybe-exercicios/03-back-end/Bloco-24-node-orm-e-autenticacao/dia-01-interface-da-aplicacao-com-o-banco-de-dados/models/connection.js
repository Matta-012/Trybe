const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'matta',
  password: 'M@tta012',
  database: 'users_crud'
});

module.exports = connection;