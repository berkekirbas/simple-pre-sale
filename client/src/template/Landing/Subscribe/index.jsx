import React from "react";

function Subscribe() {
  return (
    <div class="subscribe-area subscribe-area2">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="subscribe-box">
              <img class="left" src="assets/images/vr.png" alt="" />
              <img
                class="right"
                src="assets/images/game%20controler_.png"
                alt=""
              />
              <div class="row justify-content-center">
                <div class="col-lg-12">
                  <div class="heading-area">
                    <h5 class="sub-title">Subscribe to Game Coin</h5>
                    <h4 class="title">To Get Exclusive Benefits</h4>
                  </div>
                </div>

                <div class="col-lg-6 col-12">
                  <form action="#" class="form-area">
                    <input type="text" placeholder="Your Email Address" />
                    <button class="mybtn1" type="submit">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
