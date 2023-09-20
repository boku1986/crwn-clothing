import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  return <div className="checkout-container">
    <h1>I am the checkout page</h1>
  </div>;
};
export default Checkout;
