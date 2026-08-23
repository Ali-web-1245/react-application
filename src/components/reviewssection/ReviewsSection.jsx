import React from "react";
import ReviewCard from "../reviewcard/ReviewCard";
import "./ReviewsSection.css";

const REVIEWS_DATA = [
  {
    id: 1,
    name: "Samantha D.",
    rating: 5,
    verified: true,
    review:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    date: "Posted on August 14, 2023"
  },
  {
    id: 2,
    name: "Alex M.",
    rating: 5,
    verified: true,
    review:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    date: "Posted on August 15, 2023"
  },
  {
    id: 3,
    name: "Ethan R.",
    rating: 5,
    verified: true,
    review:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    date: "Posted on August 16, 2023"
  },
  {
    id: 4,
    name: "Olivia P.",
    rating: 5,
    verified: true,
    review:
      "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    date: "Posted on August 17, 2023"
  },
  {
    id: 5,
    name: "Liam K.",
    rating: 5,
    verified: true,
    review:
      "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    date: "Posted on August 18, 2023"
  },
  {
    id: 6,
    name: "Ava H.",
    rating: 5,
    verified: true,
    review:
      "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
    date: "Posted on August 19, 2023"
  }
];

export default function ReviewsSection() {
  return (
    <section className="reviews-section">
      {/* Header Controls */}
      <div className="reviews-header">
        <div className="reviews-title-container">
          <h3 className="reviews-title">All Reviews</h3>
          <span className="reviews-count">(451)</span>
        </div>

        <div className="reviews-actions">
          <button className="icon-btn filter-btn" aria-label="Filter reviews">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="21" x2="4" y2="14"></line>
              <line x1="4" y1="10" x2="4" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="3"></line>
              <line x1="20" y1="21" x2="20" y2="16"></line>
              <line x1="20" y1="12" x2="20" y2="3"></line>
              <line x1="1" y1="14" x2="7" y2="14"></line>
              <line x1="9" y1="8" x2="15" y2="8"></line>
              <line x1="17" y1="16" x2="23" y2="16"></line>
            </svg>
          </button>

          <div className="select-wrapper">
            <select className="sort-select" defaultValue="latest">
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
              <option value="highest">Highest Rating</option>
            </select>
          </div>

          <button className="write-review-btn">Write a Review</button>
        </div>
      </div>

      {/* Grid of Reviews */}
      <div className="reviews-grid">
        {REVIEWS_DATA.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="load-more-container">
        <button className="load-more-btn">Load More Reviews</button>
      </div>
    </section>
  );
}