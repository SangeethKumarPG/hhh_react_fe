import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { fetchCart, removeCartItem } from "../redux/cartSlice";
import "../assets/css/CheckoutPage.css";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const subtotal = items.reduce(
    (sum, item) => sum + parseFloat(item.item_total),
    0
  );

  return (
    <>
      <Navbar />
      <div className="container-fluid checkout-container">
        {/* Left Section: Customer Info */}
        <div className="left-section">
          <div className="form-section">
            <h4>Contact</h4>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email or mobile phone number"
                required
              />
              <div className="form-check mt-2">
                <input type="checkbox" className="form-check-input" id="subscribe" />
                <label className="form-check-label" htmlFor="subscribe">
                  Email me with news and offers
                </label>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h4>Delivery</h4>
            <div className="mb-3">
              <select className="form-selection">
                <option selected>India</option>
              </select>
            </div>
            <div className="row mb-3">
              <div className="col">
                <input type="text" className="form-control" placeholder="First name" />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Last name" />
              </div>
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Address" />
            </div>
            <div className="row mb-3">
              <div className="col">
                <input type="text" className="form-control" placeholder="City" />
              </div>
              <div className="col">
                <input type="text" className="form-control" value="Kerala" readOnly />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="PIN code" />
              </div>
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Phone" />
            </div>
          </div>

          <div className="form-section">
            <h4>Payment</h4>
            <div className="border p-3 rounded mb-3">
              <strong>PhonePe Payment Gateway (UPI, Cards & NetBanking)</strong>
              <div className="mt-2">
                {/* <img src="https://img.icons8.com/color/48/000000/upi.png" width="40" alt="UPI" /> */}
                <img src="https://img.icons8.com/?size=100&id=5RcHTSNy4fbL&format=png&color=000000" width="40" alt="UPI" />

                <img src="https://img.icons8.com/color/48/000000/visa.png" width="40" alt="Visa" />
                <img src="https://img.icons8.com/color/48/000000/mastercard.png" width="40" alt="Mastercard" />
                <img src="https://img.icons8.com/color/48/000000/rupay.png" width="40" alt="Rupay" />
              </div>
              <p className="text-muted mt-3 small">
                After clicking “Pay now”, you will be redirected to PhonePe Payment Gateway to
                complete your purchase securely.
              </p>
            </div>
            <button className="btn btn-primary btn-pay">Pay now</button>
          </div>
        </div>

        {/* Right Section: Cart Summary */}
        <div className="right-section">
          <h5 className="mb-3">Order Summary</h5>

          {loading && <p>Loading cart...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}

          {items.map((item) => (
            <div key={item.id} className="d-flex align-items-center mb-3">
              <img
                src={`http://127.0.0.1:8000${item.product.image}`}
                className="me-3"
                alt={item.product.name} 
                style={{
                    width:"60px",
                    height:"60px",
                    objectFit:"contain"
                }}
              />
              <div>
                <strong>{item.product.name}</strong>
                <br />
                <small>
                  {item.quantity} x ₹{parseFloat(item.product.price).toFixed(2)}
                </small>
              </div>
              <span className="ms-auto fw-bold">₹{parseFloat(item.item_total).toFixed(2)}</span>
              <i
                className="ti-close ms-3"
                style={{ cursor: "pointer" }}
                onClick={() => dispatch(removeCartItem(item.id))}
              ></i>
            </div>
          ))}

          <hr />
          <div className="d-flex justify-content-between">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <span>Shipping</span>
            <span className="text-muted">Enter shipping address</span>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <strong>Total</strong>
            <strong>₹{subtotal.toFixed(2)}</strong>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
