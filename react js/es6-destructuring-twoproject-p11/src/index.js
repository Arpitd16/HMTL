// import react from "react";
// import reactdom from "react-dom";
// import animals, { useanimals } from "./data";
// console.log(animals);
// const [cat, dog] = animals; //const cat=animals[0];
// console.log(useanimals(cat));
// const [animal, makeSound] = useanimals(cat);
// console.log(makeSound);
// makeSound();
// console.log(cat);
// const { name = "fullfy", sound = "purr" } = cat;
// // console.log(sound);
// const {
//   name,
//   sound,
//   feedrequirment: { food, water }
// } = cat;
// console.log(food);

//console.log(feedrequirment.food);

//2nd problem
//CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice.js";

const [honda, tesla] = cars;
//console.log(tesla.model);
const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;
const {
  coloursByPopularity: [hondaTopColour]
} = honda;
const {
  coloursByPopularity: [teslaTopColour]
} = tesla;
ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
