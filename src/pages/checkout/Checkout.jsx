import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import CheckoutForm from "../../components/checkoutform/CheckoutForm";
import CheckoutSummary from "../../components/checkoutsummary/CheckoutSummary";
import Footer from "../../components/Footer/Footer";
import "./Checkout.css";

export default function Checkout() {
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
            <CheckoutForm />
          </div>

          <div className="checkout-right-column">
            <CheckoutSummary />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}