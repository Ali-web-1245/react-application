import React from "react";
import "./CheckoutSummary.css";

import { useCart } from "../../context/CartContext";

export default function CheckoutSummary({ onPlaceOrder, placing = false }) {
  const { items } = useCart();

  const subtotal = items.reduce(
    (sum, item) => sum + parseFloat(String(item.price).replace("$", "")) * (item.quantity || 1),
    0
  );
  const discountAmount = Math.round(subtotal * 0.2);
  const deliveryFee = 15;
  const total = subtotal - discountAmount + deliveryFee;

  return (
    <aside className="checkout-summary-container">
      <h2 className="summary-title">Order Summary</h2>

      {/* Product List */}
      <div className="summary-items-list">
        {items.map((item) => (
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
          <span className="summary-value">${subtotal}</span>
        </div>
        <div className="summary-row">
          <span className="summary-label">Discount (-20%)</span>
          <span className="summary-value discount">-${discountAmount}</span>
        </div>
        <div className="summary-row">
          <span className="summary-label">Delivery Fee</span>
          <span className="summary-value">${deliveryFee}</span>
        </div>

        <hr className="summary-divider" />

        <div className="summary-row total-row">
          <span className="summary-label total-label">Total</span>
          <span className="summary-value total-value">${total}</span>
        </div>
      </div>

      {/* Place Order CTA Button */}
      <button className="place-order-btn" onClick={onPlaceOrder} disabled={placing}>
        Place Order <span className="arrow">→</span>
      </button>
    </aside>
  );
}