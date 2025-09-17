import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Home from "./components/Home";
import SignupPage from "./pages/SignupPage";
import "animate.css";
import ProductsPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import ProductDetailsPage from "./pages/productDetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactUs from "./pages/ContactUs";

// import Shop from "./pages/Shop";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/contactus" element={<ContactUs />} />
          {/* <Route path="/shop" element={<Shop />}></Route> */}
          {/* other routes */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
