// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCategories from "../components/ProductCategories";
import ProductCollection from "../components/ProductCollection";
import EndOfSeason from "../components/EndOfSeason";
import Footer from "../components/Footer";
import "../assets/css/Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductCategories />
      <ProductCollection />
      <EndOfSeason />
      <Footer />
    </>
  );
};

export default Home;
