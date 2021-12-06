import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Hero() {
  return (
    <div class="hero-area hero-area2 hero-area5 hero-text">
      <img
        class="shape parallax5"
        src="assets/images/home/h2-shape.png"
        alt=""
      />
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="content">
              <div class="content">
                <h5 class="subtitle">PLAY GAMES to WIN</h5>
                <h1 class="title">Our Cryptocurrency is in PreSale</h1>
                <div class="links">
                  <a href="/" class="mybtn1">
                    Buy Now
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=jssO8-5qmag"
                    class="video_btn play-video mfp-iframe"
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
