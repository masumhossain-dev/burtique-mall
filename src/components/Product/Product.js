import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  const {addToCartHandler, product} = props;
  const {img, name, price, seller, ratings} = product;
  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className="product-information">
      <p className='name'>{name}</p>
      <p className='price'>Price: {price}</p>
      <p className='common'><small>Manufacturer: {seller}</small></p>
      <p className='common'><small>Rating: {ratings}</small></p>
      </div>
      <button onClick={()=>addToCartHandler(product)} className='btn-cart'>
        <p className='cart-text'>Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;