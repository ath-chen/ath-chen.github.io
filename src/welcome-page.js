import React from 'react';
import Projects from './projects';

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
                                {/* <div className ="typeWrite">  &  I like to code </div> */}
                                <div className = "exploreButton"> 
                                    <a href="#projects">Explore</a>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Projects />
            
        </div>
    );
};

export default Welcome;
