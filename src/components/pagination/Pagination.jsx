import React, { useState } from "react";
import "./Pagination.css";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <nav className="pagination-container" aria-label="Pagination Navigation">
      <button
        className="pagination-btn prev-next"
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      >
        <span className="arrow">←</span> Previous
      </button>

      <div className="page-numbers">
        <button
          className={`page-num ${currentPage === 1 ? "active" : ""}`}
          onClick={() => setCurrentPage(1)}
        >
          1
        </button>
        <button
          className={`page-num ${currentPage === 2 ? "active" : ""}`}
          onClick={() => setCurrentPage(2)}
        >
          2
        </button>
        <button
          className={`page-num ${currentPage === 3 ? "active" : ""}`}
          onClick={() => setCurrentPage(3)}
        >
          3
        </button>
        <span className="dots">...</span>
        <button
          className={`page-num ${currentPage === 8 ? "active" : ""}`}
          onClick={() => setCurrentPage(8)}
        >
          8
        </button>
        <button
          className={`page-num ${currentPage === 9 ? "active" : ""}`}
          onClick={() => setCurrentPage(9)}
        >
          9
        </button>
        <button
          className={`page-num ${currentPage === 10 ? "active" : ""}`}
          onClick={() => setCurrentPage(10)}
        >
          10
        </button>
      </div>

      <button
        className="pagination-btn prev-next"
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 10))}
        disabled={currentPage === 10}
      >
        Next <span className="arrow">→</span>
      </button>
    </nav>
  );
}