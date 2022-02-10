import React, { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Main from "./Main";
import Sidebar from "./Sidebar";

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const addNoteOnClick = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
  };

  // Use of Rest operator is so immensly amazing out here, On adding the new Notes
  // After clicking addNoteOnClick EventListner, setNotes generate new note and
  // Append that new note to the previously made new notes using setNotes([newNote, ...notes])
  // setNotes([newNotes...notes ]), update state of notes and ...notes paste the all remain note and display as append MODE

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        // if note.id and activeNote index match then return updatedNote;
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotesArray);
  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };

  // Here idToDelete if match with the associated notes then, It would filter
  //FILTER occur in such a way that, The id other than note.id will be shown and target will be remain!

  //HELPER FUNCTION

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  // getActiveNote determines, which of the following is the NOTE we clicked using find()

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={addNoteOnClick}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;

// In react UUID library is used to play around with unique id using package
// <Sidebar notes = {notes} props is passed as object
