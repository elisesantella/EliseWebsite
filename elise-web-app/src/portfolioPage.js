import React from 'react';
import { Link } from 'react-router-dom';
import './StyleSheets/portfolioPage.css';


const Portfolio = () => {
    return (  
        <div className="backgroundWrapper">
  <div className="background">
    <div className="portfolioContainer">
      <div className="projectsContainer">
        <div className="textContainer">
          <div className="portfolioTitleContainer">
            <h1 className="portfolioTitle">Portfolio</h1>
          </div>
        </div>
        <div className="portfolioImageContainer">
          {/* This can be left empty or removed if no longer needed */}
        </div>
      </div>
      {/* Moved cake image here to position over the container */}
      <div className="cakeContainer"></div>
    </div>
  </div>
</div>

    );
  }

export default Portfolio;

