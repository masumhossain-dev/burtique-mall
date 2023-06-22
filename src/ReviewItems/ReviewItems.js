import React from 'react';
import './ReviewItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItems = ({id, product, removeCartItems}) => {
  const {img, name, price, quantity} = product;
  return (
    <div className='review-item'>
      <div className='product-img'>
        <img src={img} alt="" />
      </div>
      <div className="review-details-container">
        <div className="review-details">
          <p>{name}</p>
          <p><small>Price: <span>{price}</span></small></p>
          <p><small>Quantity: {quantity}</small></p>
        </div>
        <div className="delete-btn">
          <button className='item-delete' onClick={()=>removeCartItems(id)}>
            <FontAwesomeIcon icon={faTrashAlt} className='fa-trash'></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItems;