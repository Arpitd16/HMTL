import react from "react";
import reactdom from "react-dom";

function Headin() {
  return <h1>the list of the food</h1>;
}

reactdom.render(
  <div>
    <Headin />
    <ul>
      <li>mango</li>
      <li>banana</li>
      <li>wattermalen</li>
    </ul>
  </div>,
  document.getElementById("root")
); 
