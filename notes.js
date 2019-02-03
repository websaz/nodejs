const fs = require('fs')

var fetchNotes = () => {
    try {
        var notesstring = fs.readFileSync('notes-data.json');
        return JSON.parse(notesstring)
}  catch (error){
        return []
}
}

var saveNotes =(notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes))
}
var addNote= (title,body) => {
    var notes = [];
    var note = {
        title,
        body
    }

    var dublicateNotes = notes.filter((note) => note.title === title)
    console.log(dublicateNotes)
if(dublicateNotes.length == 0){
    notes.push(note);
   
}
    
    
}
