import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Hero() {
  return (
    <div className="hero-area hero-area2 hero-area5 hero-text">
      <img
        className="shape parallax5"
        src="assets/images/home/h2-shape.png"
        alt=""
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="content">
              <div className="content">
                <h5 className="subtitle">PLAY GAMES to WIN</h5>
                <h1 className="title">Our Cryptocurrency is in PreSale</h1>
                <div className="links">
                  <a href="/" className="mybtn1">
                    Buy Now
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=jssO8-5qmag"
                    className="video_btn play-video mfp-iframe"
                  >
                    <FontAwesomeIcon icon={faPlay} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
