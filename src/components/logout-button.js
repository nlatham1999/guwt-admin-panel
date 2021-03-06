// src/components/logout-button.js

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";

//logout button component
const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Button
      className="btn btn-danger"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;

