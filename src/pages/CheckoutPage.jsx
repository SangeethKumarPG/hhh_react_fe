import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { fetchCart, removeCartItem } from "../redux/cartSlice";
import { commonAPI } from "../services/commonAPI"; // 👈 adjust path if needed
import "../assets/css/CheckoutPage.css";
import { toast } from "react-toastify";
import { CART_URL } from "../services/baseURL";

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.cart);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    city: "",
    state: "Kerala",
    pincode: "",
    shipping_address: "",
    billing_address: "",
    notes: "",
  });

  const [paymentResponse, setPaymentResponse] = useState(null);

  useEffect(() => {
    dispatch(fetchCart());
    console.log("my quantity", items);
  }, [dispatch]);

  const subtotal = items.reduce(
    (sum, item) => sum + parseFloat(item.item_total),
    0
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async () => {
    if (
      !formData.first_name ||
      !formData.last_name ||
      !formData.shipping_address ||
      !formData.city ||
      !formData.phone_number ||
      !formData.pincode
    ) {
      return toast.error("please fill all fields");
    }

    const res = await loadRazorpayScript();
    if (!res) {
      toast.error(
        "Razorpay SDK failed to load. Check your internet connection."
      );
      return;
    }

    try {
      // 1. Call backend via commonAPI to create order
      const token = sessionStorage.getItem("access_token");
      const response = await commonAPI(
        "POST",
        `${CART_URL}payments/user-cart-checkout/`,
        formData,
        {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }
      );
      if (response.status != 200) {
        toast.error(response.message);
        return;
      }
      const { razorpay_order, razorpay_key_id, total_amount, order_id } =
        response.data;

      const options = {
        key: razorpay_key_id,
        amount: razorpay_order.amount,
        currency: "INR",
        name: "HHH Perfumes",
        description: "Transaction",
        order_id: razorpay_order.id,
        handler: async function (res) {
          setPaymentResponse(res);

          await commonAPI("POST", `${CART_URL}payments/payment-status/`, {
            razorpay_order_id: res.razorpay_order_id,
            razorpay_payment_id: res.razorpay_payment_id,
            razorpay_signature: res.razorpay_signature,
          });
        },
        prefill: {
          name: formData.first_name + " " + formData.last_name,
          email: "customer@example.com",
          contact: formData.phone_number,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (err) {
      console.error(err);
      toast.error(
        "Something went wrong while processing payment. Please login again."
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid checkout-container">
        {/* Left Section */}
        <div className="left-section">
          <div className="form-section">
            <h4>Delivery</h4>
            <div className="row mb-3">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  name="first_name"
                  onChange={handleChange}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  name="last_name"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                name="shipping_address"
                onChange={handleChange}
              />
            </div>
            <div className="row mb-3">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  name="city"
                  onChange={handleChange}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  value="Kerala"
                  name="state"
                  readOnly
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="PIN code"
                  name="pincode"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Phone"
                name="phone_number"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-section">
            <h4>Payment</h4>
            <button className="btn btn-primary btn-pay" onClick={handlePayment}>
              Pay now
            </button>
          </div>

          {paymentResponse && (
            <div className="alert alert-success mt-3">
              <h6>Payment Success!</h6>
              <p>Payment ID: {paymentResponse.razorpay_payment_id}</p>
              <p>Order ID: {paymentResponse.razorpay_order_id}</p>
            </div>
          )}
        </div>

        <div className="right-section">
          <h5 className="mb-3">Order Summary</h5>
          {loading && <p>Loading cart...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
          {items.map((item) => (
            <div key={item.id} className="d-flex align-items-center mb-3">
              <img
                src={`${CART_URL}${item.product.image}`}
                className="me-3"
                alt={item.product.name}
                style={{ width: "60px", height: "60px", objectFit: "contain" }}
              />
              <div>
                <strong>{item.product.name}</strong>
                <br />
                <small>
                  {item.quantity} x ₹{parseFloat(item.product.price).toFixed(2)}
                </small>
              </div>
              <span className="ms-auto fw-bold">
                ₹{parseFloat(item.item_total).toFixed(2)}
              </span>
              <i
                className="ti-close ms-3"
                style={{ cursor: "pointer" }}
                onClick={() => dispatch(removeCartItem(item.id))}
              ></i>
            </div>
          ))}
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
