import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import ProductGallery from "../../components/productgallery/ProductGallery";
import ProductInfo from "../../components/productinfo/ProductInfo";
import ProductTabs from "../../components/producttabs/ProductTabs";
import ReviewsSection from "../../components/reviewssection/ReviewsSection";
import RelatedProducts from "../../components/relatedproducts/RelatedProducts";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import "./ProductDetail.css";
import api, { mapProduct } from "../../services/api";


export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    if (!id) {
      console.warn("[ProductDetail] No product id in URL params:", window.location.pathname);
    }
    setLoading(true);
    api
      .get(`/products/${id}`)
      .then((res) => {
        if (!ignore) setProduct(mapProduct(res.data.data));
      })
      .catch(() => {
        if (!ignore) setProduct(null);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });
    return () => {
      ignore = true;
    };
  }, [id]);

  if (loading) {
    return (
      <>
        <Header />
        <Navbar />
        <main className="product-details-container">
          <p>Loading...</p>
        </main>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Header />
        <Navbar />
        <main className="product-details-container">
          <p>Product not found.</p>
        </main>
        <Footer />
      </>
    );
  }

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
          <span className="current">{product.title}</span>
        </nav>

        {/* Top Product Section: Gallery + Product Info */}
        <div className="product-main-section">
          <div className="product-gallery-wrapper">
            <ProductGallery
              images={[product.image, ...product.gallery.filter(Boolean)]}
            />
          </div>
          <div className="product-info-wrapper">
            <ProductInfo product={product} />
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