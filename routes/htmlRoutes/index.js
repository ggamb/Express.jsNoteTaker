//Varaibles to run htmlRoutes
const path = require('path');
const router = require('express').Router();

//For "/notes" path
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

//For any path that is not "/notes"
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;