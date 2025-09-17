// src/components/SignupPage.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../redux/authSlice";
import logoImage from "../assets/images/HHH logo.png";
import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export default function SignupPage() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    username: "",
    full_name: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.password2) {
      toast.error("Passwords do not match!");
      return;
    }

    // if (formData.email) {
    //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //   if (!emailRegex.test(formData.email)) {
    //     alert("Please enter a valid email address!");
    //     return;
    //   }
    // }

    const result = await dispatch(signupUser(formData));

    if (signupUser.fulfilled.match(result)) {
      toast.success("User registered successfully!");
      window.location.href = "/login";
    } else {
      toast.error("Error: " + JSON.stringify(result.payload));
    }
  };

  return (
    <div
      className="container"
      style={{
        width: "100%",
        maxWidth: "400px",
        padding: "30px 20px",
        boxShadow: "0 0 20px rgba(0,0,0,0.05)",
        borderRadius: "12px",
        textAlign: "center",
      }}
    >
      {/* <ToastContainer /> */}
      <div
        className="logo"
        style={{ backgroundImage: `url(${logoImage})` }}
      ></div>
      <h2 className="text-center font-weight-bold">HHH vanila perfumes</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="User Name"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          value={formData.full_name}
          onChange={handleChange}
          required
        />
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
        <input
          type="password"
          name="password2"
          placeholder="Confirm Password"
          value={formData.password2}
          onChange={handleChange}
          required
        />

        <label className="terms">
          <input type="checkbox" required />
          Agree with Terms & Conditions
        </label>

        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
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
          I'm already a member? <a href="/login">Sign In</a>
        </p>
      </form>

      {error && <p style={{ color: "red" }}>{JSON.stringify(error)}</p>}
    </div>
  );
}
