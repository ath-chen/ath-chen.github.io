import React from 'react';
import './project1.css'

import Photo from './project-images/pictionary-thumbnail.jpg'

const Project1 = () => {
    return (
        <div className="project-page">
            <h2>pictionary</h2>
            <br/>
            
            <p>I have always been drawn to learning new phrases in different languages, which inspired me to build this project. During a four day hackathon, I built a web based application that recognizes objects through the use of Vision AI with the capability of translating the identified English words to a language of your choosing.</p>

            <img src={Photo} alt='' width='100%'></img>
            <br/>
            
            <div className='page-bottom'>
                <div className='page-bottom-left'>
                    <b>November 2019</b> <br />
                    <a href="https://github.com/ath-chen/pictionary">View on Github</a>
                </div>
                <p />
                <div className='page-bottom-right'>
                    <b>SKILLS:</b> <br/>
                    React & Redux | Express & Multer | Sequelize & PostgreSQL | Google Cloud Vision API | Google Text Translation API 
                </div>
            </div>

        </div>
    );
};

export default Project1;

