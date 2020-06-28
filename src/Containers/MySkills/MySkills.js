import React from "react";
import "./MySkills.css";
import SoftwareSkill from '../../components/softwareSkills/SoftwareSkill';

import { skillsSection } from '../../MainData/MainData';
import {Fade} from "react-reveal";

// import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
// import { skillsSection } from "../../portfolio";

export default function Skills() {
  return (
    <div className="main" id="skills">
        <div className="skills-title">
            <h1>
                Skills
            </h1>
        </div>
        <div className="software-skills">
            <SoftwareSkill />
        </div>


      {/* <div className="skills-main-div">
        <Fade left duration={1000}>
        <div className="skills-image-div">
          <img alt="Saad Working" src="https://jumpgrowth.com/wp-content/uploads/2020/02/mobile-app-developers.jpg" ></img>
        </div>
        </Fade>
        <Fade right duration={1000}>
        <div className="skills-text-div">
          <h1 className="skills-heading">{skillsSection.title} </h1>
          <p className="subTitle skills-text-subtitle">{skillsSection.subTitle}</p>
          
          <div>
            {skillsSection.skills.map(skills => {
              return <p className="subTitle skills-text">{skills}</p>;
            })}
          </div>
        </div>
        </Fade>
      </div> */}
    </div>
  );
}