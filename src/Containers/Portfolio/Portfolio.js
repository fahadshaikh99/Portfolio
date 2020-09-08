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
              <div className="Title_and_Image">
                <Fade duration={1000} right>
                  <div className="title_github">
                    <h1>
                      Connectee
                      <h3>
                        Connectee is a social networking app. In connectee you can post your images, everyone can comment or like your
                        pics, users can vist each others profile.                     
                      </h3>             
                    </h1>
                    <div className="github-img">
                      <a href="https://github.com/fahadshaikh99/instagram_clone">
                        <img src="https://image.flaticon.com/icons/png/512/25/25231.png" /> 
                      </a>
                    </div>
                  </div>
    
                  <MobileDevice 
                    imagePath = "https://raw.githubusercontent.com/fahadshaikh99/Portfolio/master/github_host/connectee.png" 
                    appName="FITNESS TRACKING APP"
                  />
                </Fade>              
              </div>
            
            </div>

          <div className="device-comp">
            <div className="Title_and_Image">
              <Fade duration={1000} right>
                <div className="title_github">
                  <h1>
                    Tracking App 
                    <h3>
                      In This App Users can track live location using Google Map(Android) and Apple Map(IOS).                     
                    </h3>             
                  </h1>
                  <div className="github-img">
                    <a href="https://github.com/fahadshaikh99/TrackApp" newTab={true}>
                      <img src="https://image.flaticon.com/icons/png/512/25/25231.png" /> 
                    </a>
                  </div>
                </div>
   
                <MobileDevice 
                  imagePath = "https://raw.githubusercontent.com/fahadshaikh99/Portfolio/master/github_host/Track_newVersion.png" 
                  appName="FITNESS TRACKING APP"
                />
              </Fade>              
            </div>
          </div>

          <div className="device-comp">
            <div className="Title_and_Image">
              <Fade duration={1000} right>
                <div className="title_github">
                  <h1>
                    AR- GAMES
                    <h3>
                      In this app users can play augmented reality games using instagram filters
                    </h3>
                  </h1>
                  <div className="github-img">
                      <a href="https://github.com/fahadshaikh99/ArGamesApp">
                        <img src="https://image.flaticon.com/icons/png/512/25/25231.png" /> 
                      </a>
                  
                  </div>
                </div>
                
                <MobileDevice 
                  imagePath = "https://raw.githubusercontent.com/fahadshaikh99/Portfolio/master/github_host/new_Ar_App.png" 
                  appName="FITNESS TRACKING APP"
                />
              </Fade>

              
            </div>
          
          </div>

      </div>
      <div className="button-project">
          <Button text="More Project" newTab={true} href="https://github.com/fahadshaikh99" />
      </div>

    </div>
  );
}