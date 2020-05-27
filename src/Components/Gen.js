import React, { useState } from "react";
import "./Grid.css";

export const Gen = (props) => {
  return (
    <>
      <div class="gen">
        <h2>Generation: {props.state.gen}</h2>
      </div>
    </>
  );
};
