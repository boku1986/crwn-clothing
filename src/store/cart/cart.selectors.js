import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }
);

export const selectCartTotalCost = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }
);
