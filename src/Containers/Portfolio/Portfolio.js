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
            <Fade duration={1000} right>
              <MobileDevice 
                imagePath = "https://ucea96dd17a66e9aabe0d71ec9ee.previews.dropboxusercontent.com/p/thumb/AA6ZWCsax1gtR1TMvPwCYbNrqsILxocgLX1Pstko3dMCOa1C_TB4yyEHurAiCihtwZzbPPZ1Rcm258pisJ5vkXTgxZ5elIOuL5mGyK2IPU1EByoBvrlFFDZ-VRtU95AKG6OygAAmXDMIcUH8OSNkCqxGxlgi-LhZiDImQ6h0B-Vec7UrfadGOiot6EEm4N4HZRV1gPuKR0AJ9duQe5c1ifi2sJ-eYMkCAPz0c-ahWmJlZ3oE18ronDFQwTD1TRnwBDJOsJeOt0HS40hKLwY72_wphUPfBphK8zALEOIUbhMyTXjy02sFB2iVjyrSf3O2Wrwy4duLE4stuvJlvCJHV1T7NviOQtkmBnR5wkqguCaSZJ_NfzEW2KQhoTEpcIslkZMuugV8onsgl9h2-QGg0Uca/p.png?fv_content=true&size_mode=5" 
                appName="FITNESS TRACKING APP"
              />
            </Fade>
            <Fade duration={1000} right>
              <MobileDevice 
                imagePath = "https://ucf1818fb19be6ff3b207e7fd29c.previews.dropboxusercontent.com/p/thumb/AA7LKrA2HMjSzzadDbb0Gf_h04GTutKL2CoK5eFuXAfkuh1VVeVPNRClReKb87CnDSFcQZBEObOXcrbjoa2M7Oq09-46jzO6th7BsEMql8Ac4_9A6CrK4Y2t2UeGCh6SKkTklw4WiWE8r_fVljstOqvb3SLqelFg0C2jZN3GNH8QmERZBNeW1aFcsJ5eW8hEhUr1cQe8PyjGLCtoaAdE49AoT4rYmfmDiDDngDCJQtBZ7__XE1jic0HcJHFdJGJ0K9EhNsp-4Rxannh2i3YhhO7nvy4neoOOqya8v6zaeJd3E34-XSnSjXa25w03OU4r2XPG7jON9HsXfMmMMB171qp_hs-DjzARp9_2jR5VbYpfro94fKhB_YOMve1YbtuvwaTd5zUmK9-qgpNMGquEgTtn/p.png?fv_content=true&size_mode=5"
                appName="FITNESS TRACKING APP"
              />
            </Fade>
          
          </div>

      </div>
      <div className="button-project">
            <Button text="More Project" newTab={true} href="google.com" />
          </div>

    </div>
  );
}