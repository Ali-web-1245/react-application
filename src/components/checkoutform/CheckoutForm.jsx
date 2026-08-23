import React, { useState } from "react";
import "./CheckoutForm.css";

export default function CheckoutForm() {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="checkout-form-container">
      {/* Contact Information */}
      <section className="form-section">
        <h2 className="section-heading">1. Contact Information</h2>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="John Doe" />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="john@example.com" />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="+1 234 567 890" />
          </div>
        </div>
      </section>

      {/* Shipping Address */}
      <section className="form-section">
        <h2 className="section-heading">2. Shipping Address</h2>
        <div className="form-group">
          <label>Street Address</label>
          <input type="text" placeholder="123 Main Street, Apt 4B" />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>City</label>
            <input type="text" placeholder="New York" />
          </div>
          <div className="form-group">
            <label>State / Province</label>
            <input type="text" placeholder="NY" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Postal Code</label>
            <input type="text" placeholder="10001" />
          </div>
          <div className="form-group">
            <label>Country</label>
            <input type="text" placeholder="United States" />
          </div>
        </div>
      </section>

      {/* Payment Method */}
      <section className="form-section">
        <h2 className="section-heading">3. Payment Method</h2>
        <div className="payment-options">
          <label
            className={`payment-option ${
              paymentMethod === "card" ? "active" : ""
            }`}
          >
            <input
              type="radio"
              name="payment"
              value="card"
              checked={paymentMethod === "card"}
              onChange={() => setPaymentMethod("card")}
            />
            <span>Credit / Debit Card</span>
          </label>

          <label
            className={`payment-option ${
              paymentMethod === "cod" ? "active" : ""
            }`}
          >
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
            />
            <span>Cash on Delivery</span>
          </label>
        </div>

        {paymentMethod === "card" && (
          <div className="card-fields">
            <div className="form-group">
              <label>Card Number</label>
              <input type="text" placeholder="1234 5678 9101 1121" />
            </div>
            <div className="form-group">
              <label>Cardholder Name</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Expiry Date</label>
                <input type="text" placeholder="MM/YY" />
              </div>
              <div className="form-group">
                <label>CVV</label>
                <input type="password" placeholder="123" />
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}