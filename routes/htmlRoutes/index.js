const path = require('path');
const router = require('express').Router();

router.get('/notes.html', (req, res) => {
  console.log(path.join(__dirname, '../../lib/public/notes.html'));
  res.sendFile(path.join(__dirname, '../../lib/public/notes.html'));
});

router.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../../lib/public/index.html'));
});

module.exports = router;