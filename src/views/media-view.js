//component for the media view
//accessed through the OrganizationMainPage component
import React, { useState } from "react";
import pic from '../images/college-hall.jpg'
import Button from "react-bootstrap/Button";
import ImageUploader from 'react-images-upload';
import Card from "react-bootstrap/Card";

import MediaCell from '../components/media-cell'

//import the css module
// import styles from "../css_modules/generalStyles.module.css";

const MediaView = () => {
    const randomTestText = "Images Available";
    const [isClicked, setisClicked] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [deleteMedia, setDeleteMedia] = useState(false);
    // const [open, setOpen] = React.useState(false);
    const [refresh, setRefresh] = useState(false);

    const onFileChange = (event) => {
        selectedFiles.push(event.target.files[0])
        setSelectedFiles(selectedFiles)
        setRefresh(!refresh);
      
    };

    return (
        <div>
            <>
            <input type="file" onChange={onFileChange}/>
            </>
            <div>{selectedFiles.length}</div>
            <Card style={{ width: '48rem' }}>
                <Card.Body>
                {selectedFiles.map((tour, i) => (
                        <MediaCell mediaIndex={i} media={selectedFiles} setDeleteMedia={setDeleteMedia}/>
                ))}
                </Card.Body>
            </Card>
        </div>
    );




    function displayMedia(){
        setisClicked(!isClicked);
    }

}

export default MediaView;