# Jokes API
The project is based on [this repo](https://github.com/15Dkatz/official_joke_api) and uses those jokes (which seem to be no longer maintained) plus these [dad jokes](https://github.com/wesbos/dad-jokes) and some others. Feel free to contribute with more, as shown below.

The jokes are served with [Express](https://github.com/expressjs/express).

## Grab a random joke
[https://jokes-api-lv.ew.r.appspot.com/random_joke](https://jokes-api-lv.ew.r.appspot.com/random_joke)

## Grab a joke by id
[https://jokes-api-lv.ew.r.appspot.com/joke/1](https://jokes-api-lv.ew.r.appspot.com/joke/1)

## Make a contribution!

Submit a Pull Request, with your joke added to the jokes/index.json file. Make sure the joke is in this format:

```javascript
{
  "id": last joke id + 1,
  "setup": "What's the best thing about a Boolean?",
  "punchline": "Even if you're wrong, you're only off by a bit."
}
```

***

### Run Locally
* Clone the repo
* `npm i && npm start`
* Visit `localhost:3000/random_joke` on your browser!
