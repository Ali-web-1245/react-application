import { useState } from "react";
import "./Testimonials.css";

const customers = [
  {
    id: 1,
    name: "Sarah M.",
    verified: true,
    rating: 5,
    text: "The quality is amazing and the delivery was super fast. Everything arrived perfectly packed and exactly as shown.",
  },
  {
    id: 2,
    name: "Alex K.",
    verified: true,
    rating: 5,
    text: "Really happy with my purchase! The clothes are comfortable, stylish and the quality is better than I expected.",
  },
  {
    id: 3,
    name: "James L.",
    verified: true,
    rating: 5,
    text: "Excellent service and great products. The ordering process was easy and my package arrived right on time.",
  },
  {
    id: 4,
    name: "Michael R.",
    verified: true,
    rating: 5,
    text: "I absolutely love the products. The quality feels premium and the customer service was very helpful.",
  },
  {
    id: 5,
    name: "Emily T.",
    verified: true,
    rating: 5,
    text: "Everything was perfect from ordering to delivery. I will definitely shop here again.",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= customers.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? customers.length - 1 : prev - 1
    );
  };

  return (
    <section className="happy-customers">
      <div className="happy-header">
        <h2>OUR HAPPY CUSTOMERS</h2>

        <div className="slider-buttons">
          <button onClick={prevSlide} aria-label="Previous">
            ←
          </button>

          <button onClick={nextSlide} aria-label="Next">
            →
          </button>
        </div>
      </div>

      <div className="reviews-wrapper">
        <div
          className="reviews-slider"
          style={{
            transform: `translateX(-${currentIndex * 25}%)`,
          }}
        >
          {customers.map((customer) => (
            <div className="review-card" key={customer.id}>
              <div className="review-rating">
                {"★".repeat(customer.rating)}
              </div>

              <div className="customer-name">
                {customer.name}

                {customer.verified && (
                  <span className="verified">✓</span>
                )}
              </div>

              <p>{customer.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;