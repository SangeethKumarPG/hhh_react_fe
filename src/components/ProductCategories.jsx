// src/components/ProductCategories.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PerfumeIcon1 from "../assets/images/categories/perfume bottle icon.jpeg";
import PerfumeIcon2 from "../assets/images/categories/perfume bottle icon2.jpeg";
import PerfumeIcon3 from "../assets/images/categories/perfume bottle icon3.jpg";
import { fetchCategories } from "../redux/categorySlice";
import { useDispatch, useSelector } from "react-redux";

const categoriess = [
  { id: 2, title: "Car perfumes", img: PerfumeIcon1 },
  { id: 3, title: "Body perfumes", img: PerfumeIcon3 },
  { id: 4, title: "Multipurpose", img: PerfumeIcon2 },
];

const ProductCategories = () => {
  const dispatch = useDispatch();

  const { items: categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    console.log("haa", categories);
  }, [categories]);

  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <h2 className="section-title">Top Categories</h2>
          </div>
          {categoriess.slice(0, 3).map((cat) => (
            <div key={cat.id} className="col-lg-4 col-md-6 mb-50">
              <div className="card p-0">
                <div className="border-bottom text-center hover-zoom-img">
                  <Link to={`/products?category=${cat.id}`}>
                    <img
                      src={cat.img}
                      className="rounded-top img-fluid w-100"
                      alt={cat.id}
                    />
                  </Link>
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column" }}
                  className="px-4 py-3 border-top justify-content-between align-items-center"
                >
                  <h4 className="mb-0">{cat.name}</h4>
                  <Link
                    to={`/products?category=${cat.id}`}
                    className="btn btn-sm btn-outline-primary"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
