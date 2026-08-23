import React, { useState } from "react";
import FilterSidebar from "../FilterSidebar/FilterSidebar";
import ShopProducts from "../ShopProducts/ShopProducts";
import FilterDrawer from "../FilterDrawer/FilterDrawer";
import "./ShopLayout.css";

export default function ShopLayout() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="shop-layout-wrapper">
      {/* Breadcrumb / Navigation indicator */}
      <nav className="shop-breadcrumb" aria-label="Breadcrumb">
        <span>Home</span>
        <span className="separator">›</span>
        <span className="current">Casual</span>
      </nav>

      {/* Main Container */}
      <div className="shop-layout-container">
        {/* Desktop Filter Sidebar */}
        <div className="desktop-sidebar-container">
          <FilterSidebar />
        </div>

        {/* Right Section: Products & Header */}
        <ShopProducts onOpenMobileFilter={() => setIsFilterOpen(true)} />
      </div>

      {/* Mobile Filter Drawer Modal */}
      <FilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    </div>
  );
}