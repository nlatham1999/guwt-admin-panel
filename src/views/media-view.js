//component for the media view
//accessed through the OrganizationMainPage component
import React, { useState } from "react";
import pic from '../images/college-hall.jpg'
import Button from "react-bootstrap/Button";
import ImageUploader from 'react-images-upload';

//import the css module
// import styles from "../css_modules/generalStyles.module.css";

const MediaView = () => {
    const randomTestText = "Images Available";
    const [isClicked, setisClicked] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null)
    // const [open, setOpen] = React.useState(false);

    const onFileChange = (event) => {
    
        setSelectedFile(event.target.files[0])
      
    };

    return (
        <div>
            <>
            <input type="file" onChange={onFileChange}/>
            </>
            <Button onClick={() => displayMedia()}>Display Available Media</Button>
            {
                selectedFile &&
                <div>
                    {selectedFile.type}

                </div>
            }
            {
                isClicked === true &&
                <div>
                    <h1>
                        {randomTestText}
                    </h1>
                {/* Display the image in the images folder
                *IMPORTANT* require() can be used for .mp3, .mp4, .mov, .pdf etc
                */}
                <img src={URL.createObjectURL(selectedFile)} height="300" width="300" alt="Cannot Display"></img>
                     
                </div>
            }
        </div>
    );




    function displayMedia(){
        setisClicked(!isClicked);
    }

}

export default MediaView;