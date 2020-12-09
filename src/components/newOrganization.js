//this component is to render new organizations

import React, { useState} from "react";
import LogoutButton from "../components/logout-button";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useAuth0 } from "@auth0/auth0-react";

const NewOrganization = ({setAddNewOrganization}) => {

    const [orgName, setOrgName] = useState("");
    const [orgDepartment, setOrgDepartement] = useState("");
    const { user } = useAuth0();

    return (
        <div>
            <label htmlFor='org name'>enter the organization name</label>
            <input 
                name = 'org name'
                onChange = {setNameFromInput}
            />
            <br></br>
            <label htmlFor='org department'>enter the organization's category</label>
            <input 
                name = 'org department'
                onChange = {setDepartmentFromInput}
            />
            <br></br>
            <Button onClick={() => addOrganization()}>add organization</Button>
            <Button onClick={() => cancelAdding()}>cancel</Button>
        </div>
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