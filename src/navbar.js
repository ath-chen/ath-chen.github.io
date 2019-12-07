import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import pdf from './resume.pdf';

import './navbar.css';

const Navbar = () => {
    return (
        <div id = "header">
            <div className="navBar" id = "myHeader">
                <div className="topNav">
                    {/* <Link to="/website">Home</Link>&nbsp;•&nbsp; */}
                    <a href={pdf}>Resume</a> •&nbsp;
                    <NavLink smooth to="/website/#projects" activeClassName="selected">Portfolio</NavLink> •&nbsp;
                    <NavLink smooth to="/website/#contact-me" activeClassName="selected">Contact</NavLink> •&nbsp;
                    <Link to='/about'>About</Link>
                </div>

                {/* For responsive web page */}
                {/* <div className = "dropNav">
                    <button type="button" id="dropbtn">Menu</button>
                    <div className="dropdown-content">
                        <NavLink smooth to="/website/#projects" activeClassName="selected">Portfolio</NavLink> 
                        <NavLink smooth to="/website/#contact-me" activeClassName="selected">Contact</NavLink> 
                        <Link to='/about'>About</Link>
                    </div>
                </div> */}

            </div>
        </div>
    );
};

export default Navbar;

