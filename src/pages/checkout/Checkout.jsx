import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import CheckoutForm from "../../components/checkoutform/CheckoutForm";
import CheckoutSummary from "../../components/checkoutsummary/CheckoutSummary";
import Footer from "../../components/footer/Footer";
import "./Checkout.css";
import Newsletter from "../../components/newsletter/Newsletter";
import { useCart } from "../../context/CartContext";
import api from "../../services/api";

export default function Checkout() {
  const { items, clearCart } = useCart();
  const [placing, setPlacing] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    paymentMethod: "card",
    cardNumber: "",
    cardholderName: "",
    expiryDate: "",
    cvv: "",
  });

  const handleFieldChange = (fieldName, value) => {
    setCustomerInfo((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handlePlaceOrder = async () => {
    if (!items.length) {
      alert("Your cart is empty.");
      return;
    }
    setPlacing(true);
    try {
      await api.post("/orders", {
        items: items.map((item) => ({
          productId: item.id,
          title: item.title,
          price: parseFloat(String(item.price).replace("$", "")),
          quantity: item.quantity || 1,
        })),
        customerInfo,
      });
      clearCart();
      alert("Order placed successfully!");
    } catch {
      alert("Failed to place order. Please try again.");
    } finally {
      setPlacing(false);
    }
  };
  return (
    <>
      <Header />
      <Navbar />

      <main className="checkout-page-container">
        {/* Breadcrumb */}
        <nav className="checkout-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="separator">›</span>
          <Link to="/cart">Cart</Link>
          <span className="separator">›</span>
          <span className="current">Checkout</span>
        </nav>

        <h1 className="checkout-page-title">CHECKOUT</h1>

        {/* 2-Column Main Layout */}
        <div className="checkout-content-layout">
          <div className="checkout-left-column">
            <CheckoutForm customerInfo={customerInfo} onFieldChange={handleFieldChange} />
          </div>

          <div className="checkout-right-column">
            <CheckoutSummary onPlaceOrder={handlePlaceOrder} placing={placing} />
          </div>
          <Newsletter/>
        </div>
      </main>

      <Footer />
    </>
  );
}