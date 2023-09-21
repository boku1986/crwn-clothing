import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
  CheckoutHeader,
  CheckoutPageContainer,
  HeaderBlock,
  Total,
} from "./checkout.styles";

const Checkout = () => {
  const { cartItems, totalCost } = useContext(CartContext);

  return (
    <CheckoutPageContainer>
      <h1>I am the checkout page</h1>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} cartItem={item} />;
      })}
      <Total>Total: ${totalCost}</Total>
    </CheckoutPageContainer>
  );
};
export default Checkout;
