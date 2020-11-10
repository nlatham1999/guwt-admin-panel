// src/components/login-button.js

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

//import the css module
import styles from "../css_modules/generalStyles.module.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      type="button"
      class="btn"
      className={styles.buttonStyles}
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};



export default LoginButton;

