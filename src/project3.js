import React from 'react';
import './project2.css'

import Photo from './project-images/skinRx.png'

const Project3 = () => {
    return (
        <div className="project-page">
            <h2>skinRx</h2>
            <br/>
            
            <p>Mobile application designed with the intention of promoting healthy skin care practices and routines. Our app includes three key features: skin care recommendation system, log to track skin's progress, and a barcode scanner to provide additional product information. <br /><br />
            Backend contributions: collaborative filtering recommendation system, web scraping for products database population, and user profile update capabilities.<br /><br />
            UI/UX design contributions: product recommendation, home, and user profile pages, as well as log in/sign up modal boxes. </p>
            <img src={Photo} alt='' width='100%'></img>
            <br/>
            
            <div className='page-bottom'>
                <div className='page-bottom-left'>
                    <b>December 2019</b> <br />
                    <a href="https://github.com/Capstone-R2D3/">View on Github</a>
                </div>
                <p />
                <div className='page-bottom-right'>
                    <b>SKILLS:</b> <br/>
                    React Native & Redux | Express - Cheerio & Multer | Sequelize & PostgreSQL | Barcode Lookup API | Expo | Heroku 
                </div>
            </div>

        </div>
    );
};

export default Project3;

