import React from 'react';
import './Contact.css';
import Button from '../../components/Button/Button';
import {Fade} from "react-reveal";

export default function Contact () {
    return(
     
            <div className="contact-main" id="contact">
                <div className="detail-main">   
                    <Fade right duration={1000} >
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
                            <p className="contact-details">If you like my work and have some cool project to work on, get in touch with me at
                            </p>
                            <p className="email-p">fahadnaeemsheikh@outlook.com
                            </p>
                            <p className="email-p">+92 310 1224061
                            </p>
                            <div className="social-contact">
                                <div className="github-image">
                                    <a href="https://github.com/fahadshaikh99">
                                        <img src="https://pcapplusplus.github.io/resources/logo-github-invert.png" />
                                    </a>
                                </div>
                                <div className="linkdn-image">
                                    <a href="https://www.linkedin.com/in/fahadshaikh99/" >
                                        <img src="https://www.transparentpng.com/thumb/linkedin/blue-box-social-circle-color-linkedin-transparent-images--17.png" />
                                    </a>
                                </div>
                                <div className="linkdn-image">
                                    <a href="https://twitter.com/" >
                                        <img src="https://img.pngio.com/black-twitter-icon-transparent-background-195407-free-icons-library-twitter-logo-white-transparent-798_825.jpg" />
                                    </a>
                                </div>  

                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        
    );
}

