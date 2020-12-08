//Component for the member view 
//accessed trhough the OrganizationMainPage component

import React, { Fragment, useState} from "react";
import { render } from "react-dom";

//import the css module
// import styles from "../css_modules/generalStyles.module.css";

const MemberView = () => {

    return (
        <div>
            <h1>This is the member view</h1>
            <p>
                Stuff to do:
                <ul>
                    <li>connect to aws and display current members and prospective members</li>
                    <li>allow members to join</li>
                </ul>
            </p>
      </div>
    );
}

export default MemberView;