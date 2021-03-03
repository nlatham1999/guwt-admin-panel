//this is a cell for displaying a stops in the list of stops within the tour edit view

import React from "react";
// import axios from "axios";

//import all the bootsrap stuff
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";

//tour cell component
//parameters:
//  setStopEditMode: sets whehteher we are editing a stop or not
//  stopIndex: the index of the stop being displayed in the cell
//  setStopIndex: sets the tour index: used for referenceing which tour was selected in the tour edit mode
//  stops: the list of tours
//  setStops: sets the tours
const StopCell = ({setStopEditMode, stopIndex, setStopIndex, stops, setDeleteStop, updateTour}) => {

    return (
        //display the stop names, and delete, info, and edit buttons
        <Form>
            <Form.Group as={Row}>
                <Form.Label column sm={3}>
                    {stops[stopIndex] &&
                    <>Stop: {stops[stopIndex].stop_name}</>
                    }       
                </Form.Label>
                <Button style={{marginRight: '1%'}} column sm={3}>
                    Stop Info
                </Button>
                <Button style={{marginRight: '1%'}} column sm={3} onClick={() => editStopButton()}>
                    Edit Stop
                </Button>
                <Button variant="warning" style={{marginRight: '1%'}} column sm={3} onClick={() => deleteStopButton()}>
                    Delete Stop
                </Button>
                <Button variant="link" column sm={3} onClick={() => moveUp()}>
                    ⬆
                </Button>
                <Button variant="link" column sm={3} onClick={() => moveDown()}>
                    ⬇
                </Button>
            </Form.Group>
        </Form>
    );

    //moves the stop up to the next index
    function moveUp(){
        if(stopIndex === 0){
            return;
        }

        var tempStop = stops[stopIndex-1];
        stops[stopIndex-1] = stops[stopIndex];
        stops[stopIndex] = tempStop;

        updateTour();
        
    }

    //moves the stop down to the next index
    function moveDown(){
        if(stopIndex === stops.length - 1){
            return;
        }

        var tempStop = stops[stopIndex+1];
        stops[stopIndex+1] = stops[stopIndex];
        stops[stopIndex] = tempStop;
        
        updateTour();
    }

    function deleteStopButton(){
        setDeleteStop(true);
    }

    //handles the edit tour button
    function editStopButton(){
        setStopIndex(stopIndex);
        setStopEditMode(true);
    }

}

export default StopCell