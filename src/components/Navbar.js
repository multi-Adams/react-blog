import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="m-6 ">
      <nav className="flex">
        <h2>Blog</h2>
        <div className="justify-self-end">
          <Link to="/">Home</Link>
          <Link to="create">Write</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
