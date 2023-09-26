import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

export const setCartItems = (cartItemsArray) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItemsArray);

export const toggleIsCartOpen = () =>
  createAction(CART_ACTION_TYPES.TOGGLE_CART_OPEN);

const addCartItem = (cartItems, productToAdd) => {
  // find if cart items contains the product to add
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );

  // if found, increment quantity by 1
  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  // return new cart items array
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== productToRemove.id);
  }

  return cartItems.map((item) =>
    item.id === productToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
const clearCartItem = (cartItems, productToClear) => {
  return cartItems.filter((item) => item.id !== productToClear.id);
};

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const clearItemFromCart = (cartItems, productToClear) => {
  const newCartItems = clearCartItem(cartItems, productToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
