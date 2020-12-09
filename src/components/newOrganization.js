//this component is to render new organizations

import React, { useState} from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useAuth0 } from "@auth0/auth0-react";

const NewOrganization = ({setAddNewOrganization}) => {

    const [orgName, setOrgName] = useState("");
    const [orgDepartment, setOrgDepartement] = useState("");
    const { user } = useAuth0();

    return (

        <>
        <Modal show={true} onHide={() => cancelAdding} centered>
            <Modal.Header closeButton>
                <Modal.Title>Add New Organization</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <label htmlFor='org name'>organization name:</label>
                <input 
                    name = 'org name'
                    onChange = {setNameFromInput}
                />
                <br></br>
                <label htmlFor='org department'>organization department:</label>
                <input 
                    name = 'org department'
                    onChange = {setDepartmentFromInput}
                />
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => cancelAdding()}>Cancel</Button>
                <Button variant="primary" onClick={() => addOrganization()}>Add Organization</Button>
            </Modal.Footer>
        </Modal>
        </>
    );

    function addOrganization(){
        const data = {
            name: orgName,
            department: orgDepartment,
            admin: user.name
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
            .then(
                setAddNewOrganization(false)
            )
    }

    function cancelAdding(){
        setAddNewOrganization(false);
    }

    function setNameFromInput(event){
        setOrgName(event.target.value)
    }

    function setDepartmentFromInput(event){
        setOrgDepartement(event.target.value)
    }

}

export default NewOrganization;