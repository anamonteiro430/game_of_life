import React, { useState } from "react";
import "./Grid.css";
import { Cell } from "./Cell";

export const Grid = (props) => {
  /* function seed - is going to populate the grid array with random 0's and 1's
  2 nested loops - col is outer and inner is rows
  grid[x][y] is 0 or 1
  */

  const width = props.numColumns * 16;
  let rows = []; /*store grid */
  for (let x = 0; x < props.numRows; x++) {
    for (let y = 0; y < props.numColumns; y++) {
      let cellId = x + "_" + y;

      let cellClass = props.state.grid[x][y] == 0 ? "dead" : "alive";
      rows.push(
        <Cell
          cellClass={cellClass}
          key={cellId}
          cellId={cellId}
          row={x}
          column={y}
          selectCell={props.selectCell}
        />
      );
    }
  }

  console.log("this is rows array", rows);

  return (
    <>
      <div className="grid" style={{ width: width }}>
        {rows}
      </div>
    </>
  );
};
