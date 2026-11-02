import "./TopSelling.css";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api, { mapProduct } from "../../services/api";

function ProductCard({ product }) {
  return (
    <Link
      to={`/product-details/${product.id}`}
      style={{ textDecoration: "none" }}
    >
    <div className="top-card">
      <div className="top-card-image">
        <img src={product.image} alt={product.name} />
      </div>

      <h3>{product.name}</h3>

      <div className="top-rating">
        <span>★★★★★</span>
        <span className="rating-number">{product.rating}</span>
      </div>

      <div className="top-price">
        <span className="current-price">{product.price}</span>

        <span className="old-price">{product.oldPrice}</span>

        <span className="discount">{product.discount}</span>
      </div>
    </div>
    </Link>
  );
}

function TopSelling() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    api
      .get("/products")
      .then((res) => {
        if (!ignore) {
          const fetched = (res.data.data || []).map(mapProduct);
          setProducts(
            fetched.map((p) => ({
              ...p,
              price: `$${p.price}`,
              oldPrice: p.oldPrice != null ? `$${p.oldPrice}` : null,
              discount: p.discount != null ? `-${p.discount}%` : null,
              rating: `${p.rating}/5`,
            }))
          );
        }
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
    <section className="top-selling">
      <h2>TOP SELLING</h2>

      <div className="top-products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <button className="view-all-btn">View All</button>
    </section>
  );
}

export default TopSelling;