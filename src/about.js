import React from 'react';

import './about.css'
import photo from './project-images/unnamed.jpg'

const About = () => {
    return (
        <div>
            <div id="about">
                <div className="skills">
                    <img src={photo} alt='' width='80%'></img>
                    
                </div>
                <div className='summary'>
                    <h2>Hi, I'm Athena.</h2>
                    <br/>
                    An accountant turned software engineer with a passion for building full stack applications and beautiful UI/UX experiences. 
                    <p/>
                    A nature girl at heart, you can (probably always) catch me hiking some random trail. To the left is a photo of me climbing down from Mount Batur after viewing the most stunning sunrise. 
                    <p />
                    If you are interested in working together, let's connect! You can reach me via e-mail or via LinkedIn.

                    {/* SKILLS: <p />
                    JavaScript <br />
                    HTML & CSS <br />
                    Node.js <br />
                    Express.js <br />
                    React / Redux <br />
                    Sequelize / SQL <br /> */}
                    
                </div>
            </div>
        </div>
    );
};

export default About;

