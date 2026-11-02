import React, { useState, useEffect } from "react";
import "./ProductGallery.css";

export default function ProductGallery({ images = [] }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [images]);

  return (
    <div className="product-gallery-container">
      {/* Thumbnails Column */}
      <div className="gallery-thumbnails">
        {images.map((img, index) => (
          <button
            key={index}
            className={`thumbnail-btn ${
              selectedImage === img ? "active" : ""
            }`}
            onClick={() => setSelectedImage(img)}
          >
            <img src={img} alt={`Product thumbnail ${index + 1}`} />
          </button>
        ))}
      </div>

      {/* Main Selected Image */}
      <div className="gallery-main-image">
        <img src={selectedImage} alt="Selected Product" />
      </div>
    </div>
  );
}