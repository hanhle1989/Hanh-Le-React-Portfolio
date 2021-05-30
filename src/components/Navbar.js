import React from "react";
import logo from "../logo.png";
import {Link} from "react-scroll";

import resume from "../hanh-le-resume.pdf";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">About Me <span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={resume}>My Resume</a>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="projects" offset={-110} className="nav-link" href="#">Past Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="contact" offset={-110} className="nav-link" href="#">Contact Me</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
