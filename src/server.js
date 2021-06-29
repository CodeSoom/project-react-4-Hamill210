import express from 'express';

const app = express();

app.get('/hello', (req, res) => {
  res.status(200).send('Hello CodeSoom!!!!');
});

app.listen(3010, () => {
  console.log('server is running');
});