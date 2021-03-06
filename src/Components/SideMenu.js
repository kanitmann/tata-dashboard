import React, { useEffect, useState } from "react";
import logo from "../Assets/logo.png";
import user from "../Assets/Pic.jpg";
import MenuItem from "./MenuItem";

const menuItem = [
    { name: "Dashboard", exact: true, to: "/", iconClassName: "bi bi-speedometer2" },
    {
        name: "Opportunities",
        to: "/opportunities",
        iconClassName: "bi bi-newspaper"
    },
    {
        name: "Transfer",
        exact: true,
        to: "/transfer",
        iconClassName: "bi bi-arrow-left-right",
        subMenus: [{ name: "Application", to: "/transfer/application" }, { name: "POC Details", to: "/transfer/pocdetails" }]
    },
    {
        name: "Contact Us",
        to: "/contact",
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
                            exact = {menuItem.exact}
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
                {}
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