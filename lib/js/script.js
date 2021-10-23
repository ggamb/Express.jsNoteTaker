const fs = require('fs');
const path = require('path');


const createNewNote = (body, notesArray) => {
    const newNote = body;
    console.log("before adding", notesArray);
    notesArray.push(newNote);
    console.log("before filewright", notesArray);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notesArray }, null, 2)
    );
    return newNote;
}

const writeAfterDelete = (notesArray) => {
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notesArray }, null, 2)
    );
}

module.exports = {createNewNote, writeAfterDelete};