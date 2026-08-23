import React from "react";
import "./BrandBar.css";

export default function BrandBar() {
  return (
    <section className="brands-bar">
      <div className="brands-container">
        <span className="brand-logo versace">VERSACE</span>
        <span className="brand-logo zara">ZARA</span>
        <span className="brand-logo gucci">GUCCI</span>
        <span className="brand-logo prada">PRADA</span>
        <span className="brand-logo calvin">Calvin Klein</span>
      </div>
    </section>
  );
}