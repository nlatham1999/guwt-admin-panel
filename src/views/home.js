import React, { Fragment } from "react";

import { Hero, HomeContent } from "../components";
import LoginButton from "../components/login-button.js"
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  
  const { user } = useAuth0();

  return (
    <div>
      <h>
        Hello {user.name}, welcome to the walking tour home:
      </h>
      <p>
        this is the home view
      </p>
      <p> stuff to do</p>
      <ul>
        <li>Make a navigation bar</li>
        <li>add the list of tours</li>
        <li>add a logout button</li>
      </ul>
    </div>
  );
}

export default Home;
