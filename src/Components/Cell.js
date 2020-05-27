import React, { useState, useEffect } from "react";
import "./Cell.css";

export const Cell = (props) => {
  const [alive, setAlive] = useState(0);

  console.log("form cell", props);
  const selectCell = () => {
    props.selectCell(props.row, props.column);
  };
  return (
    <>
      <div
        className={props.cellClass}
        id={props.cellId}
        onClick={selectCell}
      ></div>
    </>
  );
};
