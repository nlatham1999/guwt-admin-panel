//Component for the edit tour view

import React, {useState} from "react";

//import the css module
import styles from "../css_modules/generalStyles.module.css";

//import the edit stop component
import EditStop from "./editStopView";

//edit tour component
//parameters:
//  setTourEditMode: takes in a bool and determines whether to stay in this mode
const EditTour = ({setTourEditMode}) => {

    const [editStopMode, setEditStopMode] = useState(false);

    if(editStopMode){
        return (
            <EditStop setEditStopMode={setEditStopMode} />
        );
    }

    return (
        <div className={styles.generalStyle}>
            <h1>This is the edit tour view</h1>
            <p>
            stuff to do:
            <ul>
                <li>view stops</li>
                <li>edit stops</li>
            </ul>
            </p>
            <button onClick={() => goBackToHome()}>go back</button>
            <button onClick={() => goToEditStop()}>edit stop</button>
        </div>
      );

      function goBackToHome(){
          setTourEditMode(false);
      }

      function goToEditStop(){
          setEditStopMode(true);
      }
}

export default EditTour;