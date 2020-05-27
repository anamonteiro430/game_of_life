import React, { useState, useEffect } from "react";
import "./Cell.css";

export const Cell = (props) => {
  const selectCell = () => {
    console.log("selectinh", props.cellId);
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
