import React from "react";
import { pageLinks, icons } from "../data";
import PageLinks from "./PageLinks";

const Footer = () => {
    return (
        <footer className="section footer">
            <PageLinks parentClass='footer-links' itemClass='footer-link'/>
            
            <ul className="footer-icons">
                {icons.map((link) => {
                    const { id, href, icon } = link;
                    return (
                        <li key={id}>
                            <a
                                href={href}
                                target="_blank"
                                className="footer-icon"
                                rel="noreferrer"
                            >
                                <i className={icon}></i>
                            </a>
                        </li>
                    );
                })}
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date">{new Date().getFullYear()}</span> all rights reserved
            </p>
        </footer>
    );
};

export default Footer;
