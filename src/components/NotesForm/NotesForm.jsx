import { useState } from "react";

export default function NoteForm({ addNote }) {
    const [newNote, setNewNote] = useState('');

    function _handleSubmit(evt) {
        evt.preventDefault;
        addNote(newNote);
        setNewNote('');
    }

    return (
        <form onSubmit={_handleSubmit}>
            <label>Note:</label>
            <textarea value={newNote} onChange={(evt) => setNewNote(evt.target.value)}></textarea>

            <label>Add Note:</label>
            <button>Add Note</button>
        </form>
    )

}