import React, { useState } from "react";
import "./App.css";
import { Grid } from "./Components/Grid";
import { Header } from "./Components/Header";
import { Gen } from "./Components/Gen";

function App() {
  const numRows = 30;
  const numColumns = 50;
  const spedd = 100;

  const [state, setState] = useState({
    gen: 0,
    grid: Array(numRows)
      .fill()
      .map(() => Array(numColumns).fill(0)),
  });

  const selectCell = (numRows, numColumns) => {
    let newGrid = Array(state.grid);
    newGrid[numRows][numColumns] = !newGrid[numRows][numColumns];
    setState({
      grid: newGrid,
    });
  };

  return (
    <div className="App">
      <Header />
      <Grid
        numColumns={numColumns}
        numRows={numRows}
        state={state}
        selectCell={selectCell}
      />
      <Gen state={state} />
    </div>
  );
}

export default App;
