const express     = require('express');
const dateChecker = require('./dateChecker');

const app         = express();

app.get('/:dateVal', (req, res) => {
  const dateVal = req.params.dateVal;

  res.send(dateChecker(dateVal));
});

const listener = app.listen(8080, () => {
  console.log(`This app is listening on port ${listener.address().port}`);
});
