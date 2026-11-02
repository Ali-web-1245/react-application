import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../productcard/ProductCard";
import "./RelatedProducts.css";
import api, { mapProduct } from "../../services/api";

export default function RelatedProducts() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    api
      .get("/products")
      .then((res) => {
        if (!ignore) {
          setProducts(
            (res.data.data || [])
              .filter((p) => p._id !== id)
              .slice(0, 4)
              .map(mapProduct)
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
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <section className="related-products-section">
      <h2 className="related-products-title">YOU MIGHT ALSO LIKE</h2>
      <div className="related-products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}