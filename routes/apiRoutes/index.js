//Variables to run apiRoutes
const router = require('express').Router();
const { notesArray } = require('../../lib/db/db.json')
const { createNewNote, writeAfterDelete } = require('../../lib/js/script');
const uniqid = require('uniqid');
console.log("test")

//Returns notes in the lin/db/db.json file
router.get('/notes', (req, res) => {
    res.json(notesArray);
});

//Posts a new note when user hits save button
router.post('/notes', (req, res) => {
    req.body.id = uniqid();

    let newNote = createNewNote(req.body, notesArray);

    res.json(newNote);
});

//Deletes a note when user hits trash can icon
router.delete('/notes/:id', (req, res) => {
    const idToRemove = req.params.id;

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