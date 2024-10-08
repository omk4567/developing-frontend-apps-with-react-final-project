import React from 'react';
import CartItem from './CartItem'; // Reusable component for each cart item

const ShoppingCartPage = ({ cartItems, updateQuantity, removeItem }) => {
  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          ))}
          <p>Total Cost: ${totalCost}</p>
          <button>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartPage;
