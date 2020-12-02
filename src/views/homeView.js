//component for the home view
//accessed thorugh the OrganizationMainPage component

//this is the main page for the admin panel. 
//It will hold a list of tours where the user can edit them or add a new tour
//there will also be a side bar to go to the other tours
//there should also be a logout button at the topa

import React, { Fragmen, useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";

//import the css module
import styles from "../css_modules/generalStyles.module.css";

import EditTour from "./editTourView";

const Home = () => {
  
  // const { user } = useAuth0();

  const [tourEditMode, setTourEditMode] = useState(false);

  if(tourEditMode){
    return (
      <EditTour setTourEditMode = {setTourEditMode}/>
    );
  }

  return (
    <div className={styles.generalStyle}>
      <h1>This is the home view</h1>
      <p>
        stuff to do:
        <ul>
          <li>view tours</li>
          <li>enable selecting tours to see data</li>
          <li>edit tours</li>
          <li>add new tours</li>
        </ul>
      </p>
      <button onClick={() => editTourButton()}>edit/create new tour</button>
    </div>
  );

  function editTourButton(){
    setTourEditMode(true);
  }
}

export default Home;
