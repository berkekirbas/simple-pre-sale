import React from "react";

function Characters() {
  return (
    <section className="game-play-section">
      <img
        className="left-img"
        src="assets/images/game-play/left-img.png"
        alt=""
      />
      <img
        className="right-img"
        src="assets/images/game-play/right-img.png"
        alt=""
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h5 className="subtitle">Our Characters</h5>
              <h2 className="title ">PLAY THIS CHARACTERS AND WIN</h2>
              <h6 className="text">
                Where skill is rewarded.Join millions of players worldwide!
              </h6>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="single-play">
              <div className="image">
                <img src="assets/images/game-play/1.png" alt="" />
              </div>
              <div className="contant">
                <a href="/" className="mybtn1">
                  Play
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="single-play">
              <div className="image">
                <img src="assets/images/game-play/2.png" alt="" />
              </div>
              <div className="contant">
                <a href="/" className="mybtn1">
                  Play
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="single-play">
              <div className="image">
                <img src="assets/images/game-play/3.png" alt="" />
              </div>
              <div className="contant">
                <a href="/" className="mybtn1">
                  Play
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="single-play">
              <div className="image">
                <img src="assets/images/game-play/4.png" alt="" />
              </div>
              <div className="contant">
                <a href="/" className="mybtn1">
                  Play
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <a href="/" className="b-all-btn">
              Exploring is coming soon{" "}
              <img src="assets/images/arrow.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Characters;
