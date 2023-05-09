import React from 'react';
import './Cart.css'

const Cart = (props) => {
  const {cart} = props;
  return (
    <div>
      <h5 className='order-summary'>Order Summary</h5>
      <p>Total Cart: {cart.length}</p>
    </div>
  );
};

export default Cart;