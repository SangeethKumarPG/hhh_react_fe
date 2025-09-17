import React, { useState, useEffect } from "react";
import "../assets/css/LoginPage.css";
import logo from "../assets/images/HHH logo.png";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
    } else if (error) {
      toast.error(error);
    }
  }, [accessToken, error, navigate]);

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
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
      <div className="login-container text-center p-4 shadow rounded">
        <div
          className="logo mx-auto mb-3"
          style={{ backgroundImage: `url(${logo})` }}
        ></div>
        <h2 className="mb-4">HHH Vanila Perfumes</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-control mb-3"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="form-control mb-3"
          />

          <div className="d-flex justify-content-between align-items-center mb-3">
            <label className="mb-0">
              <input type="checkbox" className="me-2" /> Remember me?
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {error && <p className="text-danger mt-3">{JSON.stringify(error)}</p>}

          <p className="or mt-4">Or Continue With</p>

          <div className="socials d-flex justify-content-center gap-3 mb-3">
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
    </div>
  );
};

export default LoginPage;
