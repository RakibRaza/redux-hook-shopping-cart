import { CLEAR_CART, GET_TOTALS, REMOVE, TOGGLE_QUANTITY } from "./action";
import data from "../data";
const initialStore = {
  cart: data,
  totalPrice: 0,
  quantity: 0,
};
const cartReducer = (state = initialStore, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === REMOVE) {
    const newCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: newCart };
  }
  if (action.type === TOGGLE_QUANTITY) {
    const newCart = state.cart
      .map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.type === "inc") {
            item.quantity += 1;
          }
          if (action.payload.type === "dec") {
            item.quantity -= 1;
          }
        }
        return item;
      })
      .filter((item) => item.quantity !== 0);

    return { ...state, cart: newCart };
  }

  if (action.type === GET_TOTALS) {
    let { totalPrice, quantity } = state.cart.reduce(
      (total, acc) => {
        const { price, quantity } = acc;
        const itemTotal = price * quantity;

        total.quantity += quantity;
        total.totalPrice += itemTotal;

        return total;
      },
      {
        totalPrice: 0,
        quantity: 0,
      }
    );

    totalPrice = parseFloat(totalPrice.toFixed(2));
    return { ...state, totalPrice, quantity };
  }
  return state;
};
export default cartReducer;
