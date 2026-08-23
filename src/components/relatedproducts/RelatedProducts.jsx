import React from "react";
import ProductCard from "../productcard/ProductCard";
import "./RelatedProducts.css";
import img7 from "../../assets/images/img7.png";
import img8 from "../../assets/images/img8.png";
import img9 from "../../assets/images/img9.png";
import img10 from "../../assets/images/img10.png";

const RELATED_PRODUCTS_DATA = [
  {
    id: 1,
    title: "Polo with Contrast Trims",
    price: 212,
    oldPrice: 242,
    discount: "-20%",
    rating: 4.0,
    image: img7
  },
  {
    id: 2,
    title: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
    image: img8
  },
  {
    id: 3,
    title: "Polo with Tipping Details",
    price: 180,
    rating: 4.5,
    image: img9
  },
  {
    id: 4,
    title: "Black Striped T-shirt",
    price: 120,
    oldPrice: 150,
    discount: "-30%",
    rating: 5.0,
    image: img10 
  }
];

export default function RelatedProducts() {
  return (
    <section className="related-products-section">
      <h2 className="related-products-title">YOU MIGHT ALSO LIKE</h2>
      <div className="related-products-grid">
        {RELATED_PRODUCTS_DATA.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}