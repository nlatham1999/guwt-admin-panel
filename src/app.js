import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { NavBar, Footer } from "./components";
import { Home } from "./views";
import "./app.css";
import LoginView from "./views/loginView";

const App = () => {
  const { isAuthenticated } = useAuth0();
  
  if(isAuthenticated){
    return (
      <div id="app">
            <Route path="/" exact component={Home} />
      </div>
    );
  }else{
    return (
      <div id="app">
            <Route path="/" exact component={LoginView} />
      </div>
    );
  }
};

export default App;
