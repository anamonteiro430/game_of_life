import React from "react";
import "./Header.css";

export const Header = (props) => {
  const simulation = () => {
    props.simulation();
  };

  const stop = () => {
    props.setRunning(false);
  };

  const step = () => {
    props.setRunning(false);
    props.step();
  };

  return (
    <>
      <div class="header">
        <h1>Game of Life</h1>
        <p>
          Rules The universe of the Game of Life is an infinite, two-dimensional
          orthogonal grid of square cells, each of which is in one of two
          possible states, live or dead, (or populated and unpopulated,
          respectively). Every cell interacts with its eight neighbours, which
          are the cells that are horizontally, vertically, or diagonally
          adjacent.
        </p>
        <p>
          At each step in time, the following transitions occur:
          <br />
          <b>
            Any live cell with fewer than two live neighbours dies, as if by
            underpopulation. Any live cell with two or three live neighbours
            lives on to the next generation. Any live cell with more than three
            live neighbours dies, as if by overpopulation. Any dead cell with
            exactly three live neighbours becomes a live cell, as if by
            reproduction.
          </b>
        </p>
        <div className="controls">
          <button onClick={props.seedGrid}>Seed</button>
          <button onClick={simulation}>Start</button>
          <button onClick={stop}>Stop</button>
          <button onClick={props.clearGrid}>Clear</button>
          <button onClick={props.faster}>Faster</button>
          <button onClick={props.slower}>Slower</button>
          <button onClick={step}>Next Step</button>
        </div>
      </div>
    </>
  );
};
