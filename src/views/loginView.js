//component for the initial login view for the admin panel
//access through the main App component

import React, { Fragment } from "react";
import { Jumbotron } from "react-bootstrap";
import Container from 'react-bootstrap/Container';

//import the login and logout buttons
import LoginButton from "../components/login-button.js"

// //import the css module
// import styles from "../css_modules/generalStyles.module.css";

const LoginView = () => {

  return(
    <Container class="p-3">
      <Jumbotron>
      <br></br>
      <h1>Gonzaga University Walking Tour Admin Panel</h1>
      <br></br>
      <p>Please press the login button below</p>
      <div>
          <LoginButton />
      </div>
      </Jumbotron>
    </Container>
  );
  }

export default LoginView;
