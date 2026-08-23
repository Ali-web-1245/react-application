import "./TopSelling.css";

import top1 from "../../assets/images/top1.png";
import top2 from "../../assets/images/top2.png";
import top3 from "../../assets/images/top3.png";
import top4 from "../../assets/images/top4.png";


const products = [
  {
    id: 1,
    name: "Vertical Striped Shirt",
    rating: "4.5/5",
    price: "$212",
    oldPrice: "$232",
    discount: "-9%",
    image: top1,
  },
  {
    id: 2,
    name: "Courage Graphic T-shirt",
    rating: "4.0/5",
    price: "$145",
    oldPrice: "$180",
    discount: "-19%",
    image: top2,
  },
  {
    id: 3,
    name: "Loose Fit Bermuda Shorts",
    rating: "4.5/5",
    price: "$80",
    oldPrice: "$100",
    discount: "-20%",
    image: top3,
  },
  {
    id: 4,
    name: "Faded Skinny Jeans",
    rating: "4.5/5",
    price: "$210",
    oldPrice: "$240",
    discount: "-13%",
    image: top4,
  },
];

function ProductCard({ product }) {
  return (
    <div className="top-card">
      <div className="top-card-image">
        <img src={product.image} alt={product.name} />
      </div>

      <h3>{product.name}</h3>

      <div className="top-rating">
        <span>★★★★★</span>
        <span className="rating-number">{product.rating}</span>
      </div>

      <div className="top-price">
        <span className="current-price">{product.price}</span>

        <span className="old-price">{product.oldPrice}</span>

        <span className="discount">{product.discount}</span>
      </div>
    </div>
  );
}

function TopSelling() {
  return (
    <section className="top-selling">
      <h2>TOP SELLING</h2>

      <div className="top-products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <button className="view-all-btn">View All</button>
    </section>
  );
}

export default TopSelling;