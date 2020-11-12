import React, { Fragment, useState} from "react";
import { render } from "react-dom";

//import the css module
import styles from "../css_modules/generalStyles.module.css";

const MediaView = () => {

    return (
        <div className={styles.generalStyle}>
            <p>
                this is the media view
            </p>
        </div>
    );
}

export default MediaView;