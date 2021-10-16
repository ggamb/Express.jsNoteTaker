const router = require('express').Router();
const { notes } = require('../lib/public/notes');

router.get('../../lib/public/notes', (req, res) => {
    let results = notes;
    /*
    if (req.query) {
      results = filterByQuery(req.query, results);
    }
    res.json(results);*/
});

router.post('../../lib/public/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();

    
});
  
module.exports = router;