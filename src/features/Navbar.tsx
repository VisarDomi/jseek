import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <>
      <nav>
        <Link to="/">Dashboard</Link>
        <br />
        <Link to="/create-application">Create Application</Link>
        <br />
        <Link to="/edit-application">Edit Application</Link>
      </nav>
    </>
  );
}

export default Navbar;
