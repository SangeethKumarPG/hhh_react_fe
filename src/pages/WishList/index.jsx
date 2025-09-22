import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./style.css";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchWish, removeWishItem } from "../../redux/wishSlice";

const WishList = () => {
  const [data, setData] = useState(false);

  const dispatch = useDispatch();

  const { items, loading, error } = useSelector((state) => state.wishlist);

  const fullWidthStyle = {
    width: "100%",
    margin: "0",
    padding: "0", // Fixed typo: was 'paddig'
  };

  useEffect(() => {
    dispatch(fetchWish());
  }, [dispatch]);
  useEffect(() => {
    console.log("wislist", items);
  }, [items]);
  return (
    <div className="wishlist-1">
      <Navbar />

      <h1>Your Wish List Items</h1>
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p className="wish-p">please login or something went wrong</p>
      ) : items.length === 0 ? (
        <p className="wish-p">No wishlist added !</p>
      ) : (
        <div className="wishlist-2">
          {items.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.product}`}
              className="product-card-link"
            >
              <div className="product-card">
                {product.is_sale && <span className="badge sale">Sale</span>}
                {product.is_bestseller && (
                  <span className="badge bestseller">Best Seller</span>
                )}
                <i
                  onClick={() => dispatch(removeWishItem(product.id))}
                  class="fa-solid fa-xmark close-3"
                ></i>
                <img
                  src={
                    product.image
                      ? product.image
                      : "http://127.0.0.1:8000/" + product.image
                  }
                  // src="/src/assets/images/collection/product1.png"
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-details">
                  <p className="brand">{product.brand || "No Brand"}</p>
                  <h4 className="product-name">{product.product_name}</h4>
                  <p className="price">
                    {product.old_price && (
                      <span className="old-price">
                        ₹ {product.old_price} 200
                      </span>
                    )}
                    <span className="new-price">₹ {product.product_price}</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
      <Footer style={fullWidthStyle} />
    </div>
  );
};

export default WishList;
