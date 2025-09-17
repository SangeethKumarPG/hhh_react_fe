// src/components/ProductCollection.jsx
import React from "react";
import PerfumeBottle from "../assets/images/categories/bottle.1.png";

const ProductCollection = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-title">Top Collections</h2>
          </div>
          <div className="card_container ">
            {[1, 2, 3].map((num) => (
              <div key={num} className="card2 p-3" style={{ width: "18rem" }}>
                <img
                  src={PerfumeBottle}
                  alt={`Perfume_${num}`}
                  className="card-img-top"
                />
                <span className="span1"></span>
                <div className="card-body">
                  <h5 className="card-title">HHH Perfume_{num}</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur elit.
                  </p>
                  <div className="card-num1">
                    <select className="form-select form-select-sm w-auto">
                      <option value="50">50 ml</option>
                      <option value="100">100 ml</option>
                    </select>
                    <div className="fw-bold">₹ 250</div>
                  </div>
                  <div className="d-flex gap-2 justify-content-between align-items-center">
                    <div className="btn-group">
                      <button className="btn btn-outline-secondary btn-sm">
                        -
                      </button>
                      <span className="mx-2">1</span>
                      <button className="btn btn-outline-secondary btn-sm">
                        +
                      </button>
                    </div>
                    <button className="btn btn-primary btn-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCollection;
