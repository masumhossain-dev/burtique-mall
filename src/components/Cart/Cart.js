import React from 'react';
import './Cart.css'

const Cart = (props) => {
  const {cart} = props;
  let total = 0;
  let shipping = 0;
  for(const product of cart){
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = total*5/100; 
  const newTax = parseFloat(tax.toFixed(2));
  const grandTotal = (total+shipping+newTax);
  return (
    <div className='cart'>
      <h5 className='order-summary'>Order Summary</h5>
      <div className='inner-cart'>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: {shipping}$</p>
      <p>Tax: ${newTax}</p>
      <p className='grand-total'>Grand Total:${grandTotal}</p>
      </div>
    </div>
  );
};

export default Cart;