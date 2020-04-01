import React from "react";

import logo from "../assets/temp-logo.jpg";
import add from "../assets/add-icon.png";

import "./Nav.scss";

function Nav() {
  return (
    <div className="nav-top">
      <img className="logo" src={logo} alt="DJ Streams Logo" />
      <h1>DJ Streams Live</h1>
      <img src={add} alt="add event" />
    </div>
  );
}

export default Nav;
