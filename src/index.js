import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "./room";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
