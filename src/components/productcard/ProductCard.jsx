import React from "react";
import "./ProductCard.css";

export default function ProductCard({ image, title, price, oldPrice, discount, rating }) {
  // Generate full and half stars based on rating number
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <article className="product-card">
      <div className="product-image-container">
        <img src={image} alt={title} className="product-image" />
      </div>

      <div className="product-info">
        <h3 className="product-title">{title}</h3>

        <div className="product-rating">
          <div className="stars">
            {[...Array(fullStars)].map((_, i) => (
              <span key={i} className="star-filled">★</span>
            ))}
            {hasHalfStar && <span className="star-half">★</span>}
          </div>
          <span className="rating-text">{rating}/<span>5</span></span>
        </div>

        <div className="product-price-container">
          <span className="product-price">${price}</span>
          {oldPrice && <span className="product-old-price">${oldPrice}</span>}
          {discount && <span className="product-discount">-{discount}%</span>}
        </div>
      </div>
    </article>
  );
}