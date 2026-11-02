import React from "react";
import "./CheckoutForm.css";

export default function CheckoutForm({ customerInfo, onFieldChange }) {
  const handleChange = (fieldName) => (e) => {
    if (onFieldChange) {
      onFieldChange(fieldName, e.target.value);
    }
  };

  const paymentMethod = customerInfo.paymentMethod || "card";

  return (
    <div className="checkout-form-container">
      {/* Contact Information */}
      <section className="form-section">
        <h2 className="section-heading">1. Contact Information</h2>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="John Doe" name="fullName" value={customerInfo.fullName} onChange={handleChange("fullName")} />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="john@example.com" name="email" value={customerInfo.email} onChange={handleChange("email")} />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="+1 234 567 890" name="phone" value={customerInfo.phone} onChange={handleChange("phone")} />
          </div>
        </div>
      </section>

      {/* Shipping Address */}
      <section className="form-section">
        <h2 className="section-heading">2. Shipping Address</h2>
        <div className="form-group">
          <label>Street Address</label>
          <input type="text" placeholder="123 Main Street, Apt 4B" name="address" value={customerInfo.address} onChange={handleChange("address")} />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>City</label>
            <input type="text" placeholder="New York" name="city" value={customerInfo.city} onChange={handleChange("city")} />
          </div>
          <div className="form-group">
            <label>State / Province</label>
            <input type="text" placeholder="NY" name="state" value={customerInfo.state} onChange={handleChange("state")} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Postal Code</label>
            <input type="text" placeholder="10001" name="postalCode" value={customerInfo.postalCode} onChange={handleChange("postalCode")} />
          </div>
          <div className="form-group">
            <label>Country</label>
            <input type="text" placeholder="United States" name="country" value={customerInfo.country} onChange={handleChange("country")} />
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
              onChange={() => onFieldChange("paymentMethod", "card")}
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
              onChange={() => onFieldChange("paymentMethod", "cod")}
            />
            <span>Cash on Delivery</span>
          </label>
        </div>

        {paymentMethod === "card" && (
          <div className="card-fields">
            <div className="form-group">
              <label>Card Number</label>
              <input type="text" placeholder="1234 5678 9101 1121" name="cardNumber" value={customerInfo.cardNumber} onChange={handleChange("cardNumber")} />
            </div>
            <div className="form-group">
              <label>Cardholder Name</label>
              <input type="text" placeholder="John Doe" name="cardholderName" value={customerInfo.cardholderName} onChange={handleChange("cardholderName")} />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Expiry Date</label>
                <input type="text" placeholder="MM/YY" name="expiryDate" value={customerInfo.expiryDate} onChange={handleChange("expiryDate")} />
              </div>
              <div className="form-group">
                <label>CVV</label>
                <input type="password" placeholder="123" name="cvv" value={customerInfo.cvv} onChange={handleChange("cvv")} />
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}