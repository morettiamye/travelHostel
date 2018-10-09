import React from "react";

const NavBar = () => (
  <nav class="navbar is-white" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <h1 class="has-text-black is-uppercase is-size-1">Virtual Hostel</h1>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-link is-medium" href="/">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default NavBar;
