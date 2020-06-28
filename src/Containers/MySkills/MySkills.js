import React from "react";
import "./MySkills.css";
import SoftwareSkill from '../../components/softwareSkills/SoftwareSkill';

import { skillsSection } from '../../MainData/MainData';
import {Fade} from "react-reveal";

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
    </div>
  );
}