
import React, { useState } from 'react';
import NoteForm from '../molecules/NoteForm';
import Button from '../atoms/Button';
import './NoteList.css';

function NoteList() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes([...notes, note]);
  }

  function deleteNote(index) {
    setNotes(notes.filter((_, i) => i !== index));
  }

  return (
    <div>
      <NoteForm onAddNote={addNote} />
      <div className="note-list">
        {notes.map((note, index) => (
          <div key={index} className="note-card">
            <p>{note}</p>
            <Button onClick={() => deleteNote(index)} label="Eliminar" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NoteList;
