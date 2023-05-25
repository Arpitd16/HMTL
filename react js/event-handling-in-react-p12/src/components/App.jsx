import React, { useState } from "react";

function App() {
  const [textheading, settextheading] = useState("hello");
  const [ismouseover, setmouseover] = useState(false);
  function changecolor() {
    settextheading("submitted");
  }
  function changecolorblack() {
    setmouseover(true);
  }
  function changecolorwhite() {
    setmouseover(false);
  }
  return (
    <div className="container">
      <h1>{textheading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: ismouseover ? "black" : "white" }}
        onClick={changecolor}
        onMouseOver={changecolorblack}
        onMouseOut={changecolorwhite}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
