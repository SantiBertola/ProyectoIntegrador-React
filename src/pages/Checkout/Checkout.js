import React from 'react';

import CheckoutForm from '../../components/Checkout/Form/CheckoutForm';
import ProductsCheckout from '../../components/Checkout/Products/CheckoutProducts';
import { CheckoutContainer } from '../Checkout/CheckoutStyled';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const { cartItems, shippingCost } = useSelector(state => state.cart);
  const totalPrice = cartItems.reduce(
    (acc, item) => (acc += item.price * item.quantity),
    0
  );

  return (
    <div>
      <CheckoutContainer>
        <CheckoutForm
          cartItems={cartItems}
          shippingCost={shippingCost}
          price={totalPrice}
        />
        <ProductsCheckout
          cartItems={cartItems}
          shippingCost={shippingCost}
          price={totalPrice}
        />
      </CheckoutContainer>
    </div>
  );
};

export default Checkout;