//component for the edit stop view
//access through the EditTour component

import React from "react";
import Button from "react-bootstrap/Button";
//import the css module


const EditStop = ({setEditStopMode}) => {

    return (
        <div>
            <h1>This is the edit stop view</h1>
            stuff to do:
            <ul>
                <li>edit stop details</li>
                <li>get google maps plugin</li>
            </ul>
            <Button onClick={() => goBackToTourEdit()}>go back</Button>
        </div>
    );

    function goBackToTourEdit(){
        setEditStopMode(false);
    }
}

export default EditStop;