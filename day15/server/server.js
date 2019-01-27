const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([{
    name: 'Mike',
    age: 24
  }, {
    name: 'Harsha',
    age: 21
  }, {
    name: 'Jeff',
    age: 40
  }])
});

app.listen(3000);
module.exports.app = app;
