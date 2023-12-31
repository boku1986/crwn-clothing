import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
  CheckoutHeader,
  CheckoutPageContainer,
  HeaderBlock,
  Total,
} from "./checkout.styles";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotalCost,
} from "../../store/cart/cart.selectors";
import PaymentForm from "../../components/payment-form/payment-form.component";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const totalCost = useSelector(selectCartTotalCost);

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
      <PaymentForm/>
    </CheckoutPageContainer>
  );
};
export default Checkout;
