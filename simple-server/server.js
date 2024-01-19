// server.js
const express = require('express');
const app = express();
const port = 3000;

let counter = 0;

app.post('/counter', (req, res) => {
  counter++;
  res.send(`Counter incremented: ${counter}`);
});

app.get('/counter', (req, res) => {
  res.send(`${counter}`);
});

app.delete('/counter', (req, res) => {
  counter = 0;
  res.send('Counter reset');
});

console.log(`Server listening on localhost:${port}`);
app.listen(port);


//http://localhost:3000/counter