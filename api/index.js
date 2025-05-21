const express = require('express');
const serverless = require('serverless-http');

const app = express();

const quotes = [
  "Life is short. Smile while you still have teeth.",
  "Be yourself; everyone else is already taken.",
  "The best way to get started is to quit talking and begin doing.",
  "Success is not in what you have, but who you are.",
  "Stay hungry, stay foolish."
];

app.get('/', (req, res) => {
  res.send('Welcome to the Quote API! Try /quote');
});

app.get('/quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[randomIndex] });
});

module.exports.handler = serverless(app);
