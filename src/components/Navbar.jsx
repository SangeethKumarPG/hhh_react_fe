import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Navbar.css";
import logo from "../assets/images/HHH logo.png";
import product1 from "../assets/images/collection/product1.png";
import product2 from "../assets/images/collection/product2.png";
import bottle1 from "../assets/images/categories/bottle.1.png";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import Cart from "./Cart";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleCart = () => setCartOpen(!cartOpen);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleMega = () => setMegaOpen(!megaOpen);

  useEffect(() => {
    const token = sessionStorage.getItem("access_token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <nav
      style={{
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingRight: "20px",
      }}
      className="navbar navbar-expand-lg navbar-light bg-white w-100 sticky"
      id="navbar"
    >
      {/* Brand Logo */}

      {/* Mobile Toggle */}
      <button
        style={{ margin: "auto", marginLeft: "10px" }}
        className="navbar-toggler"
        type="button"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link
        style={
          {
            // margin: "auto",
            // backgroundColor: "yellow",
            // position: "absolute",
            // left: "50%",
            // transform: "translate(-50%,10%)",
          }
        }
        className="kkk"
        to="/"
      >
        <img
          style={{}}
          // className="img-fluid"
          src={logo}
          alt="logo"
        />
      </Link>
      {/* Navbar Collapse */}
      <div
        className={`navbar-collapse order-1 order-lg-2 collapse ${
          menuOpen ? "show" : ""
        }`}
      >
        <ul
          style={
            {
              // backgroundColor: "green",
              // margin: "auto",
              // marginLeft: "16%",
              // display: "flex",
            }
          }
          className="fff"
        >
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </li>

          {/* Mega Menu */}
          <li className="nav-item dropdown mega-dropdown">
            <button
              className="nav-link btn-dropdown"
              onClick={toggleMega}
              type="button"
            >
              Categories
            </button>
            <div
              className={`dropdown-menu mega-menu ${megaOpen ? "show" : ""}`}
            >
              <div className="row">
                <div
                  style={{ marginTop: "20px" }}
                  className="col-md-4 text-center"
                >
                  <img
                    src={product1}
                    alt="Car Perfumes"
                    className="img-fluid mb-2"
                  />
                  <h6>Car Perfumes</h6>
                  <Link className="dropdown-item" to="#">
                    Air Fresheners
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Fragrance Diffusers
                  </Link>
                </div>
                <div
                  style={{ marginTop: "20px" }}
                  className="col-md-4 text-center"
                >
                  <img
                    src={bottle1}
                    alt="Body Perfumes"
                    className="img-fluid mb-2"
                  />
                  <h6>Body Perfumes</h6>
                  <Link className="dropdown-item" to="#">
                    Air Fresheners
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Fragrance Diffusers
                  </Link>
                </div>
                <div
                  style={{ marginTop: "20px" }}
                  className="col-md-4 text-center"
                >
                  <img
                    src={product2}
                    alt="Multipurpose"
                    className="img-fluid mb-2"
                  />
                  <h6>Multipurpose</h6>
                  <Link className="dropdown-item" to="#">
                    Air Fresheners
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Fragrance Diffusers
                  </Link>
                </div>
              </div>
            </div>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/contactus">
              Contact Us
            </Link>
          </li>

          <li className="nav-item d-none">
            <Link className="nav-link" to="/blog">
              Blog
            </Link>
          </li>

          {/* Cart Button */}
          <li className="nav-item">
            <button
              onClick={toggleCart}
              className="btn btn-light text-dark btn-sm my-md-0 nav-link px-3"
              style={{ borderRadius: "20px" }}
            >
              <i className="ti-bag me-1"></i> Cart
            </button>
          </li>
        </ul>

        {/* Mobile Auth Buttons */}
        <div className="d-lg-none mt-3 text-end">
          {!isAuthenticated ? (
            <>
              {/* <Link
                to="/login"
                className="btn btn-outline-dark btn-sm me-2 my-0"
              >
                Login
              </Link> */}
              <Link
                style={{ width: "120px", padding: "10px" }}
                to="/signup"
                className="btn  btn-dark btn-sm my-0"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <button
              style={{
                width: "120px",
                margin: "auto",
                marginLeft: "10%",
                // margin: "auto",
                // backgroundColor: "red",
              }}
              onClick={handleLogout}
              className="btn btn-outline-dark btn-sm "
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {/* Desktop Auth Buttons */}

      <div className="order-3 navbar-right-elements d-none d-lg-flex align-items-center">
        <div className="auth-buttons ml-2 d-flex" id="auth-buttons">
          {!isAuthenticated ? (
            <>
              <Link
                to="/login"
                style={{
                  backgroundColor: "red",
                  width: "100px",
                  padding: "14px",
                }}
                className="btn btn-outline-dark btn-sm me-2"
              >
                Login
              </Link>
              <Link
                style={{ width: "120px", padding: "14px" }}
                to="/signup"
                className=" d-none d-xl-block btn btn-dark btn-sm"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <button
              style={{ padding: "10px", width: "100px", marginTop: "10px" }}
              onClick={handleLogout}
              className="btn d-none d-lg-block btn-outline-dark btn-sm"
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {/* Reusable Cart Component */}
      <Cart isOpen={cartOpen} toggleCart={toggleCart} />
    </nav>
  );
};

export default Navbar;
