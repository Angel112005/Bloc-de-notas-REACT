
import React, { useState } from 'react';
import TextInput from '../atoms/TextInput';
import Button from '../atoms/Button';
import './NoteForm.css';

function NoteForm({ onAddNote }) {
  const [note, setNote] = useState('');

  function handleChange(e) {
    setNote(e.target.value);
  }

  function handleAddNote() {
    if (note.trim() !== '') {
      onAddNote(note);
      setNote('');
    }
  }

  return (
    <div className="note-form">
      <TextInput value={note} onChange={handleChange} placeholder="Escribe una nota..." />
      <Button onClick={handleAddNote} label="Agregar Nota" />
    </div>
  );
}

export default NoteForm;
