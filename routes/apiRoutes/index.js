const router = require('express').Router();
const { notes } = require('../../lib/db/db.json');


router.get('/notes', (req, res) => {
    console.log(res.json(notes));
    
});

router.post('/notes', (req, res) => {
    
    
});
  
module.exports = router;