import react from "react";
import reactdom from "react-dom";
import pie, { doublePi, triplePi } from "./math.js";

reactdom.render(
  <div>
    <ul>
      <li>{pie}</li>
      <li>{doublePi()}</li>
      <li>{triplePi()}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
