import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.onChange} type="text" value={props.value} />
      <button onClick={props.onadd}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
