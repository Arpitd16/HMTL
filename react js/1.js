//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import react from "react";
import reactdom from "react-dom";

const date=new Date();
const time=date.getHours();

const customstyle={
  color:""
}
let greeting;
if(time<12){
  greeting="Good Morning";
  customstyle.color="red";
}
else if(time<18){
  greeting="good afternoon";
  customstyle.color="green";
}
else{
  greeting="good night";
  customstyle.color="blue";
}

reactdom.render(<h1 className="heading" style={customstyle}>{greeting}</h1>,document.getElementById("root"))