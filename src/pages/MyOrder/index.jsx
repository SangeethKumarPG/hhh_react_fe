import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

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

  return (
    <>
      <h2 className="order-container-h2">
        <i
          onClick={() => navigate(-1)}
          style={{
            fontSize: "25px",
          }}
          class="fa fa-arrow-left"
          aria-hidden="true"
        ></i>
        Order Tracking
      </h2>
      {demoOrder.map((i, ind) => {
        return (
          <div key={ind} className="order-container">
            <p>
              <b>Order ID:</b> {i.orderId}
            </p>
            <p>
              <b>Customer:</b> {i.customer}
            </p>
            <p>
              <b>Address:</b> {i.address}
            </p>
            <p>
              <b>Product:</b> {i.product}
            </p>

            <div className="steps-container">
              {i.steps.map((step, index) => {
                const stepIndex = i.steps.indexOf(i.status);
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
      })}
    </>
  );
};

export default OrderTracking;
