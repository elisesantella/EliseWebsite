import React from 'react';
import { Link } from 'react-router-dom';
import './StyleSheets/aboutPage.css'; 

const About = () => {
    return (  
      <div className="backgroundWrapper">
        <div className="background"> {/* Background image here */}
          <div className="aboutContainer">
            <div className="photoContainer">
              <div className="buttonMoreContainer">
                <button className="findMoreButton">
                  <h5 className="buttonMoreText">FIND OUT MORE</h5> 
                </button>
              </div>
            </div>
            <div className="aboutMeContainer">
              <div className="aboutTitleContainer">
                <h1 className="aboutTitleText">It's all about me!</h1>
                {/* Wrap the button inside a div with Link */}
                <Link to="/">
                  <div className="homeIconWrapper">
                    <button className="homeIconContainer"></button>
                  </div>
                </Link>
              </div>
              <h5 className="aboutBodyText">INSERT TEXT SOMEHOW</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default About;

