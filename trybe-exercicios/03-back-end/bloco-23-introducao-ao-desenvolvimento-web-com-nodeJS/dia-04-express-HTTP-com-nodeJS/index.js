const express = require("express");
const authMiddleware = require('./authMiddleware');
const { getSimpsons, setSimpsons } = require('./fs-utils');
const crypto = require('crypto');

const app = express();
const PORT = 3000;

app.use(express.json()); // A partir da versão 4.17 do express o body parser pode ser substituido por express.json()
app.use(authMiddleware);

app.get("/ping", (_req, res) => {
  return res.status(200).json({ message: "pong" });
});

app.post("/greetings", (req, res) => {
  const { name, age } = req.body;

  return Number(age) > 17
    ? res.status(201).json({ message: `Hello, ${name}` })
    : res.status(401).json({ message: `Unauthorized` });
});

app.post("/hello", (req, res) => {
  const { name } = req.body;

  return res.status(201).json({ message: `Hello, ${name}` })
});

app.put("/users/:name/:age", (req, res) => {
  const { name, age } = req.params;

  return res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` })
});

app.get("/simpsons", async (req, res) => {
  const simpsons = await getSimpsons();

  return res.status(200).json(simpsons)
});

app.get("/simpsons/:id", async (req, res) => {
  const simpsonsData = await getSimpsons();
  const { id } = req.params;

  const simpson = simpsonsData.find((simpson) => simpson.id === id)

  if (!simpson) return res.status(404).json({ message: 'simpson not found'});

  return res.status(202).json(simpson);
});

app.post('/simpsons', async (req, res) => {
  const simpsons = await getSimpsons();
  const { id, name } = req.body;

  const isNewSimpsonData = simpsons.findIndex((simpson) => simpson.id === id);

  if (isNewSimpsonData !== -1) return res.status(409).json({ message: 'id already exists'});

  const newSimpson = { id, name };
  simpsons.push(newSimpson);
  await setSimpsons(simpsons);

  return res.status(204).end();
});

const tokenGenerator = () => {
  return crypto.randomBytes(8).toString('hex');
};

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if (!email || !password || !firstName || !phone) {
    return res.status(401).json({ message: 'missing fields'});
  }

  const token = tokenGenerator();
  return res.status(200).json({ message: `token: ${token}`});
});

app.use(function (err, _req, res, _next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(PORT, () => console.log("App listening on PORT ", PORT));
