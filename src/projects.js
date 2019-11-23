import React from 'react';
import Contact from './contact';

import './projects.css'

import project1 from './project-images/pictionary-thumbnail.jpg';
import project2 from './project-images/cloak-n-dogger-thumbnail.jpg';

const Projects = () => {
    return (
        <div>
            <div id="projects">
                <div className = "project-title"> Things I've Built </div>

                <div className = "first-row-project">
                    <a href = "project1">
                        <div className = "first-project-left">
                            <img src={project2} />
                        </div>
                    </a>
                    <a href = "project2">
                        <div className = "first-project-right">
                            <img src ={project1} />
                        </div>
                    </a>
                </div>
            </div>

            <Contact />
            
        </div>
    );
};

export default Projects;

