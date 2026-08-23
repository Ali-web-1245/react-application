import React from "react";
import "./BrowseStyle.css";
import grid1 from "../../assets/images/grid1.png";
import grid2 from "../../assets/images/grid2.png";
import grid3 from "../../assets/images/grid3.png";
import grid4 from "../../assets/images/grid4.png";

const STYLES = [
  {
    id: "casual",
    title: "Casual",
    image: grid1,
    className: "card-small"
  },
  {
    id: "formal",
    title: "Formal",
    image: grid2,
    className: "card-large"
  },
  {
    id: "party",
    title: "Party",
    image: grid3,
    className: "card-large"
  },
  {
    id: "gym",
    title: "Gym",
    image: grid4,
    className: "card-small"
  }
];

export default function BrowseStyle() {
  return (
    <section className="browse-style-section">
      <div className="browse-style-container">
        <h2 className="browse-title">BROWSE BY DRESS STYLE</h2>
        
        <div className="style-grid">
          {STYLES.map((style) => (
            <div key={style.id} className={`style-card ${style.className}`}>
              <h3 className="style-card-title">{style.title}</h3>
              <img src={style.image} alt={style.title} className="style-card-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}