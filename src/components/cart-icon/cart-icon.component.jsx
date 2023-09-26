import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartIconContainer } from "./cart-icon.styles";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsCartOpen } from "../../store/cart/cart.action";
import { selectCartItemsCount } from "../../store/cart/cart.selectors";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartItemsCount = useSelector(selectCartItemsCount);
  const toggleCartVisibility = () => dispatch(toggleIsCartOpen());

  return (
    <CartIconContainer
      className="cart-icon-container "
      onClick={toggleCartVisibility}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsCount}</span>
    </CartIconContainer>
  );
};
export default CartIcon;
