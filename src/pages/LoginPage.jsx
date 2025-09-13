import React, { useState, useEffect } from "react";
import "../assets/css/LoginPage.css";
import logo from "../assets/images/HHH logo.png";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, accessToken } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  useEffect(() => {
    if (accessToken) {
      navigate("/"); 
    }
  }, [accessToken, navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  return (
    <div className="login-container">
      <div
        className="logo"
        style={{ backgroundImage: `url(${logo})` }}
      ></div>
      <h2>HHH vanila perfumes</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <div className="options">
          <label>
            <input type="checkbox" /> Remember me ?
          </label>
          <a href="#">Forgot password ?</a>
        </div>

        <button type="submit" className="btn" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        {error && <p style={{ color: "red", marginTop: "10px" }}>{JSON.stringify(error)}</p>}

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
