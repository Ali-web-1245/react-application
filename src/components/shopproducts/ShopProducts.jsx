import React, { useEffect, useState } from "react";
import ProductCard from "../productcard/ProductCard";
import Pagination from "../pagination/Pagination";
import "./ShopProducts.css";
import api, { mapProduct } from "../../services/api";

export default function ShopProducts({ onOpenMobileFilter }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    api
      .get("/products")
      .then((res) => {
        if (!ignore) setProducts((res.data.data || []).map(mapProduct));
      })
      .catch(() => {
        if (!ignore) setProducts([]);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });
    return () => {
      ignore = true;
    };
  }, []);

  if (loading) return <p>Loading...</p>;

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
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination />
    </section>
  );
}