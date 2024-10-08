import React from 'react';

const CartItem = ({ item, updateQuantity, removeItem }) => {
  return (
    <div className="cart-item">
      <img src={item.imgSrc} alt={item.name} />
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <div>
        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
      </div>
      <button onClick={() => removeItem(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;

