// create web server
const express = require('express');
const app = express();
const comments = require('./comments-data');

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});