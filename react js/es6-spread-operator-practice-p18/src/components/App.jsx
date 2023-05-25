import React, { useState } from "react";

function App() {
  const [item,setitem]=useState("");
const [listitem,setlist]=useState([]);
function listnewitem(event){
   setitem(event.target.value);
}
function handleclick(){
  setlist(prevvalue=>{ return[...prevvalue,item];});
}
return(
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={listnewitem} value={item} />
        <button onClick={handleclick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listitem.map(todolist=><li>{todolist}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
