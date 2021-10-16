const router = require('express').Router();
const { notes } = require('../../lib/db/db.json');

console.log(notes);
router.get('/notes', (req, res) => {
    let results = notes;
    console.log(res.notes[0]);
    console.log(res.json(notes)[0]);
    console.log(res.json(notes));
    
});

router.post('/notes', (req, res) => {
    
    
});
  
module.exports = router;