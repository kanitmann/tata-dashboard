import React, { useEffect, useState } from "react";
import logo from "../Assets/logo.png";
import user from "../Assets/Pic.jpg";
import MenuItem from "./MenuItem";

const menuItem = [
    { name: "Dashboard", to: "/", iconClassName: "bi bi-speedometer2" },
    {
        name: "Opportunities",
        to: "/opportunities",
        iconClassName: "bi bi-newspaper"
    },
    {
        name: "Transfer",
        to: "/transfer",
        iconClassName: "bi bi-arrow-left-right",
        subMenus: [{ name: "Application" }, { name: "POC Details" }]
    },
    {
        name: "IT Cell",
        to: "/itcell",
        iconClassName: "bi bi-telephone"
    }
]

const SideMenu = (props) => {
    const [inactive, setInactive] = useState(false);

    useEffect(() => {
        if (inactive) {
            document.querySelectorAll(".sub-menu").forEach((el) => {
                el.classList.remove("active");
            });
        }

        props.onCollapse(inactive);
    }
        , [inactive]);

    return (<div className={`side-menu ${inactive ? "inactive" : ""}`}>
        <div className="top-section">
            <div className="logo">
                <img src={logo} alt="Tata-logo" />
            </div>
            <div onClick={() => {
                setInactive(!inactive);
            }}
                className="toggle-menu-btn">
                {inactive ? <i class="bi bi-arrow-right-square-fill"></i> : <i class="bi bi-arrow-left-square-fill"></i>}
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
        <div className="main-menu">
            <ul>
                {
                    menuItem.map((menuItem, index) => (
                        <MenuItem
                            key={index}
                            name={menuItem.name}
                            to={menuItem.to}
                            subMenus={menuItem.subMenus || []}
                            iconClassName={menuItem.iconClassName}
                            onClick={() => {
                                if (inactive) {
                                    setInactive(false);
                                }
                            }
                            }
                        />
                    ))
                }
                {/*
                <li>
                    <a className="menu-item">
                        <div className="menu-icon">
                            <i class="bi bi-speedometer2"></i>
                        </div>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a className="menu-item">
                        <div className="menu-icon">
                            <i class="bi bi-newspaper"></i>
                        </div>
                        <span>Opportunities</span>
                    </a>
                </li>
                <MenuItem
                    name={"Transfer"}
                    subMenus={[{ name: "Application" }, { name: "POC Details" }]}
                />
                <li>
                    <a className="menu-item">
                        <div className="menu-icon">
                            <i class="bi bi-telephone"></i>
                        </div>
                        <span>IT Cell</span>
                    </a>
                </li>*/}
            </ul>

        </div>
        <div className="side-menu-footer">
            <div className="avatar">
                <img src={user} alt="user-dp" />
            </div>
            <div className="user-info">
                <h5>
                    Kanit Mann
                </h5>
                <p>
                    Emp. ID: 4567
                </p>
            </div>
        </div>
    </div>
    );
}
export default SideMenu;