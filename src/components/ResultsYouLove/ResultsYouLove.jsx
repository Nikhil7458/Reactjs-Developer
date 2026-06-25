import React from "react";
import "./ResultsYouLove.css";

const results = [
  {
    id: 1,
    before: "/resultImg/ib.jpg",
    after: "/resultImg/ia.jpg",
    concern: "Gaps",
    duration: "8 months",
  },
  {
    id: 2,
    before: "/resultImg/ib1.jpg",
    after: "/resultImg/ia1.jpg",
    concern: "Crooked Teeth",
    duration: "8 months",
  },
  {
    id: 3,
    before: "/resultImg/ib3.jpg",
    after: "/resultImg/ia3.jpg",
    concern: "Open Bite",
    duration: "8 months",
  },
  {
    id: 4,
    before: "/resultImg/ib4.jpg",
    after: "/resultImg/ia4.jpg",
    concern: "Protruding Teeth",
    duration: "8 months",
  },
];

const ResultsYouLove = () => {
  return (
    <section className="results-section">
      <h2 className="results-title">Results You'll Love</h2>

      <div className="results-scroll-wrapper">
        <div className="results-cards-container">
          {results.map((item) => (
            <div className="result-card" key={item.id}>
              {/* Images Row */}
              <div className="result-images">
                <img
                  src={item.before}
                  alt="Before"
                  className="result-img"
                />
                <img
                  src={item.after}
                  alt="After"
                  className="result-img"
                />
              </div>

              {/* Labels Row */}
              <div className="result-labels">
                <span>Before</span>
                <span>After</span>
              </div>

              {/* Divider */}
              <div className="result-divider" />

              {/* Info Rows */}
              <div className="result-info-row">
                <span className="info-label">Concern</span>
                <span className="info-value">{item.concern}</span>
              </div>

              <div className="result-divider" />

              <div className="result-info-row">
                <span className="info-label">Treatment Duration</span>
                <span className="info-value">{item.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsYouLove;