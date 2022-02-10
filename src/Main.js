import React from "react";

function Main() {
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input type="text" id="title" autofocus />
        <textarea id="body" placeholder="Write your notes here " />
      </div>
      <div className="app-main-notes-preview">
        <h1 className="preview-title"> TITLE </h1>
        <div className="markdown-preview">note preview</div>
      </div>
    </div>
  );
}

export default Main;
