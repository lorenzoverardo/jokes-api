const express = require('express');
const LimitingMiddleware = require('limiting-middleware');
const { randomJoke, jokeByID } = require('./handler');

const app = express();

app.use(new LimitingMiddleware().limitByIp());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
  res.send('Use /random_joke or /joke/(number)');
});

app.get('/random_joke', (req, res) => {
  res.json(randomJoke());
});

app.get('/joke/:id', (req, res) => {
  res.json(jokeByID(req.params.id));
})

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    type: 'error', message: err.message
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
