import React from "react";

import Nav from "../src/components/Nav.js";
import Dashboard from "../src/components/Dashboard";
import AddEvent from "../src/components/AddEvent";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Nav />
      <Dashboard />
      <AddEvent />
    </div>
  );
}

export default App;
