//component for the edit stop view
//access through the EditTour component

import React, { Fragment, useState} from "react";
import { render } from "react-dom";
import Button from "react-bootstrap/Button";

//import the css module
// import styles from "../css_modules/generalStyles.module.css";
import EditTour from "./editTourView";

const EditStop = ({setEditStopMode}) => {

    return (
        <div>
            <h1>This is the edit stop view</h1>
            <p>
            stuff to do:
            <ul>
                <li>edit stop details</li>
                <li>get google maps plugin</li>
            </ul>
            </p>
            <Button onClick={() => goBackToTourEdit()}>go back</Button>
        </div>
    );

    function goBackToTourEdit(){
        setEditStopMode(false);
    }
}

export default EditStop;