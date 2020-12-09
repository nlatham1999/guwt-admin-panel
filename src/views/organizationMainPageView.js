//View for the top bar and side bar for the organization view. all other organization views are children

import React, { useState } from "react";
import LogoutButton from "../components/logout-button";
import DeleteOrganization from "../components/deleteOrganization";

import Home from "./homeView";
import MemberView from "./memberView";
import MediaView from "./mediaView";

import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";



//component for the main organization view
//parameters:
//  setOrgChosen: function that takes a bool that determines whether there has been an organization chosen or not
//  organizationName: name of the organization chose
const OrganizationMainPage = ({ setOrgChosen, organizationData }) => {

  const [organizationViewChosen, setOrganizationViewChosen] = useState("home view");
  const orgName = organizationData.name;

  return (

    <Container className="p-3">
      {/* add username somehow while passing tests -- i'm too tired (michael) */}
      <OrganizationNavigationBar organizationData={organizationData} setOrganizationViewChosen={setOrganizationViewChosen} setOrgChosen={setOrgChosen}/>
      
      {organizationViewChosen === "home view" && <Home />}
      {organizationViewChosen === "member view" && <MemberView />}
      {organizationViewChosen === "media view" && <MediaView />}
    </Container>

  );
}

const OrganizationNavigationBar = ({organizationData, setOrganizationViewChosen, setOrgChosen}) => {
  return (
    <Navbar>
      <Navbar.Brand>
        {organizationData.name}
      </Navbar.Brand>
      <Nav variant="pills">
          <Nav.Link onClick={() => setOrganizationViewChosen("home view")}>Home</Nav.Link>
          <Nav.Link onClick={() => setOrganizationViewChosen("member view")}>Members</Nav.Link>
          <Nav.Link onClick={() => setOrganizationViewChosen("media view")}>Media</Nav.Link>
      </Nav>
      <Form inline right>
          <LogoutButton />
          <DeleteOrganization organizationData={organizationData} setOrgChosen={setOrgChosen}/>
          <Button onClick={() => setOrgChosen(false)}>go back</Button>
      </Form>
    </Navbar>
  );
}

export default OrganizationMainPage;