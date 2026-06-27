import React from "react";
import { Link } from "react-router-dom";
import "./Herosection.css";

function Herosection() {
  return (
    <nav>
      <Link to="/Counter">Counter</Link>
      <Link to="/user">User</Link>
      <Link to="/Bulb">Bulb</Link>

    </nav>
  );
}

export default Herosection;