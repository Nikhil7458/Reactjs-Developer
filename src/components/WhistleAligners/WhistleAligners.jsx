import { useEffect, useRef } from "react";
import "./WhistleAligners.css";

export default function WhistleAligners({data}) {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let animationId;

    const animate = () => {
      if (marquee) {
        if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
          marquee.scrollLeft = 0;
        } else {
          marquee.scrollLeft += 0.6;
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="whistle-container">
      {/* Light Green Top Banner */}
      <div className="top-banner">
        <div className="banner-track" ref={marqueeRef}>
          <div className="banner-content">
            Free orthodontic consultation worth ₹1500 &nbsp;&nbsp;•&nbsp;&nbsp;
            Our inaugural launch benefit &nbsp;&nbsp;•&nbsp;&nbsp;
            Free teeth scan worth ₹500 &nbsp;&nbsp;•&nbsp;&nbsp;
            Free orthodontic consultation worth ₹1500 &nbsp;&nbsp;•&nbsp;&nbsp;
            Free orthodontic consultation worth ₹1500 &nbsp;&nbsp;•&nbsp;&nbsp;
            Our inaugural launch benefit &nbsp;&nbsp;•&nbsp;&nbsp;
            Free teeth scan worth ₹500
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="whistle-content">
        {/* Left Column - Exact like first screenshot */}
        <div className="whistle-left">
          <h1 className="whistle-title">Dream smiles achieved secretly</h1>

          <p className="whistle-description">
            Experience the superior quality of our Whistle Aligners crafted with 
            3-layer PU material. With 450+ clinics nationwide, enjoy comfortable 
            treatment by expert orthodontists at House of Clove.
          </p>

          <p className="whistle-note">
            The pricing is different for every case. Cases with higher complexity 
            requiring more aligners and additional time and effort from our dentists.
          </p>
        </div>

        {/* Right Column - Pixel Perfect Pricing Card */}
        <div className="pricing-card">
  {/* Floating Product Image */}
  <img
    src="/WhistleAligners/whistle-logo.png"
    alt="Whistle Aligners"
    className="product-image"
  />

  {/* Left Content */}
  <div className="pricing-left">
    {/* <h3 className="pricing-title">
      Whistle Aligners
    </h3> */}
    <h3  className="pricing-title">{data.title}</h3>

    <div className="pricing-amount">
      <span className="price-crossed">
       ₹{data.oldPrice}
      </span>

      <div className="price-row">
        <span className="price-start">
          starting at
        </span>

        <span className="price-current">
         ₹{data.currentPrice}
        </span>
      </div>

      <span className="price-tax">
        inc. of all taxes
      </span>
    </div>

    <div className="pricing-features">
      <div className="feature-item">
        <div className="checkmark">
          ✓
        </div>

        <span>
          Offer valid for a limited time
        </span>
      </div>

      <div className="feature-item">
        <div className="checkmark">
          ✓
        </div>

        <span>
          Easy financing options
        </span>
      </div>
    </div>
  </div>

  {/* Bottom Right CTA */}
  <button className="learn-more-btn">
    <span>Learn more</span>

    <svg
      width="28"
      height="18"
      viewBox="0 0 28 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 9H25"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M17 1L26 9L17 17"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
</div>
     

      </div>
    </section>
  );
}