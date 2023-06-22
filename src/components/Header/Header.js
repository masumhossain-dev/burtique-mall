import React from 'react';
import './Header.css'
import logo from '../../images/Logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='header-nav'>
      <img src={logo} alt="" />
      <div>
        <Link to="/shop">Shop</Link>
        <Link to="/order">Order</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Header;