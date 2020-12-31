import React, { useState} from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";

import EditTour from "../views/editTourView";


const TourCell = ({setTourEditMode, tourIndex, setTourIndex, tours, setTours}) => {


    return (
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
                <Button column sm={3}>
                    Delete Tour
                </Button>
            </Form.Group>
        </Form>
    );

    function editTourButton(){
        setTourIndex(tourIndex);
        setTourEditMode(true);
    }

}

export default TourCell