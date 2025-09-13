import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";
import logo from "../assets/images/HHH logo.png";
import product1 from "../assets/images/collection/product1.png";
import product2 from "../assets/images/collection/product2.png";
import bottle1 from "../assets/images/categories/bottle.1.png";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu toggle
  const [megaOpen, setMegaOpen] = useState(false); // product dropdown toggle

  const toggleCart = () => setCartOpen(!cartOpen);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleMega = () => setMegaOpen(!megaOpen);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white w-100 sticky" id="navbar">
      <Link className="navbar-brand order-2 order-lg-1" to="/">
        <img className="img-fluid" src={logo} alt="logo" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`navbar-collapse order-1 order-lg-2 collapse ${menuOpen ? "show" : ""}`}>
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>

          <li className="nav-item dropdown mega-dropdown">
            <button
              className="nav-link btn-dropdown"
              onClick={toggleMega}
              type="button"
            >
              Product
            </button>
            <div className={`dropdown-menu mega-menu ${megaOpen ? "show" : ""}`}>
              <div className="row">
                <div className="col-md-4 text-center">
                  <img src={product1} alt="Car Perfumes" className="img-fluid mb-2" />
                  <h6>Car Perfumes</h6>
                  <Link className="dropdown-item" to="#">Air Fresheners</Link>
                  <Link className="dropdown-item" to="#">Fragrance Diffusers</Link>
                </div>
                <div className="col-md-4 text-center">
                  <img src={bottle1} alt="Body Perfumes" className="img-fluid mb-2" />
                  <h6>Body Perfumes</h6>
                  <Link className="dropdown-item" to="#">Air Fresheners</Link>
                  <Link className="dropdown-item" to="#">Fragrance Diffusers</Link>
                </div>
                <div className="col-md-4 text-center">
                  <img src={product2} alt="Multipurpose" className="img-fluid mb-2" />
                  <h6>Multipurpose</h6>
                  <Link className="dropdown-item" to="#">Air Fresheners</Link>
                  <Link className="dropdown-item" to="#">Fragrance Diffusers</Link>
                </div>
              </div>
            </div>
          </li>

          <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contactus">Contact Us</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
        </ul>
      </div>

      <div className="order-3 navbar-right-elements d-flex align-items-center">
        <div className="search-cart d-flex align-items-center">
          <div className="cart mr-3">
            <button onClick={toggleCart} className="cart-btn">
              <i className="ti-bag"></i> <span className="d-xs-none">CART</span>
            </button>

            {cartOpen && (
              <div className="cart-wrapper open">
                <i onClick={toggleCart} className="ti-close cart-close"></i>
                <h4 className="mb-4">Your Cart</h4>
                <ul className="pl-0 mb-3">
                  <li className="d-flex border-bottom">
                    <img src={bottle1} width="63" height="85" alt="product-img" />
                    <div className="mx-3">
                      <h6>HHH Extrem</h6>
                      <span>1</span> X <span>$79.00</span>
                    </div>
                    <i className="ti-close"></i>
                  </li>
                  <li className="d-flex border-bottom">
                    <img src={bottle1} width="63" height="85" alt="product-img" />
                    <div className="mx-3">
                      <h6>White Oudh</h6>
                      <span>1 X</span> <span>$79.00</span>
                    </div>
                    <i className="ti-close"></i>
                  </li>
                </ul>
                <div className="mb-3">
                  <span>Cart Total</span>
                  <span className="float-right">$178.00</span>
                </div>
                <div className="text-center">
                  <Link to="/checkoutpage" className="btn btn-dark btn-mobile rounded-0">Check Out</Link>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="auth-buttons ml-3 d-flex" id="auth-buttons" style={{ marginRight: "80px" }}>
          <Link to="/login" className="btn btn-outline-dark btn-sm mr-2">Login</Link>
          <Link to="/signup" className="btn btn-dark btn-sm">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
