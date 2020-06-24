import React from "react";
import "./Skills.css";
import {Fade} from "react-reveal";

export default function Skills() {
  return (
    <div className="main" id="skills">
        <h1>Skills</h1>
        <div className="Skills-sections">
            <Fade left duration={1000}>
                          
                <div>
                    <h2>Development Skills</h2>
                    <ul>
                        <li>
                            Hello
                        </li>
                        <li>
                            Hello
                        </li>
                        <li>
                            Hello
                        </li>
                        <li>
                            Hello
                        </li>
                        <li>
                            Hello
                        </li>
                    </ul>
                </div>
            </Fade>

            <Fade up duration={1000}>
                <div className="Skills-image">
                    <img src="https://jumpgrowth.com/wp-content/uploads/2020/02/mobile-app-developers.jpg" />
                </div>
            </Fade>

            <Fade right duration={1000}>
                
                <div>
                    <h2>Development Skills</h2>
                    <ul>
                        <li>
                            Hello
                        </li>
                        <li>
                            Hello
                        </li>
                        <li>
                            Hello
                        </li>
                        <li>
                            Hello
                        </li>
                        <li>
                            Hello
                        </li>
                    </ul>
                </div>
            </Fade>
        </div>

        <div className="tech-tools-used">
            <div className="Tools-heading">
                <h2>
                    Tools and Technologies
                </h2>
            </div>
        </div>
    </div>
  );
}