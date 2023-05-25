import react from "react";
import reactdom from "react-dom";
import { add, multiplay, subtract, division } from "./calculator.js";

reactdom.render(
  <div>
    <ul>
      <li>{add(2, 4)}</li>
      <li>{multiplay(2, 2)}</li>
      <li>{subtract(4, 2)}</li>
      <li>{division(1, 2)}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
