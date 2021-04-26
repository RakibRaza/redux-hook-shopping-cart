import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, getTotals } from "./redux/action";
const CartContainer = () => {
  const cart = useSelector((state) => state.cart);
  const totalPrice = useSelector((state) => state.totalPrice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${totalPrice}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(clearCart())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
