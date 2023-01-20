import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-Grey">
      <NavLink className="navbar-brand" to="/">
        My App
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/SignUp">
            Sign Up
          </NavLink>
          <NavLink className="nav-item nav-link" to="/Login">
            Sign In
          </NavLink>
          <NavLink className="nav-item nav-link" to="/">
            Posts
          </NavLink>
          <NavLink className="nav-item nav-link" to="/logout">
            Sign out
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
