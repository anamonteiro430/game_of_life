import React, { useState } from "react";
import "./Grid.css";

export const Gen = (props) => {
  console.log("props from gen", props);
  return (
    <>
      <div class="gen">
        <h2>Generation: {props.state.generation}</h2>
      </div>
    </>
  );
};
