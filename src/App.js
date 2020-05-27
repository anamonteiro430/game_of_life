import React, { useState, useEffect } from "react";
import "./App.css";
import { Grid } from "./Components/Grid";
import { Header } from "./Components/Header";
import { Gen } from "./Components/Gen";

function App() {
  const numRows = 30;
  const numColumns = 50;
  const speed = 100;

  /* Helper function to clone array */
  function arrayClone(arr) {
    return JSON.parse(JSON.stringify(arr));
  }

  const [state, setState] = useState({
    gen: 0,
    grid: Array(numRows)
      .fill()
      .map(() => Array(numColumns).fill(false)),
  });

  useEffect(() => {}, []);

  const selectCell = (row, column) => {
    let newGrid = arrayClone(state.grid);
    newGrid[row][column] = !newGrid[row][column];
    setState({
      grid: newGrid,
    });
  };

  const seedGrid = () => {
    console.log("seeding");
    let newGrid = arrayClone(state.grid);
    for (let x = 0; x < numRows; x++) {
      for (let y = 0; y < numColumns; y++) {
        if (Math.floor(Math.random() * 2) === 1) {
          newGrid[x][y] = true;
        }
      }
    }
    setState({
      ...state,
      grid: newGrid,
    });
  };
  const simulation = () => {
    let gen = state.grid;
    let nextGen = arrayClone(state.grid);

    for (let x = 0; x < numRows; x++) {
      for (let y = 0; y < numColumns; y++) {
        let neighbors = 0;
        if (gen[x - 1][y + 1] === 1) {
          neighbors++;
        }
        if (gen[x][y + 1] === 1) {
          neighbors++;
        }
        if (gen[x + 1][y + 1] === 1) {
          neighbors++;
        }
        if (gen[x - 1][y] === 1) {
          neighbors++;
        }
        if (gen[x + 1][y] === 1) {
          neighbors++;
        }
        if (gen[x - 1][y - 1] === 1) {
          neighbors++;
        }
        if (gen[x][y - 1] === 1) {
          neighbors++;
        }
        if (gen[x + 1][y - 1] === 1) {
          neighbors++;
        }
        if ((gen[x][y] = (true && neighbors < 2) || neighbors > 3)) {
          nextGen[x][y] === false;
        }
        if ((gen[x][y] = false && neighbors === 3)) {
          nextGen[x][y] === true;
        }
      }
    }
    setState({
      gen: state.gen + 1,
      grid: nextGen,
    });
  };
  const startButton = () => {
    clearInterval(interval);
    let interval = setInterval(simulation, speed);
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
      <Header seedGrid={seedGrid} />
    </div>
  );
}

export default App;
