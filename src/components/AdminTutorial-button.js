// src/components/AdminTutorial-button.js

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';

//import the css module
// import styles from "../css_modules/generalStyles.module.css";

const AdminTutorialButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      type="button"
      className="btn"
      onClick={() => loginWithRedirect()}
    >
      Admin Tutorial 
    </Button>
  );
};



export default AdminTutorialButton;
