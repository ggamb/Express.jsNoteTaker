const router = require('express').Router();
const { notesArray } = require('../../lib/db/db.json')
const { createNewNote, writeAfterDelete } = require('../../lib/js/script');
const uniqid = require('uniqid');


router.get('/notes', (req, res) => {
    res.json(notesArray);
});

router.post('/notes', (req, res) => {
    req.body.id = uniqid();

    let newNote = createNewNote(req.body, notesArray);

    res.json(newNote);
});

router.delete('/notes/:id', (req, res) => {
    const idToRemove = req.params.id;
    console.log(idToRemove);

    console.log(notesArray);

    for(let i = 0; i < notesArray.length; i++) {
        if(notesArray[i].id === idToRemove) {
            notesArray.splice(i,1);
            break;
        }
    }

    writeAfterDelete(notesArray);
    res.json(200);
});
  
module.exports = router;