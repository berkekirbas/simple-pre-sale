import React from "react";

function PrizePool() {
  return (
    <section className="counter-section counter-section2">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="left-info">
              <h5>Our Game`s First Feature </h5>
              <h3>Tournaments!</h3>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="prize-pool">
              <h6>Prize pool</h6>
              <h3>$1000</h3>

              <img src="assets/images/s-box.png" alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="l-winner-slider-wrapper">
              <h4>LAST WINNERS</h4>
              <h5>IS COMING SOON</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrizePool;
