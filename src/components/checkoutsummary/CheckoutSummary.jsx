import React from "react";
import "./CheckoutSummary.css";

import Card1 from "../../assets/images/Card1.png";
import Card2 from "../../assets/images/Card2.png";
import Card3 from "../../assets/images/Card3.png";

const CHECKOUT_ITEMS = [
  {
    id: 1,
    image: Card1,
    title: "Gradient Graphic T-shirt",
    size: "Large",
    color: "White",
    quantity: 1,
    price: "$145"
  },
  {
    id: 2,
    image: Card2,
    title: "Skinny Fit Jeans",
    size: "Large",
    color: "Blue",
    quantity: 1,
    price: "$240"
  },
  {
    id: 3,
    image: Card3,
    title: "Checkered Shirt",
    size: "Medium",
    color: "Red",
    quantity: 1,
    price: "$180"
  }
];

export default function CheckoutSummary() {
  return (
    <aside className="checkout-summary-container">
      <h2 className="summary-title">Order Summary</h2>

      {/* Product List */}
      <div className="summary-items-list">
        {CHECKOUT_ITEMS.map((item) => (
          <div key={item.id} className="summary-item">
            <div className="summary-item-image-wrapper">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="summary-item-details">
              <div className="summary-item-header">
                <h3 className="summary-item-title">{item.title}</h3>
                <span className="summary-item-price">{item.price}</span>
              </div>
              <p className="summary-item-meta">
                Size: <span className="meta-val">{item.size}</span>
              </p>
              <p className="summary-item-meta">
                Color: <span className="meta-val">{item.color}</span>
              </p>
              <p className="summary-item-meta">
                Qty: <span className="meta-val">{item.quantity}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <hr className="summary-divider" />

      {/* Calculations Breakdown */}
      <div className="summary-totals">
        <div className="summary-row">
          <span className="summary-label">Subtotal</span>
          <span className="summary-value">$565</span>
        </div>
        <div className="summary-row">
          <span className="summary-label">Discount (-20%)</span>
          <span className="summary-value discount">-$113</span>
        </div>
        <div className="summary-row">
          <span className="summary-label">Delivery Fee</span>
          <span className="summary-value">$15</span>
        </div>

        <hr className="summary-divider" />

        <div className="summary-row total-row">
          <span className="summary-label total-label">Total</span>
          <span className="summary-value total-value">$467</span>
        </div>
      </div>

      {/* Place Order CTA Button */}
      <button className="place-order-btn">
        Place Order <span className="arrow">→</span>
      </button>
    </aside>
  );
}