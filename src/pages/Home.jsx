
import React from 'react';
import NoteList from '../components/organisms/NoteList';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>BIENVENIDO AL BLOC DE NOTAS</h1>
      <NoteList />
    </div>
  );
}

export default Home;
