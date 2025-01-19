// create web server
// create a route for comments
// send the comments data to the client
const express = require('express');
const app = express();
const comments = require('./comments-data');

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});