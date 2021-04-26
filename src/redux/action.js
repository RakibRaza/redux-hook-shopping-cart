export const CLEAR_CART = "CLEAR_CART";
export const REMOVE = "REMOVE";
export const TOGGLE_QUANTITY = "TOGGLE_QUANTITY";
export const GET_TOTALS = "GET_TOTALS";

export const clearCart = () => {
  return { type: CLEAR_CART };
};
export const remove = (id) => {
  return { type: REMOVE, payload: id };
};
export const toggleQuantity = (id, type) => {
  return { type: TOGGLE_QUANTITY, payload: { id, type } };
};
export const getTotals = () => {
  return { type: GET_TOTALS };
};
