//component for the home view
//accessed thorugh the OrganizationMainPage component

//this is the main page for the admin panel. 
//It will hold a list of tours where the user can edit them or add a new tour
//there will also be a side bar to go to the other views
//there should also be a logout button at the topa

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import TourCell from "../components/tour-cell";
import Card from "react-bootstrap/Card";

import EditTour from "./editTourView";

const Home = () => {
  
  // const { user } = useAuth0();

  //this is a sample of a list of tour objects
  //once we database set up for tours, this will not be necessary
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

  const [tourEditMode, setTourEditMode] = useState(false); //whether we are in tour edit mode or not
  const [tours, setTours] = useState(sampleTours);  //the list of the tours for the organization
  const [tourIndex, setTourIndex] = useState(0);  //the index of the tour that is currently selected
  const [deleteTour, setDeleteTour] = useState(false); //determines whether to delete a tour or not
  
  //checks if we are in the tour edit mode
  if(tourEditMode){
    return (
      <EditTour setTourEditMode={setTourEditMode} tours={tours} setTours={setTours} tourIndex={tourIndex}/>
    );
  }

  if(deleteTour){
    tours.splice(tourIndex, 1);
    setDeleteTour(false);
  }

  return (
    <div>

      {/* display the list of tour cells */}
      <Card style={{ width: '48rem' }}>
        <Card.Body>
          {tours.map((tour, i) => (
                <TourCell setTourEditMode={setTourEditMode} tourIndex={i} setTourIndex={setTourIndex} tours={tours} setTours={setTours} setDeleteTour={setDeleteTour}/>
          ))}
        </Card.Body>
      </Card>
      
      {/* display the adding tour button */}
      <Button onClick={() => addTourButton()}>create new tour</Button>
    </div>
  );

  //adds a tour to the list
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
