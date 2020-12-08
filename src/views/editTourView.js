//Component for the edit tour view

import React, {useState} from "react";

//import the css module
// import styles from "../css_modules/generalStyles.module.css";

//import the edit stop component
import EditStop from "./editStopView";
import Button from "react-bootstrap/Button";

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
        <div>
            <h1>This is the edit tour view</h1>
            <p>
            stuff to do:
            <ul>
                <li>view stops</li>
                <li>edit stops</li>
            </ul>
            </p>
            <Button onClick={() => goBackToHome()}>go back</Button>
            <Button onClick={() => goToEditStop()}>edit stop</Button>
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