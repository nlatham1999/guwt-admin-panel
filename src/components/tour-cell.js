//this is a cell for displaying a tour in the list of tours within the home view

import React, { useState} from "react";
import axios from "axios";

//import all the bootsrap stuff
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";

import EditTour from "../views/editTourView";

//tour cell component
//parameters:
//  setTourEditMode: sets whehteher we are editing a tour or not
//  tourIndex: the index of the tour being displayed in the cell
//  setTourIndex: sets the tour index: used for referenceing which tour was selected in the tour edit mode
//  tours: the list of tours
//  setTours: sets the tours
const TourCell = ({setTourEditMode, tourIndex, setTourIndex, tours, setTours, setDeleteTour}) => {

    return (
        //display the tour name and #of stops, and delete, info, and edit buttons
        <Form>
            <Form.Group as={Row}>
                <Form.Label column sm={3}>
                    name: {tours[tourIndex].name}
                </Form.Label>
                <Form.Label column sm={3}>
                    no. of stops: {tours[tourIndex].stops.length}
                </Form.Label>
                <Button column sm={3}>
                    Tour Info
                </Button>
                <Button column sm={3} onClick={() => editTourButton()}>
                    Edit Tour
                </Button>
                <Button column sm={3} onClick={() => deleteTourButton()}>
                    Delete Tour
                </Button>
            </Form.Group>
        </Form>
    );

    //handles the edit tour button
    function editTourButton(){
        setTourIndex(tourIndex);
        setTourEditMode(true);
    }

    function deleteTourButton(){
        setDeleteTour(true);
    }

}

export default TourCell