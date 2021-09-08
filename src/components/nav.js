import React, { Component } from "react";
import "../styles/navbar.css";

class Nav extends Component {
  render() {
    return (
      <div className="container">
        <Brand />
        <Ul />
      </div>
    );
  }
}

function Ul() {
  return (
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Service</li>
      <li>Contact</li>
    </ul>
  );
}

function Brand() {
  return <h1>Younes</h1>;
}

export default Nav;
