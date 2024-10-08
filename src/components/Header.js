import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartItemCount }) => {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/cart">
        <span>Cart ({cartItemCount})</span>
      </Link>
    </header>
  );
};

export default Header;
