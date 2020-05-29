import React from "react";
import "./Header.css";

export const Header = (props) => {
  const simulation = () => {
    props.simulation();
  };

  const stop = () => {
    props.setRunning(false);
  };

  console.log("PROPS FROM HEADER", props.running);
  return (
    <>
      <div class="header">
        <h1>Game of Life</h1>
        <div className="controls">
          <button onClick={props.seedGrid}>Seed</button>
          <button onClick={simulation}>Start</button>
          <button onClick={stop}>Stop</button>
          <button onClick={props.clearGrid}>Clear</button>
        </div>
      </div>
    </>
  );
};
