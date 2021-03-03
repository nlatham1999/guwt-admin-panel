//View for the top bar and side bar for the organization view. all other organization views are children

import React, { useState } from "react";
// import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

import Home from "./home-view";
import MemberView from "./member-view";
// import MediaView from "./media-view";

import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import DeleteOrganization from "../components/delete-organization";
import LogoutButton from "../components/logout-button";
// import pic from "../images/wide-vc-college-hall-2017.jpg"

// //style that we are using for the page
// const pageStyle = {
//   width: '100%',
//   height: '100%',
//   backgroundImage: `url(${pic})`,
//   position: 'absolute'

// }

//component for the main organization view
//parameters:
//  setOrgChosen: function that takes a bool that determines whether there has been an organization chosen or not
//  organizationName: name of the organization chose
const OrganizationMainPage = ({ setOrgChosen, organizationData }) => {

  const [organizationViewChosen, setOrganizationViewChosen] = useState("home view");
 
  return (

    <div>
    <Container>
      {/* add username somehow while passing tests -- i'm too tired (michael) */}
      <OrganizationNavigationBar organizationData={organizationData} setOrganizationViewChosen={setOrganizationViewChosen} setOrgChosen={setOrgChosen}/>
      
      {organizationViewChosen === "home view" && <Home organizationData={organizationData} />}
      {organizationViewChosen === "member view" && <MemberView organizationData={organizationData}/>}
      {/* {organizationViewChosen === "media view" && <MediaView />} */}
    </Container>
    </div>

  );
}

const OrganizationNavigationBar = ({organizationData, setOrganizationViewChosen, setOrgChosen}) => {

  const {user} = useAuth0();

  return (
    <Navbar bg="light" expand="lg" style={{marginLeft: "0"}}>
      <Navbar.Brand>
        <img
          src="https://i.imgur.com/VxWiFjF.jpeg"
          width="50"
          height="50"
          alt="GUWT logo"
        />{' '}
        {organizationData.name}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Views" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => setOrganizationViewChosen("home view")}>Home</NavDropdown.Item >
            <NavDropdown.Item  onClick={() => setOrganizationViewChosen("member view")}>Members</NavDropdown.Item >
            <NavDropdown.Item  onClick={() => setOrganizationViewChosen("media view")}>Media</NavDropdown.Item >
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={() => setOrgChosen(false)}>Return to Select</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          {isUserTheAdmin() && <DeleteOrganization organizationData={organizationData} setOrgChosen={setOrgChosen}/>}
          <LogoutButton />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );

  function isUserTheAdmin() {
    if(organizationData.admin === user.name){
      return true
    }
    return false
  }
}

export default OrganizationMainPage;