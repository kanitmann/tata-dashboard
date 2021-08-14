import React from "react";
import logo from "../Assets/logo.png";

const SideMenu = (props) => {
    return <div className="side-menu">
        <div className="top-section">
            <div className="logo">
                <img scr={logo} alt="Tata-logo" />
            </div>
        </div>
    </div>
}
export default SideMenu;