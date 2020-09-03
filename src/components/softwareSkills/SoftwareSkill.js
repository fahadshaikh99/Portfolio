import React from "react";
import "./SoftwareSkill.css";
// import { skillsSection } from "../../portfolio";
import { skillsSection } from '../../MainData/MainData';

export default function SoftwareSkill() {
  return (
    
      <div className="software-skills-main-div">
        <div className="skills-cont">
          <h1>Part coder</h1>
          <ul className="dev-icons">
            {skillsSection.softwareSkills.map(skills => {
              return (
                <li className="software-skill-inline" name={skills.skillName}>
                  <i className={skills.fontAwesomeClassname}></i>
                  <p>{skills.skillName}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="chart-image">
          <img src="https://raw.githubusercontent.com/fahadshaikh99/Portfolio/master/github_host/pie-chart.png" />
        </div>
        
        <div className="skills-cont">
          <h1>Part designer</h1>
          <ul className="dev-icons">
            {skillsSection.designSkills.map(skills => {
              return (
                <li className="software-skill-inline" name={skills.skillName}>
                  <i className={skills.fontAwesomeClassname}></i>
                  <p>{skills.skillName}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
   
  );
}