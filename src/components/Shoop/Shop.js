import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
  const products = useLoaderData();
  const [cart, setCart] = useState([])
  
  const clearCart = ()=>{
    setCart([]);
    deleteShoppingCart();
  }

  useEffect(()=>{
    const storedCart = getStoredCart();
    const savedCart = [];
    for(const id in storedCart){
      const addedProduct=products.find(product=>product.id===id);
      if(addedProduct){
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  },[products])


  const addToCartHandler = (product)=>{
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id)
  }
  return (
    <div className="shop-container">
      <div className="product-container">
        {
          products.map(product=><Product
            product={product}
            key={product.id}
            addToCartHandler={addToCartHandler}
            ></Product>)
        }
      </div>
      <div className="cart-container">
        <Cart clearCart={clearCart} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;