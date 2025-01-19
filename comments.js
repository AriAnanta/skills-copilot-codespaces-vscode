// create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var comments = require('./comments.json');

// create server
app.listen(3000, function() {
  console.log('Server running on http://localhost:3000');
});

// Middleware
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/comments', function(req, res) {
  res.json(comments);
});

app.post('/comments', function(req, res) {
  comments.push(req.body);
  fs.writeFile('comments.json', JSON.stringify(comments, null, 2), function(err) {
    if (err) {
      return res.sendStatus(500);
    }
    res.sendStatus(201);
  });
});
