//View for the top bar and side bar for the organization view. all other organization views are children

import React, { useState } from "react";
import LogoutButton from "../components/logout-button";
import Home from "./homeView";
import MemberView from "./memberView";
import MediaView from "./mediaView";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import DeleteOrganization from "../components/deleteOrganization";

//component for the main organization view
//parameters:
//  setOrgChosen: function that takes a bool that determines whether there has been an organization chosen or not
//  organizationName: name of the organization chose
const OrganizationMainPage = ({ setOrgChosen, organizationName }) => {

  const [organizationViewChosen, setOrganizationViewChosen] = useState("home view");

  return (
    <Container class="p-3">
      <h1>Organization name: {organizationName} , username:</h1>
      <LogoutButton />
      
      <DeleteOrganization organizationName={organizationName} setOrgChosen={setOrgChosen}/>


      <p>this will be the top bar for all organization views and
      will contain a logout button, the organization name
                 and a sidebar menu to navigate to the different views, and a go back button</p>
      <p>right now there is a dropdown menu instead of the sidebar</p>
      <Button onClick={() => goBackToChooseOrganization()}>go back</Button>
      <ViewDropdown setOrganizationViewChosen={setOrganizationViewChosen} />


      {organizationViewChosen === "home view" && <Home />}
      {organizationViewChosen === "member view" && <MemberView />}
      {organizationViewChosen === "media view" && <MediaView />}
    </Container>

  );

  function goBackToChooseOrganization() {
    setOrgChosen(false);
  }
}

//dropdown button to choose between views
//this is temporary until we implement a side bar
const ViewDropdown = ({ setOrganizationViewChosen }) => {

  const [open, setOpen] = React.useState(false);
  const drop = React.useRef(null);
  const data = ["home view", "member view", "media view"];

  function handleClick(e) {
    if (!e.target.closest(`.${drop.current.className}`) && open) {
      setOpen(false);
    }
  }

  function handleSelection(selection) {
    setOrganizationViewChosen(selection);
    setOpen(false);
  }

  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    
      <div className="dropdown" ref={drop} >
        <Button onClick={() => setOpen(open => !open)}>select view</Button>
        {
          open &&
          <ul>
            {data.map((item, i) => (
              <li key={i} onClick={() => handleSelection(item)}>
                {item}
              </li>
            ))}
          </ul>
        }
      </div>
  );
};

export default OrganizationMainPage;