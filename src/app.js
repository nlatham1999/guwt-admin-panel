import React from "react";
import { Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// import "./app.css";
import LoginView from "./views/login-view";
// import Home from "./views/homeView";
import SelectOrginization from "./views/select-organization-view";

import 'bootstrap/dist/css/bootstrap.min.css';
import pic from "./images/wide-vc-college-hall-2017.png"

//style that we are using for the page
const pageStyle = {
  width: '100%',
  height: '100%',
  backgroundImage: `url(${pic})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'

}

const App = () => {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <div className="mainApp" style={pageStyle}>
        <Route path="/" exact component={SelectOrginization} />
      </div>
    );
  } else {
    return (
      <div className="mainApp" style={pageStyle}>
        <Route path="/" exact component={LoginView} />
      </div>
    );
  }
};

export default App;
