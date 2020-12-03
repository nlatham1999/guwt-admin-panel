//this is the view where the user selects their organization
//accessed through the main App comonent

import React, { useState} from "react";
import OrganizationMainPage from "./organizationMainPageView";
import LogoutButton from "../components/logout-button";
import axios from "axios";


// function getOrganizations() {
//   try {
//     axios.get('https://backend.gonzagatours.app/api/organizations', {
//       'headers': {
//         'Authentication': process.env.REACT_APP_API_KEY
//       },
//     responseType: 'json',
//      })
//       .then(response => {
//         var names = []
//         var group
//         for(group in response.data.data){
//           names.push(response.data.data[group].name)
//         }
//         return names
//       })
//     } catch (e) {
//       console.log("failed")
//     }
// }

const SelectOrganization = () => {
    
    // const { user } = useAuth0();
    // const username = user.name;
    const [organizationName, setOrganizationName] = useState("temp org");
    const [organizationChosen, setOrganizationChosen] = useState(false);

    if(organizationChosen){
        return (
            <OrganizationMainPage setOrgChosen={setOrganizationChosen} organizationName={organizationName}/>
        );
    }
    return (
        <div>
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
            <ViewDropdown setOrganizationChosen={setOrganizationChosen} setOrganizationName={setOrganizationName} />
            
            {/* if an organization has been chosen then run goToOrganization() */}
            {organizationChosen === true && goToOrganization()}

            {/* display the logout button */}
            <LogoutButton />
        </div>
    );

    function goToOrganization(){
        console.log("test");
        setOrganizationChosen(true);
    }
}

//dropdown button to choose an organization
const ViewDropdown = ({ setOrganizationChosen, setOrganizationName}) => {

    const [open, setOpen] = React.useState(false);
    const [responseData, setResponseData] = React.useState('');
    const drop = React.useRef(null);

    function handleClick(e) {
      if (!e.target.closest(`.${drop.current.className}`) && open) {
        setOpen(false);
      }
    }
  
    function handleSelection(selection) {
      setOrganizationName(selection);
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
            var names = []
            var group
            for(group in response.data.data){
              names.push(response.data.data[group].name)
            }
            setResponseData(names)
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
        <button onClick={() => setOpen(open => !open)}>Select an Organization</button>
        {
          open &&
          <ul>
            {responseData.map((item, i) => (
              <li key={i} onClick={() => handleSelection(item)}>
                {item}
              </li>
            ))}
          </ul>
        }
      </div>
    );
  };

export default SelectOrganization;