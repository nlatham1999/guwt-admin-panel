import React, { Fragment } from "react";

import { Hero, HomeContent} from "../components";

import LoginButton from "../components/login-button.js"
import LogoutButton from "../components/logout-button.js"

const LoginView = () => (
  <div style={{margin: 20},{textAlign: "center"}}>
    <br></br>
    <p>Welcome to Gonzaga's walking tour app, please press the login button below</p>
    <div>
        <LoginButton />
        <LogoutButton />
    </div>
  </div>
);

export default LoginView;
