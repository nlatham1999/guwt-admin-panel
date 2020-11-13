//View for the top bar and side bar for the organization view. all other organization views are children

import React, { Fragment, useState} from "react";
import { render } from "react-dom";

import LogoutButton from "../components/logout-button";
import Home from "./homeView";
import MemberView from "./memberView";
import MediaView from "./mediaView";

//component for the main organization view
//parameters:
//  setOrgChosen: function that takes a bool and determines whether there has been an organization chosen or not
const OrganizationMainPage = ({setOrgChosen}) => {

    const [organizationViewChosen, setOrganizationViewChosen] = useState("home view");

    return (
        <div>
            <h1>Organization name: , username:</h1>
            <LogoutButton />
            <p>this will be the top bar for all organization views and
                 will contain a logout button, the organization name
                 and a sidebar menu to navigate to the different views, and a go back button</p>
            <p>right now there is a dropdown menu instead of the sidebar</p>
            <button onClick={() => goBackToChooseOrganization()}>go back</button>
            <ViewDropdown setOrganizationViewChosen={setOrganizationViewChosen}/>

            
            {organizationViewChosen == "home view" && <Home />}
            {organizationViewChosen == "member view" && <MemberView />}
            {organizationViewChosen == "media view" && <MediaView />}
        </div>

    );

    function goBackToChooseOrganization() {
        setOrgChosen(false);
    }
}

//dropdown button to choose between views
//this is temporary until we implement a side bar
const ViewDropdown = ({setOrganizationViewChosen}) => {
  
    const [open, setOpen] = React.useState(false);
    const drop = React.useRef(null);
    const data = ["home view", "member view", "media view"];
    
    function handleClick(e) {
      if (!e.target.closest(`.${drop.current.className}`) && open) {
        setOpen(false);
      }
    }
  
    function handleSelection(selection){
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
        <button onClick={() => setOpen(open => !open)}>select view</button>
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