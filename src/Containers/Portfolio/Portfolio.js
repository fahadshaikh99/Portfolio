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
                <h1>
                  Tracking App 
                  <h3>
                    In This App Users can track live location using Google Map(Android) and Apple Map(IOS).
                  </h3>
                </h1>
                
                <MobileDevice 
                  imagePath = "https://uc594996f109eb45f53a7eb98701.previews.dropboxusercontent.com/p/thumb/AA6J2iiq6a5-QofqzA5ASPp8KxFRdgbfvhED50M2nJnJqoXx16aEI2LwLOi6st4IS7WM1RAWj83vwrhIpdNGyCvRfafxglhZskU_SIWRGxj_fxIadQxp8cEJqkGXHYPPc0DkutcAXl3sqWPMIprYcTcW91VhIFuF7Q7ST_Lu8emkMWnVf3nl-3S9CiAu9snA9uUp43hSqcwRlowVJhyJuPRNzrxHmD3oSP6iUa-u_YtXnJOl_gilV_lDlb795u4N96nnWRcBuayHgR1nVmIKc7MWcfqErebuNmFpWXp7z5W5IkbOkVvyCXLuLrjc_H8lpv-SM7N7zc4y2fwKa0veJqtVb_BGBic8oY_psTaN8Zkrz0zmhSkKOzpV2ZNWiz_hLCPM8lKRBFWCuT-8LicpKGGP/p.png?fv_content=true&size_mode=5" 
                  appName="FITNESS TRACKING APP"
                />
              </Fade>

              
            </div>
          
          </div>

          <div className="device-comp">
            <div className="Title_and_Image">
              <Fade duration={1000} right>
                <h1>
                  AR- GAMES
                  <h3>
                    In this app users can play augmented reality games using instagram filters
                  </h3>
                </h1>
                
                <MobileDevice 
                  imagePath = "https://ucae71b81b04f6adc01b7966702f.previews.dropboxusercontent.com/p/thumb/AA41yjA8v0lPoieG9v3ffpupndjAaFTBN4ulfIdYY7Mtb1l9KZbjHCd6sZmVbvQoSgGhLjmsA5fayyPP_C8wfwY-iPsTGAW5dpU-5ls7Ybv2L-u_HNyICcFPys9rvOrqsdmWSXY7Y91MdaM8nZhVmWZU_m6EHrqPKaTGurRdJG-fzEwgKqQKw4Z2iZju8fdz1JVMEu_wSIYJMTC1PrLV1By4QC1nsQiiIzYBvwEBElmfmBp9tEkISshiXkAEm7bU24Jor5RLhcQvac1YcfOKoFwq348399irLmOpGwq8aFzoNIc0dM3vtJu5RbxCy60KXvaPynFCI6H3BkhFACf9Cn6Lv78szNs0u9d9VmivjkelYFW_2JYYAA8eMzrUHPVc0wy2XMVbkDJ_m-Opc6GaIAtW/p.png?fv_content=true&size_mode=5" 
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