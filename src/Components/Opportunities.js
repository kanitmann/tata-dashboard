import React, { useState } from 'react';
import img from "../Assets/logo.png";
import Cards from "./Cards"

const Opportunities = (props) => {
    return (

        <div className="container-fluid d-flex-content-center">
            <div className="heading1">
                <h1>Current Job Opportunities</h1>
            </div>
            <br></br>
            <div className="row">
                <div className="col-md-4"><Cards /></div>
                <br></br><br></br>
                <div className="col-md-4"><Cards /></div>
            </div>
        </div>


    )
};

export default Opportunities;