import React from "react";
import { useHistory } from "react-router-dom";

function IntroDashBoard() {
  let history = useHistory();
  function handleClick() {
    // history.push('/dashboard');
    history.push("/splash");
  }
  return (
    <div
      className="w-full md:min-h-[600px] cursor-pointer"
      onClick={handleClick}
    ></div>
  );
}

export default IntroDashBoard;
