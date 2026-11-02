import React from "react";
import CartItem from "../cartItem/CartItem";
import "./CartItems.css";
import { useCart } from "../../context/CartContext";

export default function CartItems() {
  const { items, removeFromCart, updateQuantity } = useCart();

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleQuantityChange = (id, quantity) => {
    updateQuantity(id, quantity);
  };

  return (
    <section className="cart-items-container">
      <h1 className="cart-title">YOUR CART</h1>

      <div className="cart-items-card">
        {items.map((item, index) => (
          <React.Fragment key={item.id}>
            <CartItem {...item} onRemove={handleRemove} onQuantityChange={handleQuantityChange} />
            {index < items.length - 1 && <hr className="cart-item-divider" />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}