import React from "react";
import { Route } from "react-router-dom";

import Nav from "../src/components/Nav.js";
import Dashboard from "../src/components/Dashboard";
import AddEvent from "../src/components/AddEvent";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/AddEvent" component={AddEvent} />
      </div>
    </div>
  );
}

export default App;
