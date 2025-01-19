// create web server

const express = require('express');
const app = express();
const port = 3000;

// add middleware
app.use(express.json());

// create comments array
const comments = [
  { id: 1, author: 'John Doe', text: 'Hello, world!' },
  { id: 2, author: 'Jane Doe', text: 'Hello, world!' },
  { id: 3, author: 'John Smith', text: 'Hello, world!' },
];

// GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// GET /comments/:id
app.get('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.find((comment) => comment.id === id);
  res.json(comment);
});

// PUT /comments/:id
app.put('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.find((comment) => comment.id === id);
  const { author, text } = req.body;
  comment.author = author;
  comment.text = text;
  res.json(comment);
});

// DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = comments.findIndex((comment) => comment.id === id);
  comments.splice(index, 1);
  res.json({ id });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
