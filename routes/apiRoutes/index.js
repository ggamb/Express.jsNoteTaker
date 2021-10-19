const router = require('express').Router();
const notes = require('../../lib/db/db.json');
const uniqid = require('uniqid');


router.get('/notes', (req, res) => {
    console.log(notes);
    res.json(notes);
});

router.post('/notes', (req, res) => {
    let newId = uniqid();

    const newNote = {
        'title' : req.body.title,
        'text' : req.body.text,
        'id' : newId
    }

    //notesArray.push(newNote);

    res.json(newNote);
});
  
module.exports = router;