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

  //this is a sample of a list of tour objects
  const sampleTours = [
    {
      name: "tour 1",
      stops: [
        {
          name: "stop 1",
          latitude: 1000,
          longitude: 1000,
          description: "This is tour 1"
        },
        {
          name: "stop 2",
          latitude: 1000,
          longitude: 1000,
          description: "This is tour 1"
        },
        {
          name: "stop 3",
          latitude: 1000,
          longitude: 1000,
          description: "This is tour 1"
        },
      ]
    },
    {
      name: "tour 2",
      stops: [
        {
          name: "stop 1",
          latitude: 1000,
          longitude: 1000,
          description: "This is tour 2"
        }
      ]
    }
  ]  

  const [tourEditMode, setTourEditMode] = useState(false);
  const [tours, setTours] = useState(sampleTours);
  const [tourIndex, setTourIndex] = useState(0);
  

  if(tourEditMode){
    return (
      <EditTour setTourEditMode={setTourEditMode} tours={tours} setTours={setTours} tourIndex={tourIndex}/>
    );
  }

  return (
    <div>
      <Card style={{ width: '48rem' }}>
        <Card.Body>
          {tours.map((tour, i) => (
                <TourCell setTourEditMode={setTourEditMode} tourIndex={i} setTourIndex={setTourIndex} tours={tours} setTours={setTours}/>
          ))}
        </Card.Body>
      </Card>
      <Button onClick={() => addTourButton()}>create new tour</Button>
    </div>
  );

  function addTourButton(){
    const tour = {
      name: "New Tour",
      stops: []
    }
    tours.push(tour);
    setTours(tours);
    setTourIndex(tours.length - 1); //this line doesn't do anything, but the page does not rerender without it for some reason...
    //todo: update the tours in the database
  }
}

export default Home;
