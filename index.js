const express = require('express')
const app = express();
const bodyParser = require('http-body-parser').express;

app.use(bodyParser({}));
app.post('/api/callservice', (req, res) => {
  if(req.body) {
  console.log('Parameters: ', req.body);
  } else {
    res.status(400).send('Please input values');
  }
});
app.get('/api/test', (req, res) => {
  res.send('HELLO WORLD');
});
app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});