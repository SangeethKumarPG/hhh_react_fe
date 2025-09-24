import React, { useEffect } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../redux/orderSlice";

const demoOrder = [
  {
    orderId: "ORD123456",
    customer: "John Doe",
    address: "John Doe, xyz location ,00000 pincode",
    product: "Wireless Headphones",
    status: "Shipped",
    steps: ["Processing", "Pending", "Shipped"],
  },
  {
    orderId: "ORD123456",
    customer: "John Doe",
    address: "John Doe, xyz location ,00000 pincode",
    product: "Wireless Headphones",
    status: "Pending",
    steps: ["Processing", "Pending", "Shipped"],
  },
];

const OrderTracking = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { items, loading, error } = useSelector((state) => state.order);

  const steps = ["Paid", "Pending", "Shipped"];

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  useEffect(() => {
    console.log("neee order", items);
  }, [items]);

  return (
    <div className="order-11">
      <h2 className="order-container-h2">
        <i
          onClick={() => navigate(-1)}
          style={{
            fontSize: "25px",
          }}
          class="fa fa-arrow-left"
          aria-hidden="true"
        ></i>
        Track Your Order
      </h2>
      {error ? (
        <p>Something went wrong</p>
      ) : loading ? (
        <p>loading...</p>
      ) : items.length === 0 ? (
        <p>
          Order Products Now <a href="/products">Shop</a>
        </p>
      ) : (
        items.map((i, ind) => {
          return (
            <div key={ind} className="order-container">
              <p>
                <b>Order ID : </b> {i.order_id}
              </p>
              <p>
                <b>Customer:</b> {i.first_name} {i.last_name}
              </p>
              <p>
                <b>Address:</b> {i.city} {i.pincode}
              </p>
              <p>
                <b>Product:</b>{" "}
                {i.items.map((item, idx) => {
                  return <p>{item.product && item.product.name}</p>;
                })}
              </p>

              <div className="steps-container">
                {steps.map((step, index) => {
                  const stepIndex = steps.indexOf(i.status);
                  return (
                    <div
                      key={index}
                      className={`step ${index <= stepIndex ? "active" : ""}`}
                    >
                      <div className="circle">{index + 1}</div>
                      <p>{step}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default OrderTracking;
