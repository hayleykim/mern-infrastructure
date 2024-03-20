import { useState, useEffect } from 'react';
import * as notesAPI from '../../utilities/notes-api';
import NotesForm from '../../components/NotesForm/NotesForm';
import NotesList from '../../components/NotesList/NotesList';


export default function NotesPage() {
    const [notes, setNotes] = useState([]);

    async function addNote(note) {
        const newNote = await notesAPI.createNote(note);
        setNotes([...notes, newNote]);
    }

    async function deleteNote(id) {
        await notesAPI.deleteNote(id);
        const updatedNotes = notes.filter((n) => n._id !== id);
        setNotes(updatedNotes);
    }

    useEffect(() => {
        notesAPI.getNotes().then((notes) => {
            setNotes(notes);
        });
    },[]);

    return (
        <div>
            <h1>Notes Page</h1>
            <NotesForm addNote={addNote}/>
            <NotesList notes={notes} deleteNote={deleteNote} setNotes={setNotes}/>
        </div>
    )

}