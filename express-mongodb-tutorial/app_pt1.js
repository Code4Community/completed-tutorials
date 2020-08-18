/**
 * Code for Part 1: Express
 */

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/home_page.html")
});

app.post('/', (req, res) => {
  res.send('POST request made at /')
});

app.put('/school', (req, res) => {
  res.send('PUT request made at /school')
});

app.delete('/school', (req, res) => {
  res.send('DELETE request made at /school')
});

app.use(express.static('public'));

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
});