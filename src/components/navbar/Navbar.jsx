import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Brand Logo */}
      <Link to="/" className="navbar-logo">
        SHOP.CO
      </Link>

      {/* Navigation Links */}
      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink to="/shop" className={({ isActive }) => (isActive ? "active" : "")}>
            Shop
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/shop" className={({ isActive }) => (isActive ? "active" : "")}>
            On Sale
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/product-details" className={({ isActive }) => (isActive ? "active" : "")}>
            New Arrivals
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/shop" className={({ isActive }) => (isActive ? "active" : "")}>
            Brands
          </NavLink>
        </li>
      </ul>

      {/* Search Bar */}
      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input type="text" placeholder="Search for products..." />
      </div>

      {/* Action Icons */}
      <div className="nav-icons">
        <Link to="/cart" className="icon-link" aria-label="Cart">
          🛒
        </Link>
        <span className="icon-link" aria-label="Profile">
          👤
        </span>
      </div>
    </nav>
  );
}