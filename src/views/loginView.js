import React, { Fragment } from "react";

import { Hero, HomeContent} from "../components";

import LoginButton from "../components/login-button.js"
import LogoutButton from "../components/logout-button.js"

const LoginView = () => (
  <div>
    <br></br>
    <p>Welcome to Gonzaga's walking tour app, please press the login button below</p>
    <LoginButton />
    <LogoutButton />
  </div>
);

export default LoginView;
