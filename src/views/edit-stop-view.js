//component for the edit stop view
//access through the EditTour component

import React,{ useState } from 'react'

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import Card from "react-bootstrap/Card";
import { Col, Row, Container } from "react-bootstrap";
import MediaView from "./media-view";
//import the css module
import Map from "../components/map";
import { Component } from "react";



const EditStop = ({setEditStopMode, stops, stopIndex, setTriggerUpdateTour, tour_id}) => {

    const [stopLatLng, setStopLatLng] = useState({lat: parseFloat(stops[stopIndex].lat), lng: parseFloat(stops[stopIndex].long)})
    // console.log(stopLatLng.lat)

    stops[stopIndex].lat = stopLatLng.lat.toString();
    stops[stopIndex].long = stopLatLng.lng.toString();

    return (
        <div>
            <Container style={{paddingBottom: "4em"}}>
                <Row>
                    <Col>
                        <Map stopLatLng={stopLatLng} setStopLatLng={setStopLatLng}/>
                    </Col>

            {/* form to change the stop info */}
                    <Col>
                        <Button onClick={() => updateStop()}>update stop</Button>
                        <Button onClick={() => goBackToTourEdit()}>go back</Button>
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
                                <Form.Control placeholder={stopLatLng.lat} onChange={(event) => setLatitudeFromInput(event)}/>
                                </Col>
                            </Form.Group>
                            
                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column sm={4}>
                                longitude
                                </Form.Label>
                                <Col sm={8}>
                                <Form.Control placeholder={stopLatLng.lng} onChange={(event) => setLongitudeFromInput(event)}/>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>


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