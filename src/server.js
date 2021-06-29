import express from 'express';

const app = express();

app.get('/hello', (req, res) => {
  res.status(200).send('즐거운 CI/CD 시간!!!!');
});

app.listen(3010, () => {
  console.log('server is running');
});