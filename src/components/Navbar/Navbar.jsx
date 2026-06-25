import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = ({ data }) => {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/NavLogo/favicon.png" alt="Whistle and Smile" />
        </div>

        <a href="tel:01169328350" className="navbar-contact">
          <img
            src="/NavLogo/teleLogo.png"
            alt="Phone"
            className="contact-icon"
          />

          <span className="number-wrapper">
            <span className="contact-number">01169328350</span>
          </span>
        </a>
      </nav>

      <div className="offer-banner">
        <p className="offer-text">
          Starting at{" "}
         
          <span className="strike-price">₹{data.offerOldPrice}</span>
          <span className="offer-price">₹{data.offerPrice}</span>. Hurry! Offer
          ends soon.
        </p>
      </div>
    </header>
  );
};

export default Navbar;
