import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import ProductGallery from "../../components/productgallery/ProductGallery";
import ProductInfo from "../../components/productinfo/ProductInfo";
import ProductTabs from "../../components/producttabs/ProductTabs";
import ReviewsSection from "../../components/reviewssection/ReviewsSection";
import RelatedProducts from "../../components/relatedproducts/RelatedProducts";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import "./ProductDetails.css";


export default function ProductDetails() {
  return (
    <>
      <Header />
      <Navbar />

      <main className="product-details-container">
        {/* Breadcrumb Navigation */}
        <nav className="product-breadcrumb" aria-label="Breadcrumb">
          <span>Home</span>
          <span className="separator">›</span>
          <span>Shop</span>
          <span className="separator">›</span>
          <span>Men</span>
          <span className="separator">›</span>
          <span className="current">T-shirts</span>
        </nav>

        {/* Top Product Section: Gallery + Product Info */}
        <div className="product-main-section">
          <div className="product-gallery-wrapper">
            <ProductGallery />
          </div>
          <div className="product-info-wrapper">
            <ProductInfo />
          </div>
        </div>

        {/* Tabs & Reviews Section */}
        <ProductTabs />
        <ReviewsSection />

        {/* Related Products Carousel/Grid */}
        <RelatedProducts />
      </main>

      <Newsletter />
      <Footer />
    </>
  );
}