import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import ShopLayout from "../../components/ShopLayout/ShopLayout";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

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