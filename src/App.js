import React from "react";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <header className="header">
        <div className="header-title">
          <h1>Powerpuff Episodes</h1>
        </div>
      </header>
      {props.children}
    </div>
  );
}

export default App;
