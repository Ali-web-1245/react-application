import React, { useState } from "react";
import "./CartItem.css";

export default function CartItem({
  id,
  image,
  title,
  size,
  color,
  price,
  quantity: initialQuantity = 1,
  onRemove
}) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <article className="cart-item">
      {/* Product Image */}
      <div className="cart-item-image-wrapper">
        <img src={image} alt={title} className="cart-item-image" />
      </div>

      {/* Item Details */}
      <div className="cart-item-details">
        <div className="cart-item-header">
          <h3 className="cart-item-title">{title}</h3>
          <button
            className="delete-btn"
            onClick={() => onRemove && onRemove(id)}
            aria-label={`Remove ${title} from cart`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FF3333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </button>
        </div>

        <p className="cart-item-meta">
          Size: <span className="meta-value">{size}</span>
        </p>
        <p className="cart-item-meta">
          Color: <span className="meta-value">{color}</span>
        </p>

        <div className="cart-item-footer">
          <span className="cart-item-price">{price}</span>
          <div className="quantity-controls">
            <button
              className="quantity-btn"
              onClick={handleDecrease}
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="quantity-count">{quantity}</span>
            <button
              className="quantity-btn"
              onClick={handleIncrease}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}