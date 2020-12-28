//component for the home view
//accessed thorugh the OrganizationMainPage component

//this is the main page for the admin panel. 
//It will hold a list of tours where the user can edit them or add a new tour
//there will also be a side bar to go to the other tours
//there should also be a logout button at the topa

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import TourCell from "../components/tour-cell";
import Card from "react-bootstrap/Card";

import EditTour from "./editTourView";

const Home = () => {
  
  // const { user } = useAuth0();

  const [tourEditMode, setTourEditMode] = useState(false);
  const [tours, setTours] = useState(["tour1", "tour2", "tour3"])

  if(tourEditMode){
    return (
      <EditTour setTourEditMode = {setTourEditMode}/>
    );
  }

  return (
    <div>
      <Card style={{ width: '48rem' }}>
        <Card.Body>
          {tours.map((item, i) => (
                <TourCell />
          ))}
        </Card.Body>
      </Card>
      <Button onClick={() => editTourButton()}>edit/create new tour</Button>
    </div>
  );

  function editTourButton(){
    setTourEditMode(true);
  }
}

export default Home;
