import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import './navbar.css';

const Navbar = () => {
    return (
        <div id = "header">
            <div className="navBar" id = "myHeader">
                <div className="topNav">
                    <Link to="/website">Home</Link>&nbsp;•&nbsp;
                    <NavLink smooth to="/website/#projects" activeClassName="selected">Portfolio</NavLink> •&nbsp;
                    <NavLink smooth to="/website/#contact-me" activeClassName="selected">Contact</NavLink> •&nbsp;
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

