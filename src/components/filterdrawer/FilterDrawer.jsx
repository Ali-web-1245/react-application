import React from "react";
import FilterSidebar from "../filtersidebar/FilterSidebar";
import "./FilterDrawer.css";

export default function FilterDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="filter-drawer-overlay" onClick={onClose}>
      <div
        className="filter-drawer-content"
        onClick={(e) => e.stopPropagation()}
      >
        <FilterSidebar onClose={onClose} />
      </div>
    </div>
  );
}