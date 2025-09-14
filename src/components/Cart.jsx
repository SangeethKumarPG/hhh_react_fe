import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCart, removeCartItem } from "../redux/cartSlice";
import { CART_URL } from "../services/baseURL";

export default function Cart({ isOpen, toggleCart }) {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.cart);

  useEffect(() => {
    if (isOpen) {
      dispatch(fetchCart());
    }
  }, [dispatch, isOpen]);

  const totalPrice = items.reduce(
    (sum, item) => sum + parseFloat(item.item_total),
    0
  );

  return (
    <>
      {isOpen && (
        <div className="cart-wrapper open">
          <i onClick={toggleCart} className="ti-close cart-close"></i>
          <h4 className="mb-4">Your Cart</h4>

          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p style={{ color: "red" }}>{error}</p>
          ) : items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <ul className="pl-0 mb-3">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="d-flex border-bottom align-items-center"
                  >
                    <img
                      src={`${CART_URL}/${item.product.image}`}
                      width="63"
                      height="85"
                      alt={item.product.name}
                    />
                    <div className="mx-3">
                      <h6>{item.product.name}</h6>
                      <span>{item.quantity}</span> X{" "}
                      <span>₹{parseFloat(item.product.price).toFixed(2)}</span>
                    </div>
                    <i
                      className="ti-close"
                      onClick={() => dispatch(removeCartItem(item.id))}
                      style={{ cursor: "pointer" }}
                    ></i>
                  </li>
                ))}
              </ul>
              <div className="mb-3">
                <span>Cart Total</span>
                <span className="float-right">
                  ₹{totalPrice.toFixed(2)}
                </span>
              </div>
              <div className="text-center">
                <Link
                  to="/checkoutpage"
                  className="btn btn-dark btn-mobile rounded-0"
                >
                  Check Out
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
