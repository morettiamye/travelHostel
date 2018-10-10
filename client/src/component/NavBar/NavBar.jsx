import React from "react";

const NavBar = () => (
  <nav className="navbar is-white" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <h1 className="has-text-black is-uppercase is-size-1">Virtual Hostel</h1>
      <a
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-link is-medium" href="/">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default NavBar;
