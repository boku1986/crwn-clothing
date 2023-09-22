import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { CartIconContainer } from "./cart-icon.styles";

const CartIcon = () => {
  const {toggleIsCartOpen, cartItemsCount } = useContext(CartContext);

  return (
    <CartIconContainer
      className="cart-icon-container "
      onClick={toggleIsCartOpen}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsCount}</span>
    </CartIconContainer>
  );
};
export default CartIcon;
