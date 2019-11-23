import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css';

const Footer = () => {
    return (
        <div className = 'footer'> 
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            
            <a href="https://www.linkedin.com/in/athena-chen-2264b393/" className="linkedin"><i className="fa fa-linkedin"></i></a>
            <a href="#" className="github"><i className="fa fa-github"></i></a>
            <a href="#" className="google"><i className="fa fa-google"></i></a>
        
        </div>
    );
};

export default Footer;
