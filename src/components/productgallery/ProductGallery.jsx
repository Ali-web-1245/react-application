import React, { useState } from "react";
import "./ProductGallery.css";

import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";

const IMAGES = [img1, img2, img3];

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(IMAGES[0]);

  return (
    <div className="product-gallery-container">
      {/* Thumbnails Column */}
      <div className="gallery-thumbnails">
        {IMAGES.map((img, index) => (
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