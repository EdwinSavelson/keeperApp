import React, { useState } from "react";
import { Fab } from "@material-ui/core";
import Zoom from "@material-ui/core/Zoom";
import AddIcon from "@material-ui/icons/Add";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  const [displayElement, setDisplayElement] = useState(false);

  function toggleElement() {
    setDisplayElement(true);
  }

  return (
    <div>
      <form className="create-note">
        {displayElement && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={toggleElement}
          value={note.content}
          placeholder="Take a note..."
          rows={displayElement ? "3" : "1"}
        />
        <Zoom in={displayElement}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
