import React from "react";
import "./Header.css";

export const Header = (props) => {
  const seed = () => {
    console.log("propd from header", props);
  };
  return (
    <>
      <div class="header">
        <h1>Game of Life</h1>
        <div className="controls">
          <button onClick={seed}>Seed</button>
          <button onClick={props.simulation}>Start</button>
        </div>
      </div>
    </>
  );
};
