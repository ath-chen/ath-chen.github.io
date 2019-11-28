import React from 'react';
import './project2.css'

import Photo from './project-images/cloak-n-dogger-thumbnail.jpg'

const Project2 = () => {
    return (
        <div className="project-page">
            <h2>cloak & dogger</h2>
            <br/>
            
            <p>Full stack e-commerce website built in a week - we're selling high-end fashion for your pets. Dogs, cats, bunnies, and everything else in between. Key features include: product filtering, cart editing, cart persistence, OAuth log in, and order history.</p>
            <p>My contributions include: cart editing, integrated guest and logged in user cart experience, user profile, OAuth log in, as well as homepage, user profile, and log in/sign up UI/UX design.   </p>

            <img src={Photo} alt='' width='100%'></img>
            <br/>
            
            <div className='page-bottom'>
                <div className='page-bottom-left'>
                    November 2019 <br />
                    <a href="https://github.com/ath-chen/grace-shopper">View on Github</a>
                </div>
                <p />
                SKILLS: <br/>
                React & Redux | Express | Sequelize & PostgreSQL | Passport | Heroku | Travis CI/CD
            </div>

        </div>
    );
};

export default Project2;

