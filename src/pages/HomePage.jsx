import React from 'react'
import Navbar from '../components/Navbar'
import "../assets/css/Home.css";
import ProductCategories from '../components/ProductCategories'
import EndOfSeason from '../components/EndOfSeason'
import ProductCollection from '../components/ProductCollection'
import Footer from '../components/Footer'

import Hero from '../components/Hero'

function HomePage() {
  return (
    <>
        <Navbar />
        <Hero />
        <ProductCategories />
        <EndOfSeason/>
        <ProductCollection />
        <Footer />
    </>
  )
}

export default HomePage