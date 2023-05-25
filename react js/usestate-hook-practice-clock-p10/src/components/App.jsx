import React, { useState } from "react";

function App() {
  setInterval(upadatetime, 1000);

  const now = new Date().toLocaleTimeString();
  const [time, settime] = useState(now);

  function upadatetime() {
    const newtime = new Date().toLocaleTimeString();
    settime(newtime);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={upadatetime}>Get Time</button>
    </div>
  );
}

export default App;
