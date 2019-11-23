import React from 'react';

import './navbar.css';

const Navbar = () => {
    return (
        <div id = "header">
            <div className="navBar" id = "myHeader">
                <div className="topNav">
                    <a href="#welcome-page">Home</a> •
                    <a href="#projects">Portfolio</a> •
                    <a href="#contact-me">Contact</a> 
                    {/* • <a href="about.asp">About</a> */}

                </div>

                {/* For responsive web page */}
                {/* <div className = "dropNav">
                    <button type="button" id="dropbtn">Menu</button>
                    <div className="dropdown-content">
                        <a href="#">Portfolio</a>
                        <a href="#">Contact</a>
                        <a href="#">About</a>
                    </div>
                </div> */}

            </div>
        </div>
    );
};

export default Navbar;


// import { Link } from 'react-router-dom';
{/* <Link to="/experience">Resume</Link> • */}
