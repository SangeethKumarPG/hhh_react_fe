import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductDetails,
  fetchProductMedia,
} from "../redux/productDetailsSlice";
import "../assets/css/productDetailsPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { addToCartThunk, buyNowThunk } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { addToWishThunk } from "../redux/wishSlice";
import { fetchProducts } from "../redux/productSlice";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, media, loading, error } = useSelector(
    (state) => state.productDetails
  );
  const { items: products } = useSelector((state) => state.products);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [qnty, setQuantity] = useState(null);
  const [filter, setFilter] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchProductDetails(id));
    dispatch(fetchProductMedia(id));
  }, [dispatch, id]);

  const setQnty = (e) => {
    setQuantity(e.target.value);
  };

  useEffect(() => {
    if (media.length > 0) {
      setSelectedMedia(media[0]);
    }
  }, [media]);

  useEffect(() => {
    // console.log("quaaant", qnty);
    // console.log("fsda", filter);
  }, [qnty]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (!product?.name) return; // safeguard

    const filterDetails = products.filter((item) => {
      if (product.name.toLowerCase().includes("body")) {
        return item.name.toLowerCase().includes("car");
      } else if (product.name.toLowerCase().includes("car")) {
        return item.name.toLowerCase().includes("body");
      }
      return false; // fallback
    });

    setFilter(filterDetails);
  }, [products, product]); // ✅ correct dependencies

  const handleBuyNow = (productId) => {
    dispatch(buyNowThunk({ productId, quantity: qnty }))
      .unwrap()
      .then(() => {
        navigate("/checkout");
      })
      .catch((err) => {
        console.error("Buy Now failed:", err);
        alert("Failed to process buy now. Please try again.");
      });
  };

  if (loading) return <p>Loading product...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!product) return null;

  const handleAddToCart = (productId) => {
    dispatch(addToCartThunk({ productId, quantity: 1 }));
  };

  const handleAddToWish = (productId) => {
    dispatch(addToWishThunk({ productId }));
  };

  return (
    <>
      <Navbar />
      <div className="content_container">
        <div className="product-display">
          {/* Thumbnails */}
          <div className="thumbnail-images">
            {media.map((m, i) =>
              m.media_type === "image" ? (
                <img
                  key={i}
                  src={m.file}
                  alt={`Product ${i}`}
                  onClick={() => setSelectedMedia(m)}
                />
              ) : (
                <video
                  key={i}
                  src={m.file}
                  width="60"
                  muted
                  onClick={() => setSelectedMedia(m)}
                />
              )
            )}
          </div>

          {/* Main Image/Video */}
          <div className="main-image">
            {selectedMedia?.media_type === "image" ? (
              <img src={selectedMedia?.file} alt={product?.name} />
            ) : (
              <video src={selectedMedia?.file} controls autoPlay />
            )}
          </div>

          {/* Product Details */}
          <div className="product-details">
            <h1 className="product-title">{product.name}</h1>
            <p className="price">
              {product.old_price && <del>₹{product.old_price}</del>}{" "}
              <strong>₹{product.price}</strong> <small>(incl. tax)</small>
            </p>
            <p className="brand">{product.brand || "No Brand"}</p>
            <p className="desc">{product.description}</p>

            {/* <div className="quantity-section">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                onChange={setQnty}
                min="1"
                max="5"
                defaultValue="1"
              />
            </div> */}
            <p>
              {product.stock === 0 ? (
                <span style={{ color: "red" }}>Out Of Stock</span>
              ) : (
                <span style={{ color: "green" }}>
                  Available Stock : {product.stock}
                </span>
              )}
            </p>

            <div style={{ marginTop: "50px" }} className="action-buttons">
              <button
                className="buy-now"
                onClick={() => handleBuyNow(product.id)}
              >
                Buy it now
              </button>
              <button
                onClick={() => handleAddToWish(product.id)}
                // handleAddToWish
                className="wishlist-btn"
              >
                ❤️
              </button>
              {product.stock === 0 ? (
                ""
              ) : (
                <button
                  className="add-to-cart"
                  onClick={() => handleAddToCart(product.id)}
                >
                  🛒+
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="features">
          <h2>Product Features</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h4>Luxury Fine Blends</h4>
              <p>Premium aromas that are exclusive and timeless.</p>
            </div>
            <div className="feature-card">
              <h4>All Weather Performance</h4>
              <p>Performs in varied climatic conditions.</p>
            </div>
            <div className="feature-card">
              <h4>No Gas Air Perfume</h4>
              <p>Richer blends that increase performance and longevity.</p>
            </div>
            <div className="feature-card">
              <h4>Powered for SUVs & Sedans</h4>
              <p>Fabulous result in any cabin size.</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="faq">
          <h2>Frequently Asked Questions</h2>
          <ul>
            <li>Why choose this product?</li>
            <li>How does it smell?</li>
            <li>How to use it?</li>
            <li>How often should I spray?</li>
          </ul>
        </div>

        {/* Reviews */}
        <div className="reviews">
          <h2>Customer Reviews</h2>
          <div className="review-box">
            <strong>John Doe</strong> - <em>01/01/2025</em>
            <p>Excellent fragrance and long lasting.</p>
          </div>
          <div className="review-box">
            <strong>Jane Smith</strong> - <em>12/20/2024</em>
            <p>Loved the packaging and quality.</p>
          </div>
        </div>

        {/* Recommendations */}
        <div className="recommend">
          <h2>You may also like</h2>
          {filter.length === 0 ? (
            <div className="recommendations">
              <a href="/products?category=2">
                <div className="item">
                  <img
                    src="/src/assets/images/categories/car1.jpg"
                    alt="Related"
                  />
                  <p>Lav Crystal Car Perfume</p>
                </div>
              </a>
              <a href="/products?category=3">
                <div className="item">
                  <img
                    src="/src/assets/images/categories/car4.jpg"
                    alt="Related"
                  />
                  <p>Sevenstar Spray Body Perfume</p>
                </div>
              </a>
              <a href="/products?category=2">
                <div className="item">
                  <img
                    src="/src/assets/images/categories/car3.jpg"
                    alt="Related"
                  />
                  <p>Jasmin Spray Car Perfume</p>
                </div>
              </a>
              <a href="/products?category=3">
                <div className="item">
                  <img
                    src="/src/assets/images/categories/car2.jpg"
                    alt="Related"
                  />
                  <p>Rouger Spray Body Perfume</p>
                </div>
              </a>
            </div>
          ) : (
            <div className="recommendations-2">
              {filter.slice(0, 3).map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="product-card-link"
                >
                  <div className="product-card">
                    {product.is_sale && (
                      <span className="badge sale">Sale</span>
                    )}
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
                      {/* <p className="brand">{product.brand || "No Brand"}</p> */}
                      <h4 className="product-name">{product.name}</h4>
                      <p className="price">
                        {product.old_price && (
                          <span className="old-price">
                            ₹ {product.old_price}
                          </span>
                        )}
                        {/* <span className="new-price">₹ {product.price}</span> */}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}{" "}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
