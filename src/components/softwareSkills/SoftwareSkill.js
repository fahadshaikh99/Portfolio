import React from "react";
import "./SoftwareSkill.css";
// import { skillsSection } from "../../portfolio";
import { skillsSection } from '../../MainData/MainData';

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
          <div className="skills-title">
            <h1>Development Skills</h1>
          </div>
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
      
          <div className="skills-title">
            <h1>Designing & Prototyping Tools</h1>
          </div>
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