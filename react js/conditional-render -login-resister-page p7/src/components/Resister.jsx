import React from "react";
import Input from "./input";

function Resister() {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Change Password" />
      <button type="submit">Resister</button>
    </form>
  );
}
export default Resister;
