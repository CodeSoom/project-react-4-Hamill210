const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ appName: 'league of Legends' });
});

router.get('/group', (req, res) => {
  res.json({ appName: 'league of Legends group' });
});

module.exports = router;