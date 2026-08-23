import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import CartItems from "../../components/cartItems/CartItems";
import OrderSummary from "../../components/ordersummary/OrderSummary";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
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