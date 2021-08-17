import React from "react";
import logo from "../Assets/logo.png";

const SideMenu = (props) => {
    return (<div className="side-menu inactive">
        <div className="top-section">
            <div className="logo">
                <img src={logo} alt="Tata-logo" />
            </div>
            <div className="toggle-menu-btn">
                <i class="bi bi-arrow-left-square-fill"></i>
            </div>
            <div className="search-controller">
                <button className="search-btn">
                    <i class="bi bi-search"></i>
                </button>
                <input type="text" placeholder="Search" />
            </div>
            <div className="divider">

            </div>
        </div>
    </div>
    );
}   
export default SideMenu;