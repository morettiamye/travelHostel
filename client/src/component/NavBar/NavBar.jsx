import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = (props) => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand ">
      <h1 className="has-text-black is-uppercase is-size-1"><a href="/">Virtual Hostel</a></h1>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            {props.isLoggedIn ? <div>
              <button className="button is-link is-medium" onClick={props.handleLogOut}>
                Log Out
          </button>
              <Link to="/dashboard" className="button is-link is-medium">
                Dashboard
          </Link>
            </div> :
              <div>
                <Link to="/login" className="button is-link is-medium">
                  Log in
            </Link>
                <Link to="/signup" className="button is-link is-medium">
                  Sign Up
            </Link>
              </div>}
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default NavBar;
