import React from "react";
import "./Newsletter.css";

export default function Newsletter() {
  return (
    <section className="newsletter-wrapper">
      <div className="newsletter-container">
        <h2 className="newsletter-title">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-field">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#808080"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <input
              type="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <button type="submit" className="subscribe-btn">
            Subscribe to Newsletter
          </button>
        </form>
      </div>
    </section>
  );
}