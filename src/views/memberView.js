import React, { Fragment, useState} from "react";
import { render } from "react-dom";

//import the css module
import styles from "../css_modules/generalStyles.module.css";

const MemberView = () => {

    return (
        <div className={styles.generalStyle}>
            <h1>This is the member view</h1>
            <p>
                Stuff to do:
                <ul>
                    <li>connect to aws and display media files</li>
                    <li>enable uploading media files</li>
                </ul>
            </p>
      </div>
    );
}

export default MemberView;