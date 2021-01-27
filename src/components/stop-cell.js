//this is a cell for displaying a stops in the list of stops within the tour edit view

import React, { useState} from "react";
import axios from "axios";

//import all the bootsrap stuff
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";

import EditTour from "../views/editTourView";

//tour cell component
//parameters:
//  setStopEditMode: sets whehteher we are editing a stop or not
//  stopIndex: the index of the stop being displayed in the cell
//  setStopIndex: sets the tour index: used for referenceing which tour was selected in the tour edit mode
//  stops: the list of tours
//  setStops: sets the tours
const StopCell = ({setStopEditMode, stopIndex, setStopIndex, stops, setStops, setDeleteStop}) => {

    return (
        //display the stop names, and delete, info, and edit buttons
        <Form>
            <Form.Group as={Row}>
                <Form.Label column sm={3}>
                    name: {stops[stopIndex].name}
                </Form.Label>
                <Button column sm={3}>
                    Stop Info
                </Button>
                <Button column sm={3} onClick={() => editStopButton()}>
                    Edit Stop
                </Button>
                <Button column sm={3} onClick={() => deleteStopButton()}>
                    Delete Stop
                </Button>
            </Form.Group>
        </Form>
    );

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