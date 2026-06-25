import React, { useState } from "react";
import "./BookingForm.css";

const BookingForm = () => {
  const [hasTeethIssue, setHasTeethIssue] = useState("yes");
  const [fullName, setFullName] = useState("Ajay Kumar");
  const [mobile, setMobile] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!consent) {
      alert("Please accept the consent checkbox to continue.");
      return;
    }
    if (!fullName.trim() || !mobile.trim()) {
      alert("Please fill in all fields.");
      return;
    }
    console.log({ hasTeethIssue, fullName, mobile, consent });
    alert("Free Scan booked successfully!");
  };

  return (
    <section className="booking">
      <div className="booking-container">
        {/* Question */}
        <h2 className="booking-question">
          Do you have Teeth Gaps or Crooked Teeth?
        </h2>

        {/* Yes / No Radio Toggle */}
        <div className="booking-options">
          <label className="radio-option">
            <input
              type="radio"
              name="teethIssue"
              value="yes"
              checked={hasTeethIssue === "yes"}
              onChange={() => setHasTeethIssue("yes")}
            />
            <span className="radio-custom"></span>
            <span className="radio-label">Yes</span>
          </label>

          <label className="radio-option">
            <input
              type="radio"
              name="teethIssue"
              value="no"
              checked={hasTeethIssue === "no"}
              onChange={() => setHasTeethIssue("no")}
            />
            <span className="radio-custom"></span>
            <span className="radio-label">No</span>
          </label>
        </div>

        {/* Conditional Content */}
        {hasTeethIssue === "yes" ? (
          <form className="booking-form" onSubmit={handleSubmit}>
            {/* Row containing inputs + button (desktop) */}
            <div className="form-row">
              {/* Full Name */}
              <div className="input-group">
                <label htmlFor="fullName" className="input-label">
                  Full Name*
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="input-field"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              {/* Mobile Number */}
              <div className="input-group">
                <div className="mobile-input-wrapper">
                  <span className="mobile-prefix">+91</span>
                  <input
                    type="tel"
                    id="mobile"
                    className="input-field mobile-field"
                    placeholder="Mobile number*"
                    value={mobile}
                    onChange={(e) =>
                      setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))
                    }
                    required
                  />
                </div>
              </div>

              {/* Submit Button (desktop position) */}
              <button type="submit" className="booking-btn desktop-btn">
                Book a Free Scan
              </button>
            </div>

            {/* Consent Checkbox */}
            <label className="consent-wrapper">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="consent-checkbox"
              />
              <span className="checkbox-custom"></span>
              <span className="consent-text">
                I hereby consent to receive calls / messages from Whistle and
                its partners and override DND settings.
              </span>
            </label>

            {/* Submit Button (mobile position - below consent) */}
            <button type="submit" className="booking-btn mobile-btn">
              Book a Free Scan
            </button>
          </form>
        ) : (
          <div className="thank-you-message">
            <p>Thank you for reaching out.</p>
            <p>
              Please contact us incase you have any dental alignment problems.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookingForm;