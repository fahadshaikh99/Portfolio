import React from "react";
import "./Portfolio.css";
import {Fade} from "react-reveal";
import MobileDevice from '../../components/MobileComp/MobileDevice';
import Button from '../../components/Button/Button';

export default function Skills() {
  return (
    <div className="protfolio" id="portfolio">
      <div className="Portfolio-title"> 
        <h1>
            Projects
        </h1>
        <p>
          Below you can see some projects I've been working on lately. I divide each project into four follow-up areas:  Requirments, Mockup, design and development. This process allows me to create a great mobile apps with client goals in mind.
        </p>
      </div>

      <div className="Project-section">
          <div className="device-comp">
            <MobileDevice />
            <MobileDevice />
            <MobileDevice />
          </div>
          <div className="project-button">
            <Button text="View More Projects" href="#contact" />
          </div>
      </div>

    </div>
  );
}