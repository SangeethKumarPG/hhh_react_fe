import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategories } from "../redux/categorySlice";
import { fetchProducts, fetchProductsByCategory } from "../redux/productSlice";
import "../assets/css/ProductsPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { items: categories } = useSelector((state) => state.categories);
  const { items: products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    if (categoryId) {
      dispatch(fetchProductsByCategory(categoryId));
    } else {
      dispatch(fetchProducts());
    }
  };

  return (
    <>
      <Navbar />
      <div className="products-page-container">
        {/* Category Dropdown */}
        <section className="category-section my-5">
          <select className="category-dropdown" onChange={handleCategoryChange}>
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </section>

        {/* Product Grid */}
        <div className="product-grid">
          {loading && <p>Loading products...</p>}
          {error && <p style={{ color: "red" }}>Kindly refresh the page.</p>}
          {!loading && products.length === 0 && <p>No products found.</p>}

          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="product-card-link"
            >
              <div className="product-card">
                {product.is_sale && <span className="badge sale">Sale</span>}
                {product.is_bestseller && (
                  <span className="badge bestseller">Best Seller</span>
                )}

                <img
                  src={
                    product.image.startsWith("http")
                      ? product.image
                      : "http://127.0.0.1:8000/" + product.image
                  }
                  alt={product.name}
                  className="product-image"
                />

                <div className="product-details">
                  <p className="brand">{product.brand || "No Brand"}</p>
                  <h4 className="product-name">{product.name}</h4>
                  <p className="price">
                    {product.old_price && (
                      <span className="old-price">₹ {product.old_price}</span>
                    )}
                    <span className="new-price">₹ {product.price}</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;
