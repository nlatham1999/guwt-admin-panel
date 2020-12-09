//component for the media view
//accessed through the OrganizationMainPage component

import React, { Fragment, useState} from "react";
import { render } from "react-dom";
import pic from '../images/college-hall.jpg'

//import the css module
import styles from "../css_modules/generalStyles.module.css";

const MediaView = () => {
    const randomTestText = useState("Images Available");
    const [isClicked, setisClicked] = useState(false);
    const [open, setOpen] = React.useState(false);

        return (
        <div className={styles.generalStyle}>
            <h1>This is the media view</h1>
            <p>
                stuff to do:
                <ul>connect to aws and display the media files</ul>
                <ul>allow selection of media files</ul>
                <ul>allow uploading of media</ul>
            </p>
            <button onClick={() => displayMedia()}>Display Available Media</button>
            {
                isClicked == true &&
                <div className={styles.leftColumnStyle}>
                <h1>
                    {randomTestText}
                </h1>
                {/* Display the image in the images folder
                *IMPORTANT* require() can be used for .mp3, .mp4, .mov, .pdf etc
                */}
                <img src={pic} height="300" width="300" alt="Cannot Display"></img>
                </div>
            }
        </div>
    );


    function displayMedia(){
        setisClicked(true);
    }

}

export default MediaView;