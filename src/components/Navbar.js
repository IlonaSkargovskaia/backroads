import React from "react";
import logo from "../images/logo.svg";
import PageLinks from "./PageLinks";
import { icons } from "../data";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <a href="#home">
                        <img src={logo} className="nav-logo" alt="backroads" />
                    </a>
                    <button
                        type="button"
                        className="nav-toggle"
                        id="nav-toggle"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                </div>

                <PageLinks parentClass="nav-links" itemClass="nav-link" />

                <ul className="nav-icons">
                    {icons.map((link) => {
                        const { id, href, icon } = link;
                        return (
                            <li key={id}>
                                <a
                                    href={href}
                                    target="_blank"
                                    className="nav-icon"
                                    rel="noreferrer"
                                >
                                    <i className={icon}></i>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
