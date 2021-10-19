const router = require('express').Router();
const notes = require('../../lib/db/db.json');
const { createNewNote } = require('../../public/assets/js/index');
const uniqid = require('uniqid');


router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    let newId = uniqid();

    const newNote = createNewNote(req.body, newId);
    res.json(newNote);
});
  
module.exports = router;