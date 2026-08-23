import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import Pagination from "../Pagination/Pagination";
import "./ShopProducts.css";
import sh1 from "../../assets/images/sh1.png"
import sh2 from "../../assets/images/sh2.png"
import sh3 from "../../assets/images/sh3.png"
import sh4 from "../../assets/images/sh4.png"
import sh5 from "../../assets/images/sh5.png"
import sh6 from "../../assets/images/sh6.png"
import sh7 from "../../assets/images/sh7.png"
import sh8 from "../../assets/images/sh8.png"
import sh9 from "../../assets/images/sh9.png"
const SHOP_PRODUCTS_DATA = [
  {
    id: 1,
    title: "Gradient Graphic T-shirt",
    price: 145,
    oldPrice: 242,
    discount: "-40%",
    rating: 3.5,
    image: sh1
  },
  {
    id: 2,
    title: "Polo with Tipping Details",
    price: 180,
    oldPrice: 242,
    discount: "-20%",
    rating: 4.5,
    image: sh2
  },
  {
    id: 3,
    title: "Black Striped T-shirt",
    price: 120,
    oldPrice: 150,
    discount: "-20%",
    rating: 5.0,
    image: sh3
  },
  {
    id: 4,
    title: "Skinny Fit Jeans",
    price: 240,
    oldPrice: 260,
    discount: "-20%",
    rating: 3.5,
    image: sh4
  },
  {
    id: 5,
    title: "Checkered Shirt",
    price: 180,
    rating: 4.5,
    image: sh5
  },
  {
    id: 6,
    title: "Sleeve Striped T-shirt",
    price: 130,
    oldPrice: 160,
    discount: "-20%",
    rating: 4.5,
    image: sh6
  },
  {
    id: 7,
    title: "Vertical Striped Shirt",
    price: 212,
    oldPrice: 232,
    discount: "-20%",
    rating: 5.0,
    image: sh7
  },
  {
    id: 8,
    title: "Courage Graphic T-shirt",
    price: 145,
    rating: 4.0,
    image: sh8
  },
  {
    id: 9,
    title: "Loose Fit Bermuda Shorts",
    price: 80,
    rating: 3.0,
    image: sh9
  }
];

export default function ShopProducts({ onOpenMobileFilter }) {
  return (
    <section className="shop-products-container">
      {/* Header Bar */}
      <div className="shop-products-header">
        <h1 className="shop-category-title">Casual</h1>
        <div className="shop-header-meta">
          <span className="showing-text">Showing 1-10 of 100 Products</span>
          <div className="sort-wrapper">
            <span className="sort-label">Sort by:</span>
            <select className="sort-dropdown" defaultValue="most-popular">
              <option value="most-popular">Most Popular</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>
          {/* Mobile Filter Toggle Button */}
          <button
            className="mobile-filter-trigger"
            onClick={onOpenMobileFilter}
            aria-label="Open filter menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="21" x2="4" y2="14"></line>
              <line x1="4" y1="10" x2="4" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="3"></line>
              <line x1="20" y1="21" x2="20" y2="16"></line>
              <line x1="20" y1="12" x2="20" y2="3"></line>
              <line x1="1" y1="14" x2="7" y2="14"></line>
              <line x1="9" y1="8" x2="15" y2="8"></line>
              <line x1="17" y1="16" x2="23" y2="16"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="shop-grid">
        {SHOP_PRODUCTS_DATA.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination />
    </section>
  );
}