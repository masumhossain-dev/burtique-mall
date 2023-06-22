import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItems from '../../ReviewItems/ReviewItems';

const Orders = () => {
  const {products, initialCart} = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  return (
    <div className='shop-container'>
      <div className='order-container'>
      {
          cart.map(product=><ReviewItems key={product.id} product={product}></ReviewItems>)
        }
      </div>
      <div className='cart-container'>
        <Cart cart={cart}></Cart>
        
      </div>
    </div>
  );
};

export default Orders;