import { useState } from "react";

export default function NotesList({notes, deleteNote }) {
    const [reverse, setReverse] = useState(false);

    if(notes.length === 0) return <div>No Notes</div>

   
    const handleDeleteNote = async (id) => {
        await deleteNote(id);
    };
    

    const notesList = notes.map((n) => (
        <div key={n._id}>
            <div>
                { new Date(n.createdAt).toLocaleString() }: {n.text}
            </div>
            <div>
                <button onClick={() => handleDeleteNote(n._id)}>Delete Note</button>
            </div>
        </div>

    ));

    return (
        <div>
            <button onClick={() => setReverse(!reverse)}>Reverse the Notes!</button>
            { reverse ? notesList.reverse() : notesList }
        </div>
    )
}