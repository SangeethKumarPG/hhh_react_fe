import React, { useEffect, useRef } from "react";
import "../assets/css/EndOfSeason.css";
import bgImage from "../assets/images/backgrounds/cta.png";

const EndOfSeason = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        // Parallax effect: move background slower than scroll
        sectionRef.current.style.backgroundPosition = `center ${
          window.scrollY * 0.05
        }px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="end-season-section overlay cta text-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-white">
            <h1 className="mb-2">End of Season Sale</h1>
            <p className="mb-4">
              Take 10% off on selected fragrances. Discount applied at checkout.
            </p>

            <a href="/products" className="btn btn-light w-25">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndOfSeason;
