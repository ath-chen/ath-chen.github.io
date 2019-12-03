import React from 'react';
import { Link } from 'react-router-dom';
import Contact from './contact';

import './projects.css'

import project1 from './project-images/pictionary.gif';
import project2 from './project-images/cloak-n-dogger-thumbnail.jpg';

const Projects = () => {
    return (
        <div>
            <div id="projects">
                <div className = "project-title"> Things I've Built </div>

                <div className = "first-row-project">
                    <Link to='/project2'>
                        <div className = "first-project-left">
                            <img src={project2} alt='' />
                        </div>
                    </Link>
                    
                    <Link to='/project1'>
                        <div className = "first-project-right">
                            <img src ={project1} alt=''/>
                        </div>
                    </Link>
                </div>
            </div>

            <Contact />
            
        </div>
    );
};

export default Projects;

