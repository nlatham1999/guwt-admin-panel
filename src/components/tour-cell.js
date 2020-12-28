import React, { useState} from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";


const TourCell = () => {

    return (
        <Form>
            <Form.Group as={Row}>
                <Form.Label column sm={3}>
                    Tour Name
                </Form.Label>
                <Form.Label column sm={3}>
                    Number of stops
                </Form.Label>
                <Button column sm={3}>
                    Tour Info
                </Button>
                <Button column sm={3}>
                    Edit Tour
                </Button>
                <Button column sm={3}>
                    Delete Tour
                </Button>
            </Form.Group>
        </Form>
    );

}

export default TourCell