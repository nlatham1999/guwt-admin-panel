//this is a cell for displaying the prospective members within the media view

import React, { useState} from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

//import all the bootsrap stuff
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";

//tour cell component
//parameters:
const ModeratorCell = ({moderatorIndex, organizationData, setRefresh}) => {

    const [disableRemove, setDisableRemove] = useState(true);
    const { user } = useAuth0();    //holds user information




    return (
        //display the stop names, and delete, info, and edit buttons
        <Form>
            <Form.Group as={Row}>
                <Form.Label column sm={5}>
                    name: {organizationData.moderators[moderatorIndex]}
                </Form.Label>
                <Button column sm={5} disabled={shouldDisableButton} onClick={() => removePerson()}>
                    Remove Moderator
                </Button>
            </Form.Group>
        </Form>
    );

    function shouldDisableButton(){
        if(user.name == organizationData.admin){
            return false;
        }
        return true;
    }

    function removePerson(){
        organizationData.moderators.splice(moderatorIndex, 1);
        updateOrganization();
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

export default ModeratorCell;