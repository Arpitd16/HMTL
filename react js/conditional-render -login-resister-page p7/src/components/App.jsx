import React from "react";
import Input from "./input.jsx";
import Login from "./Login.jsx";
import Resister from "./Resister.jsx";

var isLoggIn = true;
// function renderConditionally() {
//   if (isLoggIn === 1) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login />;
//   }
// }
function App() {
  return (
    <div className="container">
      {isLoggIn === true ? <Resister /> : <Login />}
    </div>
  );
}

export default App;
