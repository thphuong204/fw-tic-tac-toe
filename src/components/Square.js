import React from "react";

function Square({ value, handleClick/*Your code here*/ }) {
  return (
    <button className={"square"} onClick={handleClick}>
      {value}
    </button>
  );
}

export default Square;
