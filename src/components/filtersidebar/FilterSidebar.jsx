import React, { useState } from "react";
import "./FilterSidebar.css";

const CATEGORIES = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];

const COLORS = [
  { id: "green", hex: "#00C12B" },
  { id: "red", hex: "#F50606" },
  { id: "yellow", hex: "#F5DD06" },
  { id: "orange", hex: "#F57906" },
  { id: "cyan", hex: "#06CAF5" },
  { id: "blue", hex: "#063AF5" },
  { id: "purple", hex: "#7D06F5" },
  { id: "pink", hex: "#F506A4" },
  { id: "white", hex: "#FFFFFF" },
  { id: "black", hex: "#000000" }
];

const SIZES = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
  "3X-Large",
  "4X-Large"
];

const DRESS_STYLES = ["Casual", "Formal", "Party", "Gym"];

export default function FilterSidebar({ onClose }) {
  const [price, setPrice] = useState(200);
  const [selectedColor, setSelectedColor] = useState("blue");
  const [selectedSize, setSelectedSize] = useState("Large");

  return (
    <aside className="filter-sidebar">
      {/* Header */}
      <div className="filter-header">
        <h3 className="filter-title">Filters</h3>
        {onClose ? (
          <button className="close-btn" onClick={onClose} aria-label="Close filters">
            ✕
          </button>
        ) : (
          <button className="filter-icon-btn" aria-label="Filter settings">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(0,0,0,0.4)"
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
        )}
      </div>

      <hr className="filter-divider" />

      {/* Categories */}
      <ul className="categories-list">
        {CATEGORIES.map((cat) => (
          <li key={cat} className="category-item">
            <span>{cat}</span>
            <span className="arrow">›</span>
          </li>
        ))}
      </ul>

      <hr className="filter-divider" />

      {/* Price Section */}
      <div className="filter-section">
        <div className="section-header">
          <span className="section-title">Price</span>
          <span className="accordion-icon">ˆ</span>
        </div>
        <div className="price-slider-container">
          <input
            type="range"
            min="50"
            max="300"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="price-slider"
          />
          <div className="price-values">
            <span>$50</span>
            <span>${price}</span>
          </div>
        </div>
      </div>

      <hr className="filter-divider" />

      {/* Colors Section */}
      <div className="filter-section">
        <div className="section-header">
          <span className="section-title">Colors</span>
          <span className="accordion-icon">ˆ</span>
        </div>
        <div className="color-grid">
          {COLORS.map((color) => (
            <button
              key={color.id}
              className={`color-circle ${selectedColor === color.id ? "active" : ""} ${
                color.id === "white" ? "white-border" : ""
              }`}
              style={{ backgroundColor: color.hex }}
              onClick={() => setSelectedColor(color.id)}
              aria-label={`Select color ${color.id}`}
            >
              {selectedColor === color.id && (
                <span
                  className="checkmark"
                  style={{ color: color.id === "white" ? "#000000" : "#ffffff" }}
                >
                  ✓
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <hr className="filter-divider" />

      {/* Size Section */}
      <div className="filter-section">
        <div className="section-header">
          <span className="section-title">Size</span>
          <span className="accordion-icon">ˆ</span>
        </div>
        <div className="size-grid">
          {SIZES.map((size) => (
            <button
              key={size}
              className={`size-chip ${selectedSize === size ? "active" : ""}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <hr className="filter-divider" />

      {/* Dress Style Section */}
      <div className="filter-section">
        <div className="section-header">
          <span className="section-title">Dress Style</span>
          <span className="accordion-icon">ˆ</span>
        </div>
        <ul className="categories-list">
          {DRESS_STYLES.map((style) => (
            <li key={style} className="category-item">
              <span>{style}</span>
              <span className="arrow">›</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Apply Button */}
      <button className="apply-filter-btn">Apply Filter</button>
    </aside>
  );
}