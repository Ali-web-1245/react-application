import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="top-banner">
      <div className="top-banner-content">
        <p>
          Sign up and get 20% off to your first order.{" "}
          <Link to="/shop">Sign Up Now</Link>
        </p>
      </div>
      <button
        className="close-banner-btn"
        aria-label="Close banner"
        onClick={() => setIsVisible(false)}
      >
        ✕
      </button>
    </div>
  );
}