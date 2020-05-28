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

  useEffect(() => {
    console.log("seeding gridddddd");
    /*     seedGrid();
     */
  }, []);

  const selectCell = (row, column) => {
    console.log("old grid", state.grid);
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
    console.log("simultaing");
    let gen = state.grid;
    let nextGen = arrayClone(state.grid);

    for (let x = 1; x < numRows - 1; x++) {
      for (let y = 1; y < numColumns - 1; y++) {
        console.log("this is the cell", gen[x][y]);
        let neighbors = 0;
        if (gen[x - 1][y + 1]) {
          neighbors++;
          console.log("1");
        }
        if (gen[x][y + 1]) {
          neighbors++;
          console.log("2");
        }
        if (gen[x + 1][y + 1] === true) {
          neighbors++;
          console.log("3");
        }
        if (gen[x - 1][y]) {
          neighbors++;
          console.log("4");
        }
        if (gen[x + 1][y]) {
          neighbors++;
          console.log("5");
        }
        if (gen[x - 1][y - 1]) {
          neighbors++;
          console.log("6");
        }
        if (gen[x][y - 1]) {
          neighbors++;
          console.log("7");
        }
        if (gen[x + 1][y - 1]) {
          neighbors++;
          console.log("8");
        }
        if (gen[x][y] && neighbors < 2) {
          nextGen[x][y] = false;
          console.log("9");
        }
        if (gen[x][y] && neighbors > 3) {
          nextGen[x][y] = false;
          console.log(gen[x][y], "alive, more than 3 neighbors");
        }
        if (gen[x][y] && neighbors === 2) {
          nextGen[x][y] = true;
          console.log(gen[x][y], "alive, 2 neighbors");
        }
        if (gen[x][y] && neighbors === 3) {
          nextGen[x][y] = true;
          console.log(gen[x][y], "alive, 3 neighbors");
        }
        if (!gen[x][y] && neighbors === 3) {
          console.log(gen[x][y], "dead, 3 neighbors");

          nextGen[x][y] = true;
        }
      }
    }
    setState({
      generation: state.generation + 1,
      grid: nextGen,
    });
  };
  const startButton = () => {
    clearInterval(interval);
    let interval = setInterval(simulation, speed);
  };

  console.log("new grid", state.grid);

  return (
    <div className="App">
      <Header seedGrid={seedGrid} simulation={simulation} />
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
