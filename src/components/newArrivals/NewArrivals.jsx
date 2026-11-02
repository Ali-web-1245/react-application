import "./NewArrivals.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api, { mapProduct } from "../../services/api";

function ProductCard({ product }) {
  return (
    <Link to={`/product-details/${product.id}`} style={{ textDecoration: "none" }}>
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <h3>{product.name}</h3>

      <div className="rating">
        <span>★★★★★</span>
        <small>{product.rating}</small>
      </div>

      <div className="price">
        <strong>{product.price}</strong>

        <del>{product.oldPrice}</del>

        <span className="discount">{product.discount}</span>
      </div>
    </div>
    </Link>
  );
}

function NewArrivals() {
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
    <section className="new-arrivals">
      <h2>NEW ARRIVALS</h2>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <button className="view-all">View All</button>
    </section>
  );
}

export default NewArrivals;