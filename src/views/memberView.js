//Component for the member view 
//accessed trhough the OrganizationMainPage component

import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

//import the css module
// import styles from "../css_modules/generalStyles.module.css";

const MemberView = ({organizationData}) => {

    return (
        <>
        <Card style={{ width: '48rem' }}>
        <Card.Header>Current Admins</Card.Header>
        <Card.Body>
            {organizationData.members.map((member, i) => (
                <h>{member}</h>
            ))}
        </Card.Body>
        </Card>
        <Card style={{ width: '48rem' }}>
        <Card.Header>Prospective Admins</Card.Header>
        <Card.Body>
            {organizationData.prospectiveMembers.map((member, i) => (
                <h>{member}</h>
            ))}
        </Card.Body>
        </Card>
    </>
    );
}

export default MemberView;