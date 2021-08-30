import React, { useState } from 'react';
import img from "../Assets/logo.png";
import Cards from "./Cards"

const Opportunities = (props) => {
    return (
        <div className="container-fluid d-flex-content-center">
            <div className="row">
                <div className="col-md-4"><Cards /></div>
                <div className="col-md-1"><Cards /></div>
            </div>
        </div>


    )
};

export default Opportunities;