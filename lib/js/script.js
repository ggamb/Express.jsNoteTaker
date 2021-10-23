const fs = require('fs');
const path = require('path');

//Creates a new note, adds it to the passed array, and writes the user's input to the file
const createNewNote = (body, notesArray) => {
    const newNote = body;
    notesArray.push(newNote);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notesArray }, null, 2)
    );
    return newNote;
}

//Deletes a note based on the note id
const writeAfterDelete = (notesArray) => {
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notesArray }, null, 2)
    );
}

module.exports = {createNewNote, writeAfterDelete};