import React from 'react';
import './Product.css'

const Product = (props) => {
  const {img, name, price, seller, ratings} = props.product;
  console.log(props)
  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className="product-information">
      <p className='name'>{name}</p>
      <p className='price'>Price: {price}</p>
      <p className='common'><small>Manufacturer: {seller}</small></p>
      <p className='common'><small>Rating: {ratings}</small></p>
      </div>
      <button className='btn-cart'>
        <p className='cart-text'>Add To Cart</p>
      </button>
    </div>
  );
};

export default Product;