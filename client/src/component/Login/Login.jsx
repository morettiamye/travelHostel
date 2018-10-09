import React from "react";
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

const Login = () =>

    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                    <Link to={routes.SIGN_IN}><a class="button is-link is-medium">Log in</a></Link>
                </div>
            </div>
        </div>
    </div>


export default Login;