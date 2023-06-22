import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItems from '../../ReviewItems/ReviewItems';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
  const {initialCart} = useLoaderData();
  const [cart, setCart] = useState(initialCart);

  const removeCartItems = (id)=>{
    const remaining = cart.filter(product=> product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  }
  return (
    <div className='shop-container'>
      <div className='order-container'>
      {
          cart.map(product=><ReviewItems
            key={product.id}
            product={product}
            id={product.id}
            removeCartItems={removeCartItems}
            ></ReviewItems>)
        }
      </div>
      <div className='cart-container'>
        <Cart cart={cart}></Cart>
        
      </div>
    </div>
  );
};

export default Orders;