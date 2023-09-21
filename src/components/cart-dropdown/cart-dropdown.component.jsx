import { useContext } from "react";
import "./cart-dropdown.styles";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../context/cart.context";
import { useNavigate } from "react-router-dom";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
        <Button onClick={goToCheckoutHandler}>GO to checkout</Button>
      </CartItems>
    </CartDropdownContainer>
  );
};
export default CartDropdown;
