const express = require('express');

const app = express();
const PORT = 3006;

const controllers = require('./controllers');
const middlewares = require('./middlewares');



app.use(express.json());

app.get(
  '/user',
  controllers.getUser,
);

app.get(
  '/user/:id',
  controllers.getUserById,
);

app.post(
  '/user',
  [
    middlewares.validateName, middlewares.validateLastName, middlewares.validateEmail, middlewares.validatePassword
  ],
  controllers.createUser,
);

app.put(
  '/user/:id',
  [
    middlewares.validateName, middlewares.validateLastName, middlewares.validateEmail, middlewares.validatePassword
  ],
  controllers.updateUser,
);

app.listen(PORT, () => console.log('App listening on PORT ', PORT));