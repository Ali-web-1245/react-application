import React from "react";
import "./Hero.css";
import heroImage from "../../assets/images/hero-image.png";

import { Link } from "react-router-dom";

const StarIcon = ({ className }) => (
    <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path
            d="M32 0C33.5 16 16 33.5 0 32C16 30.5 33.5 48 32 64C30.5 48 48 30.5 64 32C48 33.5 30.5 16 32 0Z"
            fill="#000000"
        />
    </svg>
);

const stats = [
    { value: "200+", label: "International Brands" },
    { value: "2,000+", label: "High-Quality Products" },
    { value: "30,000+", label: "Happy Customers" },
];

export default function Hero() {
    return (
        <section className="hs-hero">
            <div className="hs-inner">
                <div className="hs-content">
                    <h1 className="hs-heading">
                        Find Clothes
                        <br />
                        That Matches
                        <br />
                        Your Style
                    </h1>

                    <p className="hs-subtitle">
                        Browse through our diverse range of meticulously crafted garments,
                        designed to bring out your individuality and cater to your sense
                        of style.
                    </p>

                    <Link to="/shop">
                        <button className="hs-cta" type="button">
                            Shop Now
                        </button>
                    </Link>

                    <div className="hs-stats">
                        {stats.map((stat) => (
                            <div className="hs-stat" key={stat.label}>
                                <span className="hs-stat-value">{stat.value}</span>
                                <span className="hs-stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hs-visual">
                    <StarIcon className="hs-star-large" />
                    <StarIcon className="hs-star-small" />
                    <div className="hs-image-wrap">
                        <img
                            className="hs-image"
                            src={heroImage}
                            alt="Fashion models wearing black and gray jackets"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}