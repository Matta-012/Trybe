const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.json()); // A partir da versão 4.17 do express pode ser substituido por express.json()

app.get('/ping', (_req, res) => {
  return res.status(200).json({message: 'pong'})
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  return Number(age) > 17
    ? res.status(201).json({message: `Hello, ${name}`})
    : res.status(401).json({message: `Unauthorized`})
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(201).json({message: `Hello, ${name}`})
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  return res.status(200).json({message: `Seu nome é ${name} e você tem ${age} anos de idade`})
});


app.listen(PORT, () => console.log('App listening on PORT ', PORT));