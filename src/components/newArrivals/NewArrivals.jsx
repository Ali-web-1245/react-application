import "./NewArrivals.css";
import Card1 from "../../assets/images/Card1.png";
import Card2 from "../../assets/images/Card2.png";
import Card3 from "../../assets/images/Card3.png";
import Card4 from "../../assets/images/Card4.png";

const products = [
  {
    id: 1,
    name: "T-shirt with Tape Details",
    category: "T-shirt",
    price: "$120",
    oldPrice: "$150",
    discount: "-20%",
    image: Card1,
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    category: "Jeans",
    price: "$240",
    oldPrice: "$260",
    discount: "-8%",
    image: Card2,
  },
  {
    id: 3,
    name: "Checkered Shirt",
    category: "Shirt",
    price: "$180",
    oldPrice: "$220",
    discount: "-18%",
    image: Card3,
  },
  {
    id: 4,
    name: "Sleeve Striped T-shirt",
    category: "T-shirt",
    price: "$130",
    oldPrice: "$160",
    discount: "-19%",
    image: Card4,
  },
];

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <h3>{product.name}</h3>

      <div className="rating">
        <span>★★★★★</span>
        <small>4.5/5</small>
      </div>

      <div className="price">
        <strong>{product.price}</strong>

        <del>{product.oldPrice}</del>

        <span className="discount">{product.discount}</span>
      </div>
    </div>
  );
}

function NewArrivals() {
  return (
    <section className="new-arrivals">
      <h2>NEW ARRIVALS</h2>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <button className="view-all">View All</button>
    </section>
  );
}

export default NewArrivals;