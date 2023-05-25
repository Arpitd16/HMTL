import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../notes.js";

function App() {
  return (
    <div>
      <Header />
      {Notes.map((Not) => (
        <Note key={Not.id} title={Not.title} content={Not.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
