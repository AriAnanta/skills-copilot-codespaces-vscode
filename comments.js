// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create comments array
const comments = [
  { username: 'Todd', comment: 'lol that is so funny', upvotes: 0 },
  { username: 'Skyler', comment: 'I like turtles', upvotes: 10 },
  { username: 'Sk8erBoi', comment: 'Plz delete this...', upvotes: 3 },
  { username: 'Ada', comment: 'that is so last year', upvotes: 7 }
];

// Create route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create route to add a comment
app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.status(201).send();
});

// Create route to upvote a comment
app.post('/comments/:id/upvote', (req, res) => {
  const id = req.params.id;
  comments[id].upvotes++;
  res.status(200).send();
});

app.listen(4001, () => {
  console.log('Server is up and running on port 4001');
});