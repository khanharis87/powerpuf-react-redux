import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <header className="header">
        <div className="header-title">
          <h1>Powerpuff Episodes</h1>
          <Link to="/"> Home </Link>
        </div>
      </header>
      {props.children}
    </div>
  );
}

export default App;
