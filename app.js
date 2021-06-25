const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
});

app.get('/login/', (req, res) => {
  res.send('<h2>We say hi</h2>')
})

// app.get('', (req, res) => {

// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});