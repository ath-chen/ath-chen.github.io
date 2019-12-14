import React from 'react';
import Projects from './projects';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Contact from './contact';

import './welcome-page.css'

const Welcome = () => {
    return (
        <div>
            <div id = "welcome-page">
                <div id = "welcome-page-container">
                    <div className="welcomeHeader">
                        <div className = "top">
                            <ul>
                            <div className ="typeWrite">hi, I'm Athena</div>
                            </ul>
                        </div>
                        <div className = "bottom">
                            <ul>
                                <div className = "exploreButton"> 
                                    <AnchorLink href="#projects">Explore</AnchorLink>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Projects />
            <Contact />
            
        </div>
    );
};

export default Welcome;
