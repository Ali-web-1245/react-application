import React from "react";
import ProductInfo from "../productinfo/ProductInfo";
import ProductTabs from "../producttabs/ProductTabs";
import ReviewsSection from "../reviewssection/ReviewsSection";
import RelatedProducts from "../relatedproducts/RelatedProducts";
import Newsletter from "../newsletter/Newsletter";
import "./ProductDetails.css";

export default function ProductDetails() {
  return (
    <div className="product-details-page">
      <Breadcrumb />

      <main className="product-details-main">
        {/* Top Section: Gallery + Product Info */}
        <section className="product-top-section">
          <ProductGallery />
          <ProductInfo />
        </section>

        {/* Middle Section: Tabs & Reviews */}
        <ProductTabs />
        <ReviewsSection />

        {/* Bottom Section: Related Products */}
        <RelatedProducts />
      </main>

      {/* Newsletter overlay before existing Footer */}
      <Newsletter />
    </div>
  );
}