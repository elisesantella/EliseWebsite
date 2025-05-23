import React from 'react';
import { Link } from 'react-router-dom';
import './StyleSheets/homePage.css'; 

const Home = () => {
    return (
      <div className="backgroundWrapper">
        <div className="background"> {/* Background image here */}
          <div className="container">
          <div className="leftContainer">
            <div className="titleContainer">
                <h1 className="titleText">Hi, I'm Elise Santella</h1>
            </div>
            <div className="introContainer">
                <h1 className="introText1">You came to the</h1>
                <h1 className="introText2">right place</h1>
                <h5 className="introText3">A place where software meets passion</h5>
            </div>
            <div className="buttonContainer">
            <Link to="/about" style={{ textDecoration: 'none' }}>
                <button className="introButton">
                    <h5 className="buttonText">WORK WITH ME</h5> 
                </button>
            </Link>
            </div>
          </div>
          <div className="rightContainer">
            <div className="cocktailContainer">
                <div className="champagneGif"></div>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }

export default Home;

