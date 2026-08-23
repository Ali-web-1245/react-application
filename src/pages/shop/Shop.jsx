import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import ShopLayout from "../../components/shopLayout/ShopLayout";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";

export default function Shop() {
  return (
    <>
      <Header />
      <Navbar />

      <main>
        <ShopLayout />
      </main>

      <Newsletter />
      <Footer />
    </>
  );
}