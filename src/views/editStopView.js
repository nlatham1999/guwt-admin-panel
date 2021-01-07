//component for the edit stop view
//access through the EditTour component

import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
//import the css module


const EditStop = ({setEditStopMode, stops, stopIndex}) => {

    return (
        <div>
            {/* form to change the stop info */}
            <Form>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={4}>
                    Stop Name
                    </Form.Label>
                    <Col sm={8}>
                    <Form.Control placeholder={stops[stopIndex].name} onChange={(event) => setNameFromInput(event)}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={4}>
                    Stop Description
                    </Form.Label>
                    <Col sm={8}>
                    <Form.Control placeholder={stops[stopIndex].description} onChange={(event) => setDescriptionFromInput(event)}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={4}>
                    latitude
                    </Form.Label>
                    <Col sm={8}>
                    <Form.Control placeholder={stops[stopIndex].latitude} onChange={(event) => setLatitudeFromInput(event)}/>
                    </Col>
                </Form.Group>
                
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={4}>
                    latitude
                    </Form.Label>
                    <Col sm={8}>
                    <Form.Control placeholder={stops[stopIndex].longitude} onChange={(event) => setLongitudeFromInput(event)}/>
                    </Col>
                </Form.Group>
            </Form>

            <Button onClick={() => goBackToTourEdit()}>go back</Button>
        </div>
    );

    function goBackToTourEdit(){
        setEditStopMode(false);
    }

    function setNameFromInput(event){
        stops[stopIndex].name = event.target.value;
    }

    function setDescriptionFromInput(event){
        stops[stopIndex].description = event.target.value;
    }

    function setLatitudeFromInput(event){
        stops[stopIndex].latitude = event.target.value;
    }

    function setLongitudeFromInput(event){
        stops[stopIndex].longitude = event.target.value
    }
}

export default EditStop;