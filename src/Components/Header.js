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
