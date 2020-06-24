﻿import React from "react";
import "./Greeting.css";
import Button from '../Button/Button';
import {Fade} from "react-reveal";

export default function Greeting() {
  return (
    <Fade bottom duration={1000} distance="40px">
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">
              {" "}
              Fahad Shaikh
              {" "} 
            </h1>
            <p className="greeting-text-p subTitle">I'm a Pakistan based React Native mobile apps <br />
            developer and UX/UI designer.</p>
            <p className="greeting-text-p2 subTitle">I enjoy coding, designing mobile apps and turning complex problem into simple.</p>
            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href="google.com" />
            </div>
          </div>
        </div>
       
      </div>
    </div>
    </Fade>
  );
}