import React from "react";

function Sidebar({ notes, onAddNote, onDeleteNote }) {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map((note) => (
          <div className="app-sidebar-note">
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button onClick={() => onDeleteNote(note.id)}>Delete</button>
            </div>
            <p> {(note.body && note.body.substr(0, 100), "...")} </p>

            <small className="note-meta">
              Last Modified{" "}
              {new Date(note.lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}
// In above case, if note.body exist then if TRUE apply substr(0,100) + "...", In sidebar view
//toLocalDateString("en-GB", { hour : "2 digit" , minute :"2 digit"})
// Here notes.map took map as Object {note}, it is not var
// Here we use define addNoteOnClick = () => {} and store on onAddNote var and passed as prop

export default Sidebar;