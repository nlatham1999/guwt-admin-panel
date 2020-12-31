//Component for the edit tour view

import React, {useState} from "react";

//import the css module
// import styles from "../css_modules/generalStyles.module.css";

//import the edit stop component
import EditStop from "./editStopView";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";

//edit tour component
//parameters:
//  setTourEditMode: takes in a bool and determines whether to stay in this mode
const EditTour = ({setTourEditMode, tours, setTours, tourIndex}) => {

    const [editStopMode, setEditStopMode] = useState(false);

    if(editStopMode){
        return (
            <EditStop setEditStopMode={setEditStopMode} />
        );
    }

    return (
        <div>
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
            <Button onClick={() => goBackToHome()}>go back</Button>
            <Button onClick={() => goToEditStop()}>edit stop</Button>
        </div>
    );

    function goBackToHome(){
        setTourEditMode(false);
    }

    function goToEditStop(){
        setEditStopMode(true);
    }

    function setNameFromInput(event){
        tours[tourIndex].name = event.target.value;
    }

}

export default EditTour;