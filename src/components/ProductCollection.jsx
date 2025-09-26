// src/components/ProductCollection.jsx
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import PerfumeBottle from "../assets/images/categories/bottle.1.png";
import "../assets/css/ProductCollection.css";

import { getProductsAPI } from "../services/productCategoryAPI";
import { addToCartThunk } from "../redux/cartSlice";

const fallbackProducts = [
  {
    id: 1,
    name: "HHH Perfume_1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    price: 250,
    image: PerfumeBottle,
  },
  {
    id: 2,
    name: "HHH Perfume_2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    price: 250,
    image: PerfumeBottle,
  },
  {
    id: 3,
    name: "HHH Perfume_3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    price: 250,
    image: PerfumeBottle,
  },
];

const ProductCollection = () => {
  const [products, setProducts] = useState(fallbackProducts);
  const [selected, setSelected] = useState(null);
  const [quantities, setQuantities] = useState({});
  const dispatch = useDispatch();

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProductsAPI();
        if (res?.data && res.data.length > 0) {
          setProducts(res.data.slice(0, 3));
          // console.log("oooddd", res);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        // fallbackProducts will remain
      }
    };
    fetchProducts();
  }, []);

  const updateQuantity = (productId, delta) => {
    setQuantities((prev) => {
      const newQty = Math.max(1, (prev[productId] || 1) + delta);
      if (newQty <= 5) {
        return { ...prev, [productId]: newQty };
      } else return { ...prev, [productId]: 5 };
    });
  };

  const hhh = [
    { img: "/src/assets/images/categories/bottle.png" },
    { img: "/src/assets/images/categories/bottle.png" },
    { img: "/src/assets/images/categories/bottle.png" },
  ];

  const handleAddToCart = (productId) => {
    const quantity = quantities[productId] || 1;
    dispatch(addToCartThunk({ productId, quantity }));
  };

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-title">Top Collections</h2>
          </div>

          <div className="card_container d-flex flex-wrap justify-content-center gap-4">
            {products.map((product, idx) => (
              <div
                key={product.id || idx}
                className={`card2 
                  
                `}
                onClick={() => setSelected(product.id)}
              >
                <img
                  // src={"/src/assets/images/categories/bottle.1 - Copy.png"}
                  src={"http://127.0.0.1:8000/" + product.image}
                  alt={product.name}
                  className="card-img-top product-img"
                />
                <div className="span1"></div>

                <div className="card-body  text-center">
                  <h5 className="card-title">{product.name}</h5>

                  <p className="card-text">{product.description}</p>

                  <div className="d-flex justify-content-center align-items-center mb-3 gap-3">
                    {/* <select className="form-select form-select-sm w-auto custom-select">
                      <option value="50">50 ml</option>
                      <option value="100">100 ml</option>
                    </select>   */}
                    <div
                      style={{
                        color: "gray",
                        textDecorationLine: "line-through",
                      }}
                      className="fw-bold card-text price-text"
                    >
                      ₹ {product.price - 50}.00
                    </div>
                    {/* <div className="fw-bold card-text price-text">₹ 200</div> */}
                    <div className="fw-bold card-text price-text">
                      ₹ {product.price}
                    </div>
                  </div>

                  <div className="d-flex justify-content-center align-items-center gap-3">
                    {/* <div className="btn-group">
                      <button
                        className="qty-btn"
                        onClick={() => updateQuantity(product.id, -1)}
                      >
                        -
                      </button>
                      <span className="mx-2">
                        {quantities[product.id] || 1}
                      </span>
                      <button
                        className="qty-btn"
                        onClick={() => updateQuantity(product.id, 1)}
                      >
                        +
                      </button>
                    </div> */}
                    <button
                      style={{
                        width: "250px",
                      }}
                      className="add-btn"
                      onClick={() => handleAddToCart(product.id)}
                    >
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
