// src/components/Footer.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaGoogle } from "react-icons/fa";

// Import payment images
import card1 from "../assets/images/payment-card/card-1.jpg";
import card2 from "../assets/images/payment-card/card-2.jpg";
import card3 from "../assets/images/payment-card/card-3.jpg";
import card4 from "../assets/images/payment-card/card-4.jpg";

export default function Footer() {
  return (
    <footer className="bg-light text-dark pt-5">
      {/* Top Footer Content */}
      <div className="container">
        <div className="row">
          {/* Contact */}
          <div className="col-md-2 mb-4">
            <h5>Contact</h5>
            <p>Chembakuth, Edavanna, Kerala - 676123</p>
            <p>+91 9846427382</p>
            <p>info@hhhperfumes.in</p>
            <div className="d-flex gap-2 mt-2">
              <a href="#" className="text-dark" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="text-dark" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="text-dark" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="text-dark" aria-label="Google">
                <FaGoogle />
              </a>
            </div>
          </div>

          {/* Category */}
          <div className="col-md-2 mb-4">
            <h5>Category</h5>
            <p>Car Perfumes</p>
            <p>Body Perfumes</p>
            <p>Car Hangings</p>
          </div>

          {/* Useful Link */}
          <div className="col-md-2 mb-4">
            <h5>Useful Link</h5>
            <p>Home</p>
            <a href="/about">
              <p>About Us</p>
            </a>
            <p>Support</p>
            <p>Our Shop</p>
            <p>Contact Us</p>
          </div>

          {/* Policies */}
          <div className="col-md-3 mb-4">
            <h5>Our Policies</h5>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Cookie Policy</p>
            <p>Terms of Sale</p>
            <p>Shipping & Returns</p>
          </div>

          {/* Newsletter */}
          <div className="col-md-3 mb-4">
            <h5>Our Newsletter</h5>
            <p>Subscribe to our newsletter to receive early discount offers</p>
            <div style={{ flexDirection: "column" }} className="d-flex mb-2">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Enter your email"
              />
              <button className="btn btn-danger">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom - Full Width */}
      <div
        className="py-3 mt-4 w-100"
        style={{ background: "linear-gradient(to right, #ff4d4d, #ff9999)" }}
      >
        <div className="d-flex justify-content-between align-items-center flex-wrap px-4">
          <span>HHH Perfumes © 2025 All rights reserved</span>
          <div className="d-flex gap-2 mt-2 mt-md-0">
            <img src={card1} alt="Amex" height="30" />
            <img src={card2} alt="Discover" height="30" />
            <img src={card3} alt="Maestro" height="30" />
            <img src={card4} alt="Visa" height="30" />
          </div>
        </div>
      </div>
    </footer>
  );
}
