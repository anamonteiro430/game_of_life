import React, { useState, useEffect, useRef, useCallback } from "react";
import "./App.css";
import { Grid } from "./Components/Grid";
import { Header } from "./Components/Header";
import { Gen } from "./Components/Gen";

function App() {
  const numRows = 10;
  const numColumns = 30;

  const [state, setState] = useState({
    info: "initial state",
    generation: 0,
    grid: Array(numRows)
      .fill()
      .map(() => Array(numColumns).fill(false)),
  });
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) {
      console.log("im not rnning");
    } else {
      const interval = setInterval(() => {
        console.log("This will run every second!");
        simulation();
      }, 100);
      return () => clearInterval(interval);
    }
  }, [state.grid, state.generation]);

  /* Helper function to clone array */
  function arrayClone(arr) {
    return JSON.parse(JSON.stringify(arr));
  }

  const selectCell = (row, column) => {
    let newGrid = arrayClone(state.grid);
    newGrid[row][column] = !newGrid[row][column];
    setState({
      info: "selecting cell",
      generation: 0,
      grid: newGrid,
    });
  };

  const seedGrid = () => {
    clearGrid();
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
      info: "SEEDING state",
      grid: newGrid,
    });
  };

  const clearGrid = () => {
    let newGrid = arrayClone(state.grid);
    for (let x = 0; x < numRows; x++) {
      for (let y = 0; y < numColumns; y++) {
        newGrid[x][y] = false;
      }
    }

    setState({
      info: "CLEARING state",
      generation: 0,
      grid: newGrid,
    });
  };

  /*  const simulation = useCallback(() => {
    console.log("running ref is", runningRef.current);
    if (!runningRef.current) {
      return;
    }
    console.log("SIMUUU", runningRef.current);

    setState({
      info: "SIMULATION runneddd",
      generation: state.generation + 1,
      ...state,
    });
    console.log("STATEE", state);
  }, []); */

  const simulation = () => {
    /*  setState({
      generation: state.generation,
      grid: state.grid,
    }); */
    setRunning(true);
    let gen = state.grid;
    let nextGen = arrayClone(state.grid);
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
      info: "SIMULATION state",
      generation: state.generation + 1,
      grid: nextGen,
    });
    console.log("from app");
  };

  return (
    <div className="App">
      <Header
        seedGrid={seedGrid}
        simulation={simulation}
        clearGrid={clearGrid}
        running={running}
        setRunning={setRunning}
      />
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
