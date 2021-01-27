//this component is to render new organizations

import React, { useState} from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import { useAuth0 } from "@auth0/auth0-react";
import { Col, Row } from "react-bootstrap";

const NewOrganization = ({setAddNewOrganization}) => {

    const [orgName, setOrgName] = useState("");
    const [success, setSuccess] = useState("");
    const [show, setShow] = useState(true);
    const [showModal, setShowModal] = useState(true);
    const [orgDepartment, setOrgDepartement] = useState("");
    const { user } = useAuth0();

    if (show && success) {
        return (
            <Modal show={true} onHide={() => cancelAdding()} centered>
            <Modal.Header closeButton>
                <Modal.Title>Add New Organization</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Alert variant="success">
                    <Alert.Heading>201: Created Resource</Alert.Heading>
                    <p>
                        Organization: {orgName} at {orgDepartment}
                    </p>
                </Alert>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => cancelAdding()}>Cancel</Button>
            </Modal.Footer>
        </Modal>
          );
    }

    return (
        <Modal show={showModal} onHide={() => cancelAdding()} centered>
            <Modal.Header closeButton>
                <Modal.Title>Add New Organization</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={4}>
                        Organization
                        </Form.Label>
                        <Col sm={8}>
                        <Form.Control placeholder="Gonzaga Univ." onChange={setNameFromInput}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={4}>
                        Department
                        </Form.Label>
                        <Col sm={8}>
                        <Form.Control placeholder="History" onChange={setDepartmentFromInput} />
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => cancelAdding()}>Cancel</Button>
                <Button variant="primary" onClick={() => addOrganization()}>Add Organization</Button>
            </Modal.Footer>
        </Modal>
    );

    function addOrganization(){
        const data = {
            name: orgName,
            department: orgDepartment,
            admin: [user.name]
        };
        axios
            .post(
                'https://backend.gonzagatours.app/api/organization', 
                data,
                {
                    'headers': {
                        'Authentication': process.env.REACT_APP_API_KEY
                    }
                })
            .then((response) => {
                if (response.status === 201){
                    setSuccess(true)
                    setShow(true)
                }
                else{
                    setSuccess(false)
                    setShow(true)
                }
                // setAddNewOrganization(false)
            }
                
            )
    }

    function cancelAdding(){
        setAddNewOrganization(false);
        setShowModal(false);
    }

    function setNameFromInput(event){
        setOrgName(event.target.value)
    }

    function setDepartmentFromInput(event){
        setOrgDepartement(event.target.value)
    }

}

export default NewOrganization;