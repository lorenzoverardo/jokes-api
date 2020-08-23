const jokes = require('./jokes/index.json');

const randomJoke = () => {
  return jokes[Math.floor(Math.random() * jokes.length)];
}

const jokeByID = (id) => {
  return jokes.filter(joke => joke.id == id);
}

module.exports = { jokes, randomJoke, jokeByID };
