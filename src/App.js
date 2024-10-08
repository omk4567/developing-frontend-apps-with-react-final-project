import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProductListingPage from './components/ProductListingPage';
import ShoppingCartPage from './components/ShoppingCartPage';
import Header from './components/Header';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (plant) => {
    const existingItem = cartItems.find((item) => item.id === plant.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...plant, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <Header cartItemCount={cartItems.reduce((count, item) => count + item.quantity, 0)} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListingPage addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <ShoppingCartPage
              cartItems={cartItems}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
