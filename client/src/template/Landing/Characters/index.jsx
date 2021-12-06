import React from "react";

function Characters() {
  return (
    <section class="game-play-section">
      <img class="left-img" src="assets/images/game-play/left-img.png" alt="" />
      <img
        class="right-img"
        src="assets/images/game-play/right-img.png"
        alt=""
      />
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-heading">
              <h5 class="subtitle">Our Characters</h5>
              <h2 class="title ">PLAY THIS CHARACTERS AND WIN</h2>
              <h6 class="text">
                Where skill is rewarded.Join millions of players worldwide!
              </h6>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="single-play">
              <div class="image">
                <img src="assets/images/game-play/1.png" alt="" />
              </div>
              <div class="contant">
                <a href="#" class="mybtn1">
                  Play
                </a>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="single-play">
              <div class="image">
                <img src="assets/images/game-play/2.png" alt="" />
              </div>
              <div class="contant">
                <a href="#" class="mybtn1">
                  Play
                </a>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="single-play">
              <div class="image">
                <img src="assets/images/game-play/3.png" alt="" />
              </div>
              <div class="contant">
                <a href="#" class="mybtn1">
                  Play
                </a>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="single-play">
              <div class="image">
                <img src="assets/images/game-play/4.png" alt="" />
              </div>
              <div class="contant">
                <a href="#" class="mybtn1">
                  Play
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 text-center">
            <a href="#" class="b-all-btn">
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
