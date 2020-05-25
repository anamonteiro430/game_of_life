import React, { useState } from "react";
import "./Grid.css";

export const Gen = () => {
  const [gen, setGen] = useState(0);
  return (
    <>
      <div class="gen">
        <h2>Generations: {gen}</h2>
      </div>
    </>
  );
};
