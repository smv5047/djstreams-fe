import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/temp-logo.jpg";
import add from "../assets/add-icon.png";

import "./Nav.scss";

function Nav() {
  return (
    <div className="nav-top">
      <div className="nav-section">
        <h1></h1>
      </div>
      <div className="nav-section">
        <Link to="/">
          <img className="logo" src={logo} alt="DJ Streams Logo" />
        </Link>
      </div>
      <div className="nav-section">
        <Link to="/AddEvent">
          <img src={add} alt="add event" />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
