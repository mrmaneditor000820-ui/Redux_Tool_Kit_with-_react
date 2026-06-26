import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Navbar() {
  return (
    <div className="navtop">
      <Link to="/">Home</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/user">User</Link>
      <Link to="/">Contact</Link>
    </div>
  );
}

export default Navbar;