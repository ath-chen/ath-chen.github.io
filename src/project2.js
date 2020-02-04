import React from 'react';
import './project2.css'

import Photo from './project-images/cloak-n-dogger-thumbnail.jpg'

const Project2 = () => {
    return (
        <div className="project-page">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

            <h2>cloak & dogger</h2>
            <br/>
            
            <p>Full stack faux e-commerce website built in a week - we're selling high-end fashion for your pets. Dogs, cats, bunnies, and everything else in between. Key features include: product filtering, cart editing, cart persistence, OAuth log in, and order history. <br /><br />
            Backend contributions: cart editing, integrated guest and logged in user cart experience, user profile, and OAuth log in. <br /><br />
            UI/UX design contributions: homepage, user profile, and log in/sign up modal boxes. </p>

            <img src={Photo} alt='' width='100%'></img>
            <br/>
            
            <div className='page-bottom'>
                <div className='page-bottom-left'>
                    <b>November 2019</b> <br />
                    <i className="fa fa-github"></i> <a href="https://github.com/ath-chen/grace-shopper" className='link' target="_blank">View on Github</a> <br/>
                    <i className="fa fa-link"></i> <a href="https://cloak-n-dogger.herokuapp.com/" className='link' target="_blank">Deployed Site</a>
                </div>
                <p />
                <div className='page-bottom-right'>
                    <b>SKILLS:</b> <br/>
                    React & Redux | Express | Sequelize & PostgreSQL | Passport | Heroku | Travis CI/CD
                </div>
            </div>

        </div>
    );
};

export default Project2;

