import React, { useState } from "react";
import "./ProductTabs.css";

const TABS = [
  { id: "details", label: "Product Details" },
  { id: "reviews", label: "Rating & Reviews" },
  { id: "faqs", label: "FAQs" }
];

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("reviews");

  return (
    <div className="product-tabs-wrapper">
      <div className="tabs-container">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}