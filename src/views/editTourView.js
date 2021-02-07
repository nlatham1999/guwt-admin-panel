//Component for the edit tour view

import React, {useState} from "react";

//import the css module
// import styles from "../css_modules/generalStyles.module.css";

//import the edit stop component
import EditStop from "./editStopView";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";

import StopCell from "../components/stop-cell";

//edit tour component
//parameters:
//  setTourEditMode: takes in a bool and determines whether to stay in this mode
//  tours: the list of tours in the organization
//  setTours: updates the tours
//  tourIndex: the index of the tour that we are currently editing
const EditTour = ({setTourEditMode, tours, tourIndex}) => {

    const [editStopMode, setEditStopMode] = useState(false);
    const [stops, setStops] = useState(tours[tourIndex].stops);
    const [stopIndex, setStopIndex] = useState(0);
    const [deleteStop, setDeleteStop] = useState(false); //determines whether to delete a stop or not

    if(deleteStop){
        stops.splice(stopIndex, 1);
        setDeleteStop(false);
    }

    if(editStopMode){
        return (
            <EditStop setEditStopMode={setEditStopMode} stops={stops} stopIndex={stopIndex} />
        );
    }

    return (
        <div>
            {/* display the form to edit the tour name */}
            <Form>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={4}>
                    Tour Name
                    </Form.Label>
                    <Col sm={8}>
                    <Form.Control placeholder={tours[tourIndex].name} onChange={(event) => setNameFromInput(event)}/>
                    </Col>
                </Form.Group>
            </Form>
            {/* display the list of stops */}
            <Card style={{ width: '48rem' }}>
                <Card.Body>
                {tours[tourIndex].stops.map((stop, i) => (
                        <StopCell setStopEditMode={setEditStopMode} stopIndex={i} setStopIndex={setStopIndex} stops={stops} setStops={setStops} setDeleteStop={setDeleteStop}/>
                ))}
                </Card.Body>
            </Card>
            {/* go back home button */}
            <Button onClick={() => goBackToHome()}>go back</Button>
            <Button onClick={() => goToAddStop()}>add stop</Button>
        </div>
    );

    function goBackToHome(){
        setTourEditMode(false);
    }

    function goToAddStop(){
        const stop = {
            name: "new stop",
            latitude: 420,
            longitude: 69,
            description: "new stop description"
        }
        stops.push(stop);
        setStopIndex(stops.length - 1); //this line doesn't do anything, but the page does not rerender without it for some reason...
    }

    function setNameFromInput(event){
        tours[tourIndex].name = event.target.value;
    }

}

export default EditTour;