import React from 'react';
import { Link } from 'react-router-dom';
import project1 from './project-images/pictionary.gif';
import project2 from './project-images/cloak-n-dogger-thumbnail.jpg';
import project3 from './project-images/skinRx.png';
import './projects.css'



const Projects = () => {
    function alert1() {
        let elem = document.getElementById('full')
        let height = (elem.scrollHeight)/5
        elem.scrollTo(0,height)
    }

    function seemore() {
        let elem = document.getElementById('full')
        let height = elem.scrollHeight;

        if(elem.scrollTop > 0 && elem.scrollTop < (height/7)) {
            document.getElementById('skin').style.display = 'block'
            document.getElementById('proj1-img').style.opacity = 1

            document.getElementById('try').style.display = 'none'
            document.getElementById('pic').style.display = 'none'
            document.getElementById('proj2-img').style.opacity = .25
            document.getElementById('proj3-img').style.opacity = .25
        } else if (elem.scrollTop > (height/8) && elem.scrollTop < (height/3.7)) {
            document.getElementById('try').style.display = 'block'
            document.getElementById('proj2-img').style.opacity = 1

            document.getElementById('skin').style.display = 'none'
            document.getElementById('pic').style.display = 'none'
            document.getElementById('proj3-img').style.opacity = .25
            document.getElementById('proj1-img').style.opacity = .25
        } else if (elem.scrollTop > 3){
            document.getElementById('pic').style.display = 'block'
            document.getElementById('proj3-img').style.opacity = 1

            document.getElementById('try').style.display = 'none'
            document.getElementById('skin').style.display = 'none'
            document.getElementById('proj2-img').style.opacity = .25
            document.getElementById('proj1-img').style.opacity = .25
        }

    }

    return (
        <div id="projects">

            <div className='full-page-projs' id='full' onLoad={alert1} onScrollCapture={seemore}>
                <h1 className="project-title">Some Things I've built</h1>
                 <Link to='/project3' target="_blank">
                    <div className = "child">
                        <img src={project3} alt='' id='proj1-img'/>
                    </div>
                </Link>

                <Link to='/project2' target="_blank">
                    <div className = "child">
                        <img src={project2} alt='' id='proj2-img' />
                    </div>
                </Link>
                    
                <Link to='/project1' target="_blank">
                    <div className = "child">
                        <img src={project1} alt='' id='proj3-img'/>
                    </div>
                </Link>
            </div>
            


            <div className='projects-right'>
                {/* TRIAL AND ERROR RN! */}
                {
                    <span>
                        <span id='skin' className='proj-name'>
                            <span>skinRx</span> <br/>
                            <h2>Promoting healthier skin care habits.</h2>
                        </span>
                        <span id='try' className='proj-name'>
                            <span>cloak & dogger</span> <br/>
                            <h2>One stop shop for all your pet's needs.</h2>
                        </span>
                        <span id='pic' className='proj-name'>
                            <span>pictionary</span> <br/>
                            <h2>Snap a picture, learn a language.</h2>
                        </span>
                    </span>
                }
                <p/> 
                __________________________
                <h4>FEATURED PROJECTS</h4> 
                Showcasing a few things I have built. Want to learn more? Hover over the projects, scroll, and click for more. <br/>
                
                <p/>

{/* 
                <h4>Skills</h4>
                <div className='skills'>
                    <div className='skills-box'>
                        <p>LANGUAGES</p>
                        JavaScript<br/>
                        HTML <br/>
                        CSS <br/>
                        Python <br/>
                    </div>
                    <div className='skills-box'>
                        <p>FRAMEWORKS</p>
                        Node.js <br/>
                        React <br/>
                        React Native <br/>
                        Redux <br/>
                        Cheerio <br/>
                        Express <br/>
                        PostgreSQL <br/>
                        Sequelize <br/>
                    </div>
                    <div className='skills-box'>
                        <p>TOOLS</p>
                        Git & Github <br/>
                        Heroku <br/>
                        Travis CI <br/>
                        Postman <br/>
                        Postico <br/>
                    </div>
                </div> */}
            </div>

            
        </div>
    );
};

export default Projects;





