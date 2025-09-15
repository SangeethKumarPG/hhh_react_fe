// src/components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
import HeroBg from "../assets/images/backgrounds/hhh bg.png";
import HeroBottle from "../assets/images/hero-area/hhh.png";
import "../assets/css/Home.css"; // For text animations
import "animate.css";

const slides = [
  {
    id: 1,
    smallText: "Refresh Your Ride,",
    title: "Elevate Your Drive!",
    subtitle: "Transform every journey into a delightful experience with our premium car perfumes!",
    description: "Say goodbye to unwanted odors and hello to a captivating fragrance that lasts.",
    primaryBtn: { text: "Shop Now", link: "/products" },
    secondaryBtn: { text: "Learn More", link: "/about" },
  },
  {
    id: 2,
    smallText: "We Present",
    title: "High Quality Fragrances",
    subtitle: "Starts from $37.00",
    description: "Your search is over with HHH Car n Perfumes.",
    primaryBtn: { text: "Shop Now", link: "/products" },
    secondaryBtn: { text: "Contact Us", link: "/contact" },
  },
];

const Hero = () => {
  return (
    <section
      id="heroCarousel"
      className="carousel slide hero-area"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div key={slide.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <div className="container">
              <div className="row align-items-center">
                {/* LEFT TEXT */}
                <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
                  <h3
                    className="hero-text animate__animated animate__fadeInDown"
                    style={{ fontSize: "24px", animationDelay: "0s", animationDuration: "0.5s" }}
                  >
                    {slide.smallText}
                  </h3>
                  <h1
                    className="hero-text animate__animated animate__fadeInDown"
                    style={{ fontSize: "44px", animationDelay: "0.2s", animationDuration: "0.5s" }}
                  >
                    {slide.title}
                  </h1>
                  <h4
                    className="mb-4 hero-text animate__animated animate__fadeInDown"
                    style={{ fontSize: "16px", animationDelay: "0.4s", animationDuration: "0.5s" }}
                  >
                    {slide.subtitle}
                  </h4>
                  <p
                    className="mb-4 hero-text animate__animated animate__fadeInDown"
                    style={{ animationDelay: "0.6s", animationDuration: "0.5s" }}
                  >
                    {slide.description}
                  </p>
                  <Link
                    to={slide.primaryBtn.link}
                    className="btn btn-primary me-2 hero-text animate__animated animate__fadeInDown"
                    style={{ animationDelay: "0.8s", animationDuration: "0.5s" }}
                  >
                    {slide.primaryBtn.text}
                  </Link>
                </div>

                {/* RIGHT IMAGES */}
                <div className="col-lg-6 text-center">
                  <div className="bg-letter position-relative">
                    {/* Background */}
                    <img
                      src={HeroBg}
                      alt="HHH Logo Background"
                      className="img-fluid animate__animated animate__fadeInRight"
                      style={{
                        height: "500px",
                        animationDelay: "1.2s",
                        animationDuration: "0.5s",
                      }}
                    />
                    {/* Foreground Bottle */}
                    <img
                      src={HeroBottle}
                      alt="Perfume"
                      className="img-fluid position-absolute top-50 start-50 translate-middle animate__animated animate__fadeInRight"
                      style={{
                        maxHeight: "400px",
                        animationDelay: "1s",
                        animationDuration: "0.5s",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev hero-carousel-btn"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next hero-carousel-btn"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </section>
  );
};

export default Hero;
