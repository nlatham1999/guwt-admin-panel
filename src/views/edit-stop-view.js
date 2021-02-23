//component for the edit stop view
//access through the EditTour component

import React from 'react'

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import MediaView from "./media-view";
//import the css module
import Map from "../components/map";



const EditStop = ({setEditStopMode, stops, stopIndex, setTriggerUpdateTour, tour_id}) => {


    return (
        <div>

            <Map />

            {/* form to change the stop info */}
            <Form>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={4}>
                    Stop Name
                    </Form.Label>
                    <Col sm={8}>
                    <Form.Control placeholder={stops[stopIndex].stop_name} onChange={(event) => setNameFromInput(event)}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={4}>
                    Stop Description
                    </Form.Label>
                    <Col sm={8}>
                    <Form.Control placeholder={stops[stopIndex].stop_desc} onChange={(event) => setDescriptionFromInput(event)}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={4}>
                    latitude
                    </Form.Label>
                    <Col sm={8}>
                    <Form.Control placeholder={stops[stopIndex].lat} onChange={(event) => setLatitudeFromInput(event)}/>
                    </Col>
                </Form.Group>
                
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={4}>
                    latitude
                    </Form.Label>
                    <Col sm={8}>
                    <Form.Control placeholder={stops[stopIndex].long} onChange={(event) => setLongitudeFromInput(event)}/>
                    </Col>
                </Form.Group>
            </Form>

            <Button onClick={() => updateStop()}>update stop</Button>
            <Button onClick={() => goBackToTourEdit()}>go back</Button>

            <MediaView tour_id={tour_id} stop_id={stops[stopIndex]._id}/>
        </div>
    );

    function updateStop(){
        setTriggerUpdateTour(true);
    }

    function goBackToTourEdit(){
        setTriggerUpdateTour(true);
        setEditStopMode(false);
    }

    function setNameFromInput(event){
        stops[stopIndex].stop_name = event.target.value;
        // console.log("test 1")
    }

    function setDescriptionFromInput(event){
        stops[stopIndex].stop_desc = event.target.value;
        // console.log("test 2")
    }

    function setLatitudeFromInput(event){
        stops[stopIndex].lat = event.target.value;
        // console.log("test 3")
        // setTriggerUpdateTour(true);
    }

    function setLongitudeFromInput(event){
        stops[stopIndex].lon = event.target.value;
        // console.log("test 4")
        // setTriggerUpdateTour(true);
    }
}

export default EditStop;