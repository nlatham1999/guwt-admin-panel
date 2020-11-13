//this is the view where the user selects their organization
//accessed through the main App comonent

import React, { Fragment, useState} from "react";
import { render } from "react-dom";
import ButtonWithDropDown from "../components/buttonDropDownCmp";
import OrganizationMainPage from "./organizationMainPageView";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../components/logout-button";

const SelectOrganization = () => {
    
    // const { user } = useAuth0();
    // const username = user.name;
    const [organizationName, setOrganizationName] = useState("temp org");
    const [organizationChosen, setOrganizationChosen] = useState(false);

    if(organizationChosen){
        return (
            <OrganizationMainPage setOrgChosen = {setOrganizationChosen}/>
        );
    }
    return (
        <div>
            <h1>This is the select organization view</h1>
            <h2>Need to do:</h2>
            <ul>
                <li>connect to the aws and get a list of organizations</li>
                <li>create a dropdown or a list with tours</li>
                <li>if a tour is selected, check to make sure that the user has access</li>
                <li> if not then as if they want to request access</li>
                <li>if so then go to the organziation main page</li>
                <li>add a create organization button</li>
            </ul>
            <button onClick={() => goToOrganization()}>Temporary button to go to the organization main page</button>
            <LogoutButton />
        </div>
    );

    function goToOrganization(){
        console.log("test");
        setOrganizationChosen(true);
    }
}

export default SelectOrganization;