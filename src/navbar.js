import React from 'react';
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';

import './navbar.css';

const Navbar = () => {
    return (
        <div id = "header">
            <div className="navBar" id = "myHeader">
                <div className="topNav">
                    <Link to="/#welcome-page">Home</Link> • 
                    <Link to="/#projects">Portfolio</Link> • 
                    <Link to="/#contact-me">Contact</Link> • 
                    <Link to='/about'>About</Link>

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

