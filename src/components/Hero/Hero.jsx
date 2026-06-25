import React from "react";
import "./Hero.css";

const Hero = ({data}) => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Text Content */}
        <div className="hero-content">
          {/* <h1 className="hero-title">Invisible Aligners for a dream smile</h1> */}
          <h1 className="hero-title">{data?.title}</h1>

          <p className="hero-subtitle">{data?.subtitle}
         
          {/* <p className="hero-subtitle">
            Book a Scan and avail a free Orthodontist Consult{" "} */}
            <span className="hero-highlight">worth ₹1500</span>
          </p>
        </div>

        {/* Right Image */}
        <div className="hero-image-wrapper">
          <img
            src="/HeroImg/hero-girl.png"
            alt="Smiling girl holding invisible aligner"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;