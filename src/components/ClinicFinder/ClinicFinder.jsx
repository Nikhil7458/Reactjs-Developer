

import { useState } from "react";
import "./ClinicFinder.css";

const cities = ["Delhi", "Mumbai", "Bengaluru", "Hyderabad", "Pune"];

const clinics = [
  "Clove Dental - Connaught Place",
  "Clove Dental - Saket",
  "Clove Dental - Noida",
  "Clove Dental - Gurgaon",
];

export default function ClinicFinder() {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    mobile: "",
    captcha: "",
    city: "",
    clinic: "",
  });

  const captcha = "234";

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.mobile ||
      !formData.captcha ||
      !formData.city ||
      !formData.clinic
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (formData.captcha !== captcha) {
      alert("Invalid captcha.");
      return;
    }

    console.log(formData);

    alert("Form Submitted Successfully!");

    setFormData({
      mobile: "",
      captcha: "",
      city: "",
      clinic: "",
    });
  };

  return (
    <section className={`clinic-banner ${isOpen ? "expanded" : ""}`}>
      {/* ---------------- Top ---------------- */}

      <div className="banner-top">
        <div className="banner-left">
          <h2>
            Book a Free 3D Teeth Scan and Orthodontist Consult in a Clove Dental
            Clinic near you.
          </h2>
        </div>

        <div className="banner-right">
          <img
            src="/ClinicFinder/Cliniclogo.png"
            alt="Clove Dental"
            className="logo"
          />

          <button type="button" className="toggle-btn" onClick={handleToggle}>
            Find Clinic
            <span className={`arrow ${isOpen ? "rotate" : ""}`}>
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L8 8L15 1"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* ---------------- Form ---------------- */}

      <div className={`form-wrapper ${isOpen ? "show" : ""}`}>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            {/* Mobile */}
            <div className="phone-input">
              <span className="country-code">+91</span>
              <input
                type="tel"
                placeholder="Mobile number*"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                maxLength={10}
              />
            </div>

            {/* Captcha Input */}
            <input
              type="text"
              placeholder="Enter Captcha"
              name="captcha"
              value={formData.captcha}
              onChange={handleChange}
              className="captcha-input"
            />

            {/* Captcha Value */}
            <div className="captcha-box">{captcha}</div>

            {/* City */}
            <select name="city" value={formData.city} onChange={handleChange}>
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city}>{city}</option>
              ))}
            </select>

            {/* Clinic */}
            <select
              name="clinic"
              value={formData.clinic}
              onChange={handleChange}
            >
              <option value="">Select Clinic</option>
              {clinics.map((clinic) => (
                <option key={clinic}>{clinic}</option>
              ))}
            </select>

            {/* Submit */}
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}