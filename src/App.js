import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Grid } from "./Components/Grid";
import { Header } from "./Components/Header";
import { Gen } from "./Components/Gen";

function App() {
  return (
    <div className="App">
      <Header />
      <Grid />
      <Gen />
    </div>
  );
}

export default App;
