import React from "react";
import "./Grid.css";
import { Cell } from "./Cell";

export const Grid = () => {
  let nCells = [1] * 100;
  console.log(nCells);
  return (
    <>
      <div class="grid">
        <Cell />
      </div>
    </>
  );
};
