import React from "react";
import Navbar from "../components/Navbar";
import "../assets/css/Home.css";
import ProductCategories from "../components/ProductCategories";
import EndOfSeason from "../components/EndOfSeason";
import ProductCollection from "../components/ProductCollection";
import Footer from "../components/Footer";
import SearchArea from "../components/SearchArea";
import Hero from "../components/Hero";

function HomePage() {
  const fullWidthStyle = {
    width: "100%",
    margin: "0",
    padding: "0", // Fixed typo: was 'paddig'
  };

  return (
    <>
      <Navbar />
      <SearchArea />
      <Hero style={fullWidthStyle} />
      <ProductCategories style={fullWidthStyle} />
      <EndOfSeason style={fullWidthStyle} />
      <ProductCollection style={fullWidthStyle} />
      <Footer style={fullWidthStyle} />
    </>
  );
}

export default HomePage;
