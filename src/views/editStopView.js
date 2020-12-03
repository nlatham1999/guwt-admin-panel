//component for the edit stop view
//access through the EditTour component

import React from "react";

//import the css module
import styles from "../css_modules/generalStyles.module.css";

const EditStop = ({setEditStopMode}) => {

    return (
        <div className={styles.generalStyle}>
            <h1>This is the edit stop view</h1>
            <p>
            stuff to do:
            <ul>
                <li>edit stop details</li>
                <li>get google maps plugin</li>
            </ul>
            </p>
            <button onClick={() => goBackToTourEdit()}>go back</button>
        </div>
    );

    function goBackToTourEdit(){
        setEditStopMode(false);
    }
}

export default EditStop;