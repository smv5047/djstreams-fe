import React from "react";

import Nav from "../src/components/Nav.js";
import Dashboard from "../src/components/Dashboard";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Nav />
      <Dashboard />
    </div>
  );
}

export default App;
