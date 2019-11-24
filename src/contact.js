import React from 'react';

import './contact.css'

const Contact = () => {
    return (
        <div id = "contact-me">
            <div className = "contactText">
                <h1> Hello! / 你好 </h1>
                <p> Have any questions or just want to say "hi?" </p>
                <p>Drop me a line! I'll love to hear your thoughts. </p>
                <img alt='' src="https://www.nicepng.com/png/full/366-3662305_free-png-white-paper-planplane-png-images-transparent.png"/>
            </div>

            <div className = "contactBox">
                <div className = "name">
                    <p /> Name * 
                    <p /> <input id="nameBox" type="text" />
                    <p /> Email *
                    <p /> <input id="emailBox" type="text" />
                    <p /> Message * 
                    <p /> <textarea id='messageBox' rows="4" cols="50" />
                </div>
                <button type="button" id="sendMail"> SEND </button>
            </div>
        </div>
    )
};

export default Contact;

