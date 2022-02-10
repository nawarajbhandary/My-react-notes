import React, { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Main from "./Main";
import Sidebar from "./Sidebar";

function App() {
  const [notes, setNotes] = useState([]);

  const addNoteOnClick = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };

  // Here idToDelete if match with the associated notes then, It would filter
  //FILTER occur in such a way that, The id other than note.id will be shown and target will be remain!
  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={addNoteOnClick}
        onDeleteNote={onDeleteNote}
      />
      <Main />
    </div>
  );
}

export default App;

// In react UUID library is used to play around with unique id using package
// <Sidebar notes = {notes} props is passed as object
