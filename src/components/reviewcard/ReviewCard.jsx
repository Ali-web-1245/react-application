import React from "react";
import "./ReviewCard.css";

export default function ReviewCard({ name, rating, review, date, verified }) {
  return (
    <article className="review-card">
      <div className="review-card-header">
        <div className="stars">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`star ${index < rating ? "filled" : "empty"}`}
            >
              ★
            </span>
          ))}
        </div>
        <button className="more-options-btn" aria-label="More options">
          •••
        </button>
      </div>

      <div className="author-info">
        <span className="author-name">{name}</span>
        {verified && (
          <span className="verified-badge" aria-label="Verified Customer">
            ✓
          </span>
        )}
      </div>

      <p className="review-text">"{review}"</p>

      <span className="review-date">{date}</span>
    </article>
  );
}