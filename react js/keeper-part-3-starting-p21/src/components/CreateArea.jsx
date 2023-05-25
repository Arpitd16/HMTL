import React, { useState } from "react";

function CreateArea(props) {
  const [note, setnote] = useState({
    title: "",
    content: ""
  });
  function handlechange(event) {
    const { name, value } = event.target;
    setnote((prevnote) => {
      return {
        ...prevnote,
        [name]: value
      };
    });
  }
  function submited(event) {
    event.preventDefault();
    setnote({
      title: "",
      content: ""
    });
    props.addnote(note);
  }
  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handlechange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handlechange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submited}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
