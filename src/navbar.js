import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import pdf from './resume.pdf';

import './navbar.css';

const Navbar = () => {
    return (
        <div id = "header">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

            <div className="navBar" id = "myHeader">
                <div className="topNav">
                    <Link to="/website">Home</Link>&nbsp;•&nbsp;
                    {/* <a href={pdf}>Resume</a> •&nbsp; */}
                    <NavLink smooth to="/website/#projects" activeClassName="max-screen">Portfolio</NavLink> •&nbsp;
                    <NavLink smooth to="/website/#contact-me" activeClassName="max-screen">Contact</NavLink> •&nbsp;
                    <Link to='/about' activeClassName="max-screen">About</Link>
                </div>


                {/* For responsive web page */}
                <div className = "dropNav">
                    <i class="fa fa-align-justify" id="dropbtn"></i>
                    <div className="dropdown-content">
                        <NavLink smooth to="/website/#projects" activeClassName="min-screen" className="min-screen">Portfolio</NavLink> 
                        <NavLink smooth to="/website/#contact-me" activeClassName="min-screen" className="min-screen">Contact</NavLink> 
                        <Link to='/about' className="min-screen">About</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;

