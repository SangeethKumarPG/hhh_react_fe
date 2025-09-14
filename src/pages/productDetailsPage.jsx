import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

const ProductDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, media, loading, error } = useSelector(
    (state) => state.productDetails
  );
  const [selectedMedia, setSelectedMedia] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchProductDetails(id));
    dispatch(fetchProductMedia(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (media.length > 0) {
      setSelectedMedia(media[0]);
    }
  }, [media]);
      const handleBuyNow = (productId) => {
      dispatch(buyNowThunk({ productId, quantity: 1 }))
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

  const handleAddToCart = (productId)=>{
    dispatch(addToCartThunk({productId, quantity:1}));
  };

  return (
    <>
    <Navbar/>
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

          <div className="quantity-section">
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" min="1" defaultValue="1" />
          </div>

          <div className="action-buttons">
            <button className="buy-now" onClick={()=>handleBuyNow(product.id)}>Buy it now</button>
            <button className="wishlist-btn">❤️</button>
            <button className="add-to-cart" onClick={()=>handleAddToCart(product.id)}>🛒</button>
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
        <div className="recommendations">
          <div className="item">
            <img src="/images/collection/product1.png" alt="Related" />
            <p>Silver Crystal Car Perfume</p>
          </div>
          <div className="item">
            <img src="/images/collection/product2.png" alt="Related" />
            <p>Spirit Spray Air Perfume</p>
          </div>
          <div className="item">
            <img src="/images/collection/product2.png" alt="Related" />
            <p>Spirit Spray Air Perfume</p>
          </div>
          <div className="item">
            <img src="/images/collection/product2.png" alt="Related" />
            <p>Spirit Spray Air Perfume</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>

  );
};

export default ProductDetailsPage;
