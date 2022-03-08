// hello-msc/models/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'matta',
  password: 'M@tta012',
  database: 'model_example'
});

module.exports = connection;