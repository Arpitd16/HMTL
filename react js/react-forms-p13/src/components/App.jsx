import React, { useState } from "react";

function App() {
  const [name, setname] = useState("");
  const [headingtext, setheading] = useState("");
  function handlechange(event) {
    console.log(event.target.value);
    setname(event.target.value);
  }
  function handleclick() {
    setheading(name);
  }
  return (
    <div className="container">
      <h1>Hello {headingtext}</h1>
      <form onSubmit={handleclick}>
        <input
          onChange={handlechange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
