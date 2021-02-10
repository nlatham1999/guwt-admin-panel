// src/components/login-button.js

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';

//import the css module
// import styles from "../css_modules/generalStyles.module.css";


//login button component
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      type="button"
      className="btn"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </Button>
  );
};



export default LoginButton;

