// src/pages/AboutPage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/css/AboutPage.css";

import product1 from "../assets/images/collection/product1.png";
import product2 from "../assets/images/collection/product2.png";
import amazonLogo from "../assets/images/amazon-logo.png";
import flipkartLogo from "../assets/images/flipkart-logo.png";
import isoLogo from "../assets/images/iso.png";
import gmpLogo from "../assets/images/gmp.png";
import ifraSvg from "../assets/images/ifra.svg";
import ifraPng from "../assets/images/ifra.png";
import msdsLogo from "../assets/images/msds.avif";
import ursLogo from "../assets/images/urs.svg";

const AboutPage = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="herohead">
        <h1>About Us</h1>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="section-title mb-4">Why Choose Us</h2>
              <p>
                Welcome to HHH Perfumes, where passion meets the art of
                perfumery. Established in 1999, we have been crafting
                exceptional fragrances that inspire, uplift, and captivate.
              </p>
              <p>
                At HHH Perfume, we believe that fragrance is more than just a
                scent—it's an expression of personality, style, and memories.
              </p>
              <div className="check-list mt-3">
                <div className="icon-text">
                  <i className="bi bi-check-circle-fill"></i> Engineered for
                  Long-Lasting Car Freshness
                </div>
                <div className="icon-text">
                  <i className="bi bi-check-circle-fill"></i> Crafted Using
                  Premium Automotive-Grade Ingredients
                </div>
                <div className="icon-text">
                  <i className="bi bi-check-circle-fill"></i> Designed to
                  Eliminate Odors, Not Just Mask Them
                </div>
                <div className="icon-text">
                  <i className="bi bi-check-circle-fill"></i> Collaborations
                  with Master Perfumers for Signature Scents
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex flex-wrap gap-3 justify-content-center">
              <img
                src={product1}
                className="img-fluid rounded"
                style={{ maxWidth: "48%" }}
                alt="Product 1"
              />
              <img
                src={product2}
                className="img-fluid rounded"
                style={{ maxWidth: "48%" }}
                alt="Product 2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Aromas */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src={product2}
                className="img-fluid rounded"
                alt="Nature India"
              />
            </div>
            <div className="col-md-6">
              <h6 className="text-orange fw-bold">Product Of India</h6>
              <h2 className="section-title">
                Timeless Fragrances: Crafted with Passion
              </h2>
              <blockquote className="fst-italic text-muted border-start ps-3 my-3">
                “Discover the Essence of HHHPerfumes, Where Passion Meets
                Craftsmanship. Embark on a Scented Journey of Elegance and
                Expression.”
              </blockquote>
              <p>
                At HHHPerfumes, our story goes beyond just fragrance. Since
                1999, we’ve blended the finest ingredients into captivating
                aromas that celebrate individuality, emotion, and timeless
                beauty—crafted to enhance every mood and moment.
              </p>

              <div
                style={{ flexWrap: "wrap" }}
                className="d-flex  gap-2 align-items-center mt-3"
              >
                {/* Amazon Reviews */}
                <div className="review-box d-flex align-items-center gap-3">
                  <img src={amazonLogo} alt="Amazon" className="review-logo" />
                  <div>
                    <div className="d-flex align-items-center gap-1 text-warning">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star"></i>
                      <span className="text-muted ms-2 fw-semibold">
                        (3.9/5)
                      </span>
                    </div>
                    <div className="text-muted mt-1">
                      <strong>1000+</strong> • <strong>Amazon Reviews</strong>
                    </div>
                  </div>
                </div>

                {/* Flipkart Reviews */}
                <div className="review-box d-flex align-items-center gap-3">
                  <img
                    src={flipkartLogo}
                    alt="Flipkart"
                    className="review-logo"
                  />
                  <div>
                    <div className="d-flex align-items-center gap-1 text-warning">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-half"></i>
                      <span className="text-muted ms-2 fw-semibold">
                        (4.1/5)
                      </span>
                    </div>
                    <div className="text-muted mt-1">
                      <strong>1000+</strong> • <strong>Flipkart Reviews</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-5">
        <div className="container">
          <h2 className="section-title text-center mb-4">
            Our Standards: Certified & Recognized
          </h2>
          <hr
            style={{
              border: "none",
              height: "1px",
              backgroundColor: "#ff4135",
              width: "100%",
              margin: "5px auto",
            }}
          />

          <div className="certification-logos d-flex flex-wrap justify-content-center align-items-center">
            <img src={isoLogo} alt="ISO Certified" />
            <img src={gmpLogo} alt="OEM Certified" />
            <img src={ifraSvg} alt="NABCB" />
            <img src={ifraPng} alt="DUNS Registered" />
            <img src={msdsLogo} alt="UKAS" />
            <img src={ursLogo} alt="URS" />
          </div>

          <hr
            style={{
              border: "none",
              height: "1px",
              backgroundColor: "#ff4135",
              width: "100%",
              margin: "5px auto",
            }}
          />

          <div className="row mt-4">
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-check-circle-fill text-warning"></i> Rich
                  vanilla essence delivers long-lasting freshness.
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-warning"></i>{" "}
                  Balanced formulation prevents overpowering intensity.
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-check-circle-fill text-warning"></i> Every
                  spray maintains consistent aroma quality.
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-warning"></i>{" "}
                  Natural extracts reduce irritation and enhance appeal.
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-warning"></i>{" "}
                  Crafted for smooth diffusion and soothing ambiance.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <hr
        style={{
          border: "none",
          height: "1.5px",
          backgroundColor: "#cfbfbf",
          width: "90%",
          margin: "5px auto",
        }}
      />

      <Footer />
    </>
  );
};

export default AboutPage;
