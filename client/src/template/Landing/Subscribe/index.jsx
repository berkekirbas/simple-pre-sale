import React from "react";

function Subscribe() {
  return (
    <div className="subscribe-area subscribe-area2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="subscribe-box">
              <img className="left" src="assets/images/vr.png" alt="" />
              <img
                className="right"
                src="assets/images/game%20controler_.png"
                alt=""
              />
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="heading-area">
                    <h5 className="sub-title">Subscribe to Game Coin</h5>
                    <h4 className="title">To Get Exclusive Benefits</h4>
                  </div>
                </div>

                <div className="col-lg-6 col-12">
                  <form action="/" className="form-area">
                    <input type="text" placeholder="Your Email Address" />
                    <button className="mybtn1" type="submit">
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
