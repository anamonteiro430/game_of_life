import React, { useState, useEffect } from "react";
import "./App.css";
import { Grid } from "./Components/Grid";
import { Header } from "./Components/Header";
import { Gen } from "./Components/Gen";

function App() {
  const numRows = 10;
  const numColumns = 15;
  const speed = 100;

  /* Helper function to clone array */
  function arrayClone(arr) {
    return JSON.parse(JSON.stringify(arr));
  }

  const [state, setState] = useState({
    generation: 0,
    grid: Array(numRows)
      .fill()
      .map(() => Array(numColumns).fill(false)),
  });

  /*   useEffect(() => {
    const interval = setInterval(() => {
      simulation();
    }, 1000);
    return () => clearInterval(interval);
  }, []); */

  const selectCell = (row, column) => {
    console.log("old grid", state.grid);
    let newGrid = arrayClone(state.grid);
    newGrid[row][column] = !newGrid[row][column];
    setState({
      ...state,
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

  const playSim = () => {
    simulation();
  };
  const simulation = () => {
    console.log("running simultaion");

    let gen = state.grid;
    console.log("gen", gen);

    let nextGen = arrayClone(state.grid);
    console.log("next Gen", nextGen);

    for (let x = 1; x < numRows - 1; x++) {
      for (let y = 1; y < numColumns - 1; y++) {
        let neighbors = 0;
        if (gen[x - 1][y + 1]) {
          neighbors++;
        }
        if (gen[x][y + 1]) {
          neighbors++;
        }
        if (gen[x + 1][y + 1] === true) {
          neighbors++;
        }
        if (gen[x - 1][y]) {
          neighbors++;
        }
        if (gen[x + 1][y]) {
          neighbors++;
        }
        if (gen[x - 1][y - 1]) {
          neighbors++;
        }
        if (gen[x][y - 1]) {
          neighbors++;
        }
        if (gen[x + 1][y - 1]) {
          neighbors++;
        }
        if (gen[x][y] && neighbors < 2) {
          nextGen[x][y] = false;
        }
        if (gen[x][y] && neighbors > 3) {
          nextGen[x][y] = false;
        }
        if (gen[x][y] && neighbors === 2) {
          nextGen[x][y] = true;
        }
        if (gen[x][y] && neighbors === 3) {
          nextGen[x][y] = true;
        }
        if (!gen[x][y] && neighbors === 3) {
          nextGen[x][y] = true;
        }
      }
    }
    setState({
      generation: state.generation + 1,
      grid: nextGen,
    });
  };

  return (
    <div className="App">
      <Header seedGrid={seedGrid} simulation={simulation} playSim={playSim} />
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
