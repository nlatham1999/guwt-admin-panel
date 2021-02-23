//component for the media view
//accessed through the OrganizationMainPage component
import React, { useState, useEffect } from "react";
import axios from "axios";
import FormData, {getHeaders} from "form-data"
import pic from '../images/college-hall.jpg'
import Button from "react-bootstrap/Button";
import ImageUploader from 'react-images-upload';
import Card from "react-bootstrap/Card";

import MediaCell from '../components/media-cell'
import { Form } from "react-bootstrap";


//import the css module
// import styles from "../css_modules/generalStyles.module.css";

const MediaView = ({tour_id, stop_id}) => {
    const randomTestText = "Images Available";
    const [isClicked, setisClicked] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [deleteMedia, setDeleteMedia] = useState(false);
    // const [open, setOpen] = React.useState(false);
    const [image, setImage] = useState({ preview: "", raw: "" })
    const [refresh, setRefresh] = useState(false);
    const [mediaIndex, setMediaIndex] = useState(0);
    const [test, setTest] = useState("0")

    useEffect(() => {
        getMedia();
      }, []);

    if(deleteMedia === true){
        deleteMediaFunc();
        setDeleteMedia(false);
    }

    const onFileChange = event => {

        if (event.target.files.length) {
            setImage({
                preview: URL.createObjectURL(event.target.files[0]),
                raw: event.target.files[0]
            });

            var data = new FormData();
            data.append('media', event.target.files[0]); //the FormData is not getting the appropriate image in time for the post to fire
            data.append('tour_id', tour_id);
            data.append('stop_id', stop_id);
            
    
            axios
            .post(
              'https://backend.gonzagatours.app/media', 
              data,
              {
                  'headers': {
                      'Authentication': process.env.REACT_APP_API_KEY,
                      'Content-Type': 'multipart/form-data'
                  }
              }
            ).then((response) => {
                if (response.status === 201){
                    setTest("passed")
                    getMedia()
                }
                else{
                    setTest("failed")
                }
            }
            ).catch((error) =>{
                console.log(error.message)
            })
        }                
    };

    return (
        <div>
            <>
            <input type="file" onChange={onFileChange}/>
            </>
            <img src={image.preview} height="40" alt="Cannot Display"></img>
            <div>{selectedFiles.length}</div>
            <div>{test}</div>
            <Card style={{ width: '48rem' }}>
                <Card.Body>
                {selectedFiles.map((tour, i) => (
                        <MediaCell mediaIndex={i} media={selectedFiles} setDeleteMedia={setDeleteMedia} setMediaIndex={setMediaIndex}/>
                ))}
                </Card.Body>
            </Card>
        </div>
    );

    function deleteMediaFunc(){
        let url = "https://backend.gonzagatours.app/media/m/"
        url = url + selectedFiles[mediaIndex]._id
    
        axios.delete(
          url,
          {
              'headers': {
                  'Authentication': process.env.REACT_APP_API_KEY
              }
          }
        )
        getMedia()
    }

    function getMedia(){
        
        axios.get('https://backend.gonzagatours.app/media/ms/', {
            'headers': {
            'Authentication': process.env.REACT_APP_API_KEY
            },
            responseType: 'json',
        })
        .then(response => {
            var data = []
            var group
            for(group in response.data.data){
                var tourID = response.data.data[group].tour_id;
                var stopID = response.data.data[group].stop_id;
                // if(stopID == stop_id && tourID == tour_id){
                    data.push(response.data.data[group])
                // }
            }
            setSelectedFiles(data)
        })
    }


    function displayMedia(){
        setisClicked(!isClicked);
    }

}

export default MediaView;