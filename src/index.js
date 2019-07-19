import React from "react";
import ReactDOM from "react-dom";
import Room from "./room";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Room />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
