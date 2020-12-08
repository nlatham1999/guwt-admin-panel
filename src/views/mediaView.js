//component for the media view
//accessed through the OrganizationMainPage component

import React, { Fragment, useState} from "react";
import { render } from "react-dom";

//import the css module
// import styles from "../css_modules/generalStyles.module.css";

const MediaView = () => {

    return (
        <div>
            <h1>This is the media view</h1>
            <p>
                stuff to do:
                <ul>connect to aws and display the media files</ul>
                <ul>allow selection of media files</ul>
                <ul>allow uploading of media</ul>
            </p>
        </div>
    );
}

export default MediaView;