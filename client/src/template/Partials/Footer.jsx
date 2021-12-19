import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="flogo">
              <a href="/">
                <img width={256} height={256} src="./logo.png" alt="" />
              </a>
            </div>
            <div className="social-links">
              <ul>
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-menu">
              <ul>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">FAQ</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
                <li>
                  <a href="/">Terms of Service</a>
                </li>
                <li>
                  <a href="/">Privacy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>Copyright © 2021.All Rights Reserved By Game Coin</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
