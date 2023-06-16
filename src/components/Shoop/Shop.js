import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakedb';

const Shop = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(()=>{
    fetch('products.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[])

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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;