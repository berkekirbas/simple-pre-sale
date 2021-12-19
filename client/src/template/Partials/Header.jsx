import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBell,
  faEnvelope,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { AuthenticationRoutes } from "../../config/RouteConfig";

function Header() {
  return (
    <div>
      <header className="header">
        <div className="overlay"></div>
        <section className="top-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="content">
                  <div className="left-content">
                    <ul className="left-list">
                      <li>
                        <p>
                          <FontAwesomeIcon icon={faHeadset} /> Support
                        </p>
                      </li>
                    </ul>
                    <ul className="top-social-links">
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
                  <div className="right-content">
                    <ul className="right-list">
                      <li>
                        <div className="language-selector">
                          <select name="language" className="language">
                            <option value="1">EN</option>
                            <option value="2">RU</option>
                            <option value="3">TR</option>
                          </select>
                        </div>
                      </li>
                      <li>
                        <div
                          className="notofication"
                          data-toggle="modal"
                          data-target="#usernotification"
                        >
                          <FontAwesomeIcon icon={faBell} />
                        </div>
                      </li>
                      <li>
                        <div
                          className="message"
                          data-toggle="modal"
                          data-target="/"
                        >
                          <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="mainmenu-area mainmenu-area2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <a className="navbar-brand d-lg-none" href="index-2.html">
                    <img className="l2" src="./logo192.png" alt="Logo" />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#main_menu"
                    aria-controls="main_menu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse fixed-height"
                    id="main_menu"
                  >
                    <div className="main-menu-inner">
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                          <a className="nav-link active" href="/" role="button">
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/">
                            About
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/">
                            Contract
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/">
                            Whitepaper
                          </a>
                        </li>
                      </ul>
                      <a
                        className="navbar-brand  d-none d-lg-block"
                        href="index-2.html"
                      >
                        <img className="l2" src="./logo192.png" alt="" />
                      </a>
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                          <a className="nav-link" href="contact.html">
                            Help
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="contact.html">
                            Contact
                          </a>
                        </li>
                        <li>
                          <Link
                            to={AuthenticationRoutes.LOGIN}
                            className="mybtn1"
                          >
                            PreSale
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
