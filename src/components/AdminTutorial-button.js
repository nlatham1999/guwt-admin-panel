// Toby Okoye
// src/components/AdminTutorial-button.js

import React from "react";
import Button from 'react-bootstrap/Button';

const AdminTutorialButton = () => {
  return (
    <Button
      type="button"
      className="btn btn-warning"
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    >
      Admin Tutorial Video
    </Button>
  );
};

export default AdminTutorialButton;
