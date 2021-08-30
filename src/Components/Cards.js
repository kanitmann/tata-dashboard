import React, { useState } from 'react';
/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import img from "../Assets/Reactjs.jpg";
import {Card, Button} from "react-bootstrap"

const Cards = (props) => {
    return (
        <Card style={{ width: '23rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>Job Opportunity</Card.Title>
                <Card.Text>
                Donec quis sagittis diam, at blandit urna. Mauris retra libero nibh, id molestie neque maximus vitae.
                </Card.Text>
                <Button variant="primary">Apply</Button>
            </Card.Body>
        </Card>
    );
};

export default Cards;