//this is a cell for displaying the prospective members within the media view

import React, { useState} from "react";
import axios from "axios";

//import all the bootsrap stuff
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";

//tour cell component
//parameters:
//  prospectiveIndex: index of the prospective moderator among a list of moderators
//  organizationData: the organization data
//  setRefresh: setter so that the parent component can refresh
const ProspectiveMemberCell = ({prospectiveIndex, organizationData, setRefresh}) => {

    return (
        //display the stop names, and delete, info, and edit buttons
        <Form>
            <Form.Group as={Row}>
                <Form.Label column sm={3}>
                    name: {organizationData.prospectives[prospectiveIndex]}
                </Form.Label>
                <Button column sm={3} onClick={() => removePerson()}>
                    Decline
                </Button>
                <Button column sm={3} onClick={() => addPerson()}>
                    Add
                </Button>
            </Form.Group>
        </Form>
    );

    function removePerson(){
        organizationData.prospectives.splice(prospectiveIndex, 1);
        updateOrganization();
    }

    function addPerson(){
        organizationData.moderators.push(organizationData.prospectives[prospectiveIndex]);
        organizationData.prospectives.splice(prospectiveIndex, 1);
        updateOrganization()
    }

    function updateOrganization(){
        axios
        .put(
          'https://backend.gonzagatours.app/api/organization/' + organizationData._id, 
          organizationData,
          {
              'headers': {
                  'Authentication': process.env.REACT_APP_API_KEY
              }
        })
        .then((response) => {
        }
          
        )
        setRefresh(true);
    }

}

export default ProspectiveMemberCell;