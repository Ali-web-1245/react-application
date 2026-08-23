import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import CartItems from "../../components/CartItems/CartItems";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import "./Cart.css";

export default function Cart() {
  return (
    <>
      <Header />
      <Navbar />

      <main className="cart-page-container">
        {/* Breadcrumb Navigation */}
        <nav className="cart-breadcrumb" aria-label="Breadcrumb">
          <span>Home</span>
          <span className="separator">›</span>
          <span className="current">Cart</span>
        </nav>

        {/* Desktop 2-Column / Mobile Stacked Layout */}
        <div className="cart-content-layout">
          <section className="cart-left-section">
            <CartItems />
          </section>
          
          <aside className="cart-right-section">
            <OrderSummary />
          </aside>
        </div>
      </main>

      <Newsletter />
      <Footer />
    </>
  );
}