//this is the view where the user selects their organization
//accessed through the main App comonent

import React, { useState} from "react";
import OrganizationMainPage from "./organizationMainPageView";
import LogoutButton from "../components/logout-button";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import NewOrganization from "../components/newOrganization";
import { Dropdown, DropdownButton } from "react-bootstrap"; 

const SelectOrganization = () => {
    
    const [organizationData, setOrganizationData] = useState("temp org");
    const [organizationChosen, setOrganizationChosen] = useState(false);
    const [addNewOrganization, setAddNewOrganization] = useState(false);

    if(organizationChosen){
        return (
            <OrganizationMainPage setOrgChosen={setOrganizationChosen} organizationData={organizationData}/>
        );
    }
    return (
        <Container class="p-3">
            <h1>This is the select organization view</h1>
            <h2>Need to do:</h2>
            <ul>
                <li>connect to the aws and get a list of organizations</li>
                <li>create a dropdown or a list with tours</li>
                <li>if a organization is selected, check to make sure that the user has access</li>
                <li> if not then as if they want to request access</li>
                <li>if so then go to the organziation main page</li>
                <li>add a create organization button</li>
            </ul>

            {/* display the dropdown for an organization */}
            <ViewDropdown setOrganizationChosen={setOrganizationChosen} setOrganizationData={setOrganizationData} />
            
            {/* if an organization has been chosen then run goToOrganization() */}
            {organizationChosen === true && goToOrganization()}

            {/* display the logout button */}
            <LogoutButton />

            {/* sets up adding a new organization */}
            <br></br>
            <Button onClick={() => setAddNewOrganization(true)}>add a new organization</Button>
            {addNewOrganization === true && <NewOrganization  setAddNewOrganization={setAddNewOrganization} />}

            
        </Container>
    );

    function goToOrganization(){
        console.log("test");
        setOrganizationChosen(true);
    }
}

//dropdown button to choose an organization
const ViewDropdown = ({ setOrganizationChosen, setOrganizationData}) => {

    const [open, setOpen] = React.useState(false);
    const [responseData, setResponseData] = React.useState([""]);
    const drop = React.useRef(null);

    function handleClick(e) {
      if (!e.target.closest(`.${drop.current.className}`) && open) {
        setOpen(false);
      }
    }
  
    function handleSelection(selection) {
      setOrganizationData(selection);
      setOrganizationChosen(true)
      setOpen(false);
    }
  
    React.useEffect(() => {
      try {
        axios.get('https://backend.gonzagatours.app/api/organizations', {
          'headers': {
            'Authentication': process.env.REACT_APP_API_KEY
          },
        responseType: 'json',
         })
          .then(response => {
            var data = []
            var group
            for(group in response.data.data){
              data.push(response.data.data[group])
            }
            setResponseData(data)
          })
        } catch (e) {
          console.log("failed")
        }

      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      };
    });
  
    return (
      <div className="dropdown" ref={drop} >
        <DropdownButton title="Select an Organization">
            {responseData.map((item, i) => (
              <Dropdown.Item key={i} onClick={() => handleSelection(item)}>
                {item.name}
              </Dropdown.Item>
            ))}
        </DropdownButton>
      </div>
    );
  };

export default SelectOrganization;