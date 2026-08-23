import React, { useState } from "react";
import CartItem from "../cartItem/CartItem";
import "./CartItems.css";
import sh2 from "../../assets/images/sh2.png";
import sh4 from "../../assets/images/sh4.png";
import sh5 from "../../assets/images/sh5.png";


const INITIAL_CART_ITEMS = [
  {
    id: 1,
    image: sh5,
    title: "Gradient Graphic T-shirt",
    size: "Large",
    color: "White",
    price: "$145",
    quantity: 1
  },
  {
    id: 2,
    image: sh4,
    title: "Checkered Shirt",
    size: "Medium",
    color: "Red",
    price: "$180",
    quantity: 1
  },
  {
    id: 3,
    image: sh2,
    title: "Skinny Fit Jeans",
    size: "Large",
    color: "Blue",
    price: "$240",
    quantity: 1
  }
];

export default function CartItems() {
  const [items, setItems] = useState(INITIAL_CART_ITEMS);

  const handleRemove = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <section className="cart-items-container">
      <h1 className="cart-title">YOUR CART</h1>

      <div className="cart-items-card">
        {items.map((item, index) => (
          <React.Fragment key={item.id}>
            <CartItem {...item} onRemove={handleRemove} />
            {index < items.length - 1 && <hr className="cart-item-divider" />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}