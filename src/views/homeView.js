//homeView.js

//this is the main page for the admin panel. 
//It will hold a list of tours where the user can edit them or add a new tour
//there will also be a side bar to go to the other tours
//there should also be a logout button at the topa

import React, { Fragment } from "react";

import { useAuth0 } from "@auth0/auth0-react";

//import the css module
import styles from "../css_modules/generalStyles.module.css";

//import the logout button: this is only temporary
import LogoutButton from "../components/logout-button.js"


const Home = () => {
  
  // const { user } = useAuth0();

  return (
    <div className={styles.generalStyle}>
      {/* <h>
        Hello {user.name}, welcome to the walking tour home:
      </h> */}
      <p>
        this is the home view
      </p>
    </div>
  );
}

export default Home;
