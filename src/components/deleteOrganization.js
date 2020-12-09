//this component is to render new organizations

import React, { useState} from "react";
import LogoutButton from "../components/logout-button";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useAuth0 } from "@auth0/auth0-react";

const DeleteOrganization = ({organizationData, setOrgChosen}) => {

    
    return (

        <>
            <Button onClick={() => deleteTheOrganization}>Delete Organization</Button>
        </>
    );

    function deleteTheOrganization(){
        axios.delete(
            'https://backend.gonzagatours.app/api/organizations/' + organizationData._id,
            {
                'headers': {
                    'Authentication': process.env.REACT_APP_API_KEY
                }
            }).then(
                setOrgChosen(false)
            )
    }
}

export default DeleteOrganization;