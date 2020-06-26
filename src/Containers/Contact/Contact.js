import React from 'react';
import './Contact.css';
import Button from '../../components/Button/Button';
import {Fade} from "react-reveal";

export default function Contact () {
    return(
        <Fade bottom duration={1000} distance="40px">
            <div className="contact-main" id="contact">
                <div className="detail-main">    
                    <div className="text-box">
                        <h1 className="name-text">
                        {" "}
                        Fahad Shaikh
                        {" "} 
                        </h1>
                        <p className="location-text">
                            Developer and Designer
                        </p>
                        <p className="location-text">
                            Karachi, Pakistan
                        </p>
                        <p className="contact-details">If you like my work and have some cool project to <br /> work on, get in touch with me at
                        </p>
                        <p className="email-p">fahadnaeemsheikh@outlook.com
                        </p>
                        <p className="email-p">+92 310 1224061
                        </p>
                    </div>
                </div>
            </div>
        </Fade>
    );
}
