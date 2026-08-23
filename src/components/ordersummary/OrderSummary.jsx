import React, { useState } from "react";
import "./OrderSummary.css";

import { Link } from "react-router-dom";

export default function OrderSummary({
    subtotal = "$565",
    discount = "-$113",
    discountPercentage = "20%",
    deliveryFee = "$15",
    total = "$467"
}) {
    const [promoCode, setPromoCode] = useState("");

    const handleApplyPromo = (e) => {
        e.preventDefault();
        if (promoCode.trim()) {
            alert(`Promo code "${promoCode}" applied!`);
        }
    };

    return (
        <aside className="order-summary-container">
            <h2 className="summary-title">Order Summary</h2>

            <div className="summary-details">
                <div className="summary-row">
                    <span className="summary-label">Subtotal</span>
                    <span className="summary-value">{subtotal}</span>
                </div>

                <div className="summary-row">
                    <span className="summary-label">
                        Discount ({discountPercentage})
                    </span>
                    <span className="summary-value discount">{discount}</span>
                </div>

                <div className="summary-row">
                    <span className="summary-label">Delivery Fee</span>
                    <span className="summary-value">{deliveryFee}</span>
                </div>

                <hr className="summary-divider" />

                <div className="summary-row total-row">
                    <span className="summary-label total-label">Total</span>
                    <span className="summary-value total-value">{total}</span>
                </div>
            </div>

            {/* Promo Code Form */}
            <form className="promo-form" onSubmit={handleApplyPromo}>
                <div className="promo-input-wrapper">
                    <svg
                        className="promo-icon"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="rgba(0, 0, 0, 0.4)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                        <line x1="7" y1="7" x2="7.01" y2="7"></line>
                    </svg>
                    <input
                        type="text"
                        placeholder="Add promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="promo-input"
                    />
                </div>
                <button type="submit" className="apply-btn">
                    Apply
                </button>
            </form>

            {/* Checkout Button */}
            <Link to="/checkout" className="checkout-btn">
                <button className="checkout-btn">
                    Go to Checkout <span className="arrow">→</span>
                </button>
            </Link>

        </aside>
    );
}