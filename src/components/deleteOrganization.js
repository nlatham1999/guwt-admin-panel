//this component is to render new organizations

import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

const DeleteOrganization = ({organizationData, setOrgChosen}) => {

    
    return (

        <>
            <Button onClick={() => deleteTheOrganization()}>Delete Organization</Button>
        </>
    );

    function deleteTheOrganization(){
        let url = "https://backend.gonzagatours.app/api/organization/"
        url = url + organizationData._id

        axios.delete(
            url,
            {
                'headers': {
                    'Authentication': process.env.REACT_APP_API_KEY
                }
            }).then(
                setOrgChosen(false)
            ).catch(function (error) {
                console.log(error);
            });
    }
}

export default DeleteOrganization;