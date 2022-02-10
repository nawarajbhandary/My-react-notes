import React from "react";

function Main(activeNote) {
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input type="text" id="title" autofocus />
        <textarea id="body" placeholder="Write your notes here " />
      </div>
      <div className="app-main-notes-preview">
        <h1 className="preview-title"> {activeNote.title} </h1>
        <div className="markdown-preview">{activeNote.body}</div>
      </div>
    </div>
  );
}

export default Main;

//autofocus is used to made the input field auto get focus -- IT IS BOOLEAN ATTRIBUTES
