//component for the home view
//accessed thorugh the OrganizationMainPage component

//this is the main page for the admin panel. 
//It will hold a list of tours where the user can edit them or add a new tour
//there will also be a side bar to go to the other views
//there should also be a logout button at the topa

import React, { useState, useEffect } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import TourCell from "../components/tour-cell";
import Card from "react-bootstrap/Card";

import EditTour from "./edit-tour-view";

const Home = ({organizationData}) => {
  
  // const { user } = useAuth0();

  const [tourData, setTourData] = useState([]);
  const [tourEditMode, setTourEditMode] = useState(false); //whether we are in tour edit mode or not
  // const [tours, setTours] = useState(sampleTours);  //the list of the tours for the organization
  const [tourIndex, setTourIndex] = useState(0);  //the index of the tour that is currently selected
  const [deleteTour, setDeleteTour] = useState(false); //determines whether to delete a tour or not
  const [refresh, setRefresh] = useState(false); //call this when you want to rerender. kinda hacky but it works

  useEffect(() => {
    loadTours();
  }, []);
  
  //checks if we are in the tour edit mode
  if(tourEditMode){
    return (
      <EditTour setTourEditMode={setTourEditMode} tours={tourData} tourIndex={tourIndex} loadTours={loadTours}/>
    );
  }

  if(deleteTour){
    deleteTourFunc();
  }

  return (
    <div>
      {/* display the list of tour cells */}
      <Card style={{ width: '48rem' }}>
        <Card.Body>
          {tourData.map((tour, i) => (
                <TourCell setTourEditMode={setTourEditMode} tourIndex={i} setTourIndex={setTourIndex} tours={tourData} setDeleteTour={setDeleteTour}/>
          ))}
        </Card.Body>
      </Card>
      
      {/* display the adding tour button */}
      <Button onClick={() => addTourButton()}>create new tour</Button>
    </div>
  );

  function deleteTourFunc(){
    // tourData.splice(tourIndex, 1);
    var tour = tourData[tourIndex];
    let url = "https://backend.gonzagatours.app/tour/t/"
    url = url + tour._id

    axios.delete(
      url,
      {
          'headers': {
              'Authentication': process.env.REACT_APP_API_KEY
          }
      }
    )
    setDeleteTour(false);
    loadTours();
    // setRefresh(!refresh);
  }

  //adds a tour to the list
  function addTourButton(){
    const tour = {
      name: "New Tour",
      organization: organizationData.name,
      description: "description",
      stops: [],
      number_of_stops: 0
    }
    axios
    .post(
      'https://backend.gonzagatours.app/tour', 
      tour,
      {
          'headers': {
              'Authentication': process.env.REACT_APP_API_KEY
          }
      }
    )

    loadTours();
    // setRefresh(!refresh);
  }

    //gets the tours from the database
  function loadTours(){
    console.log("loading tours")
    axios.get('https://backend.gonzagatours.app/tour/tours/', {
      'headers': {
        'Authentication': process.env.REACT_APP_API_KEY
      },
      responseType: 'json',
    })
    .then(response => {
      var data = []
      var group
      for(group in response.data.data){
        var orgName = response.data.data[group].organization;
        if(orgName == organizationData.name){
          data.push(response.data.data[group])
        }
      }
      setTourData(data)
      setRefresh(!refresh)
    })
  }
}

export default Home;
