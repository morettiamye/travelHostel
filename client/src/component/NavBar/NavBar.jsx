import React from "react";
import Login from "../Login";
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import * as routes from '../constants/routes';

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

    <Login />
    <Route
        exact path={routes.LANDING}
        component={LandingPage}
      />
      <Route
        exact path={routes.SIGN_UP}
        component={SignUpPage}
      />
      <Route
        exact path={routes.SIGN_IN}
        component={SignInPage}
      />
      <Route
        exact path={routes.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route
        exact path={routes.HOME}
        component={HomePage}
      />
      <Route
        exact path={routes.ACCOUNT}
        component={AccountPage}
      />
  </nav>
);

export default NavBar;
