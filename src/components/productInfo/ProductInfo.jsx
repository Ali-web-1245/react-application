import React, { useState } from "react";
import "./ProductInfo.css";
import { Link } from "react-router-dom";
const COLORS = [
    { id: "olive", hex: "#4f4837" },
    { id: "teal", hex: "#314f4a" },
    { id: "navy", hex: "#31344f" }
];

const SIZES = ["Small", "Medium", "Large", "X-Large"];

export default function ProductInfo() {
    const [selectedColor, setSelectedColor] = useState("olive");
    const [selectedSize, setSelectedSize] = useState("Large");
    const [quantity, setQuantity] = useState(1);

    const handleDecrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    return (
        <section className="product-info">
            <h1 className="product-title">ONE LIFE GRAPHIC T-SHIRT</h1>

            {/* Rating */}
            <div className="rating-container">
                <div className="stars">
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star-half">★</span>
                </div>
                <span className="rating-score">
                    4.5/<span className="max-score">5</span>
                </span>
            </div>

            {/* Pricing */}
            <div className="price-container">
                <span className="current-price">$260</span>
                <span className="old-price">$300</span>
                <span className="discount-badge">-40%</span>
            </div>

            <p className="product-description">
                This graphic t-shirt which is perfect for any occasion. Crafted from a soft and
                breathable fabric, it offers superior comfort and style.
            </p>

            <hr className="divider" />

            {/* Select Colors */}
            <div className="selector-section">
                <span className="selector-label">Select Colors</span>
                <div className="color-options">
                    {COLORS.map((color) => (
                        <button
                            key={color.id}
                            className={`color-btn ${selectedColor === color.id ? "selected" : ""}`}
                            style={{ backgroundColor: color.hex }}
                            onClick={() => setSelectedColor(color.id)}
                            aria-label={`Select color ${color.id}`}
                        >
                            {selectedColor === color.id && <span className="checkmark">✓</span>}
                        </button>
                    ))}
                </div>
            </div>

            <hr className="divider" />

            {/* Choose Size */}
            <div className="selector-section">
                <span className="selector-label">Choose Size</span>
                <div className="size-options">
                    {SIZES.map((size) => (
                        <button
                            key={size}
                            className={`size-btn ${selectedSize === size ? "selected" : ""}`}
                            onClick={() => setSelectedSize(size)}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            <hr className="divider" />

            {/* Actions: Quantity & Add to Cart */}
            <div className="actions-container">
                <div className="quantity-selector">
                    <button onClick={handleDecrease} aria-label="Decrease quantity">
                        −
                    </button>
                    <span className="quantity-value">{quantity}</span>
                    <button onClick={handleIncrease} aria-label="Increase quantity">
                        +
                    </button>
                </div>
                <Link to="/cart" className="add-to-cart-link">
                    <button className="add-to-cart-btn">
                        Add to Cart
                    </button>
                </Link>

            </div>
        </section>
    );
}