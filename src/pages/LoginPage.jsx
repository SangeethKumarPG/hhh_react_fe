import React from "react";
import "../assets/css/LoginPage.css";
import logo from "../assets/images/HHH logo.png";

const LoginPage = () => {
  return (
    <div className="login-container">
      <div
        className="logo"
        style={{ backgroundImage: `url(${logo})` }}
      ></div>
      <h2>HHH vanila perfumes</h2>

      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        <div className="options">
          <label>
            <input type="checkbox" /> Remember me ?
          </label>
          <a href="#">Forgot password ?</a>
        </div>

        <button type="submit" className="btn">
          Login
        </button>

        <p className="or">Or Continue With</p>

        <div className="socials">
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="Google"
          />
          <img
            src="https://img.icons8.com/color/48/000000/twitter.png"
            alt="Twitter"
          />
          <img
            src="https://img.icons8.com/color/48/000000/facebook-new.png"
            alt="Facebook"
          />
        </div>

        <p className="switch">
          Need an account? <a href="/signup">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
