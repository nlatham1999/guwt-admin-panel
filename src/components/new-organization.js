//this component is to render new organizations
//includes the form for filling out the new organization button and an alert for successful completion

import React, { useState, useEffect} from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";

//New Organization Component
//  setAddNewOrganization: setter for a bool. Lets the parent component know whether to render the component or not
const NewOrganization = ({setAddNewOrganization}) => {

    const [orgName, setOrgName] = useState(""); //holds the new organization name
    const [success, setSuccess] = useState(""); //used for showing the alert  
    const [show, setShow] = useState(true);     //used to determine whether to show the alert
    const [showModal, setShowModal] = useState(true);   //used to determine whether to show the modal
    const [orgDepartment, setOrgDepartement] = useState("");    //holds the organization name
    const { user } = useAuth0();    //holds user information
    const [organizationNames, setOrganizationNames] = useState([]); //holds the names if the other organizations
    
    //this is our constructor
    useEffect(() => {
        getOrganizationNames();
      }, []);

    //displays the alert upon sucessful completion of an organization
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

    //displays the form for creating a new organization
    return (
        <Modal show={showModal} onHide={() => cancelAdding()} centered>
            <Modal.Header closeButton>
                <Modal.Title>Add New Organization</Modal.Title>
            </Modal.Header>


            <Modal.Body>
                <Form>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={4}>
                        {organizationNames[0]}
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

    //creates a new organization from the form and uploads it to the server
    function addOrganization(){
        if(doesOrganizationExist()){
            return
        }
        const data = {
            name: orgName,
            department: orgDepartment,
            admin: user.name,
            moderators: [],
            prospectives: []
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
            }
        )
    }

    //action for the cancel button
    function cancelAdding(){
        setAddNewOrganization(false);
        setShowModal(false);
    }

    //sets the name from the form
    function setNameFromInput(event){
        setOrgName(event.target.value)
    }

    //sets the department from the form
    function setDepartmentFromInput(event){
        setOrgDepartement(event.target.value)
    }

    function doesOrganizationExist(){
        if(organizationNames.includes(orgName)){
            return true;
        }
        return false;
    }

    function getOrganizationNames(){
        axios.get('https://backend.gonzagatours.app/api/organizations', {
            'headers': {
              'Authentication': process.env.REACT_APP_API_KEY
            },
          responseType: 'json',
           })
        .then(response => {
            var data = []
            var group
            for(group in response.data.data){
                data.push(response.data.data[group].name)
            }
            setOrganizationNames(data)
        })
    }



}

export default NewOrganization;