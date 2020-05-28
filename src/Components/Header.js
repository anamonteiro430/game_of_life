import React from "react";
import "./Header.css";

export const Header = (props) => {
  return (
    <>
      <div class="header">
        <h1>Game of Life</h1>
        <div className="controls">
          <button onClick={props.seedGrid}>Seed</button>
          <button onClick={props.playSim}>Start</button>
        </div>
      </div>
    </>
  );
};
