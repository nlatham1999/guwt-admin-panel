//loginView.js
//The initial login view for the admin panel

import React, { Fragment } from "react";

//import the login and logout buttons
import LoginButton from "../components/login-button.js"

//import the css module
import styles from "../css_modules/generalStyles.module.css";

const LoginView = () => (
  <div className={styles.generalStyle}>
    <br></br>
    <h1>Welcome to the Gonzaga's Walking Tour admin Page</h1>
    <br></br>
    <p>Please press the login button below</p>
    <div>
        <LoginButton />
    </div>
  </div>
);

export default LoginView;