import React, { useState } from 'react';
import PlantCard from './PlantCard'; // Reusable plant card component

const plants = [
  { id: 1, name: 'Monstera', price: 20, imgSrc: '/path-to-monstera.jpg' },
  { id: 2, name: 'Fiddle Leaf Fig', price: 25, imgSrc: '/path-to-fig.jpg' },
  // Add more plants
];

const ProductListingPage = ({ addToCart }) => {
  return (
    <div className="product-listing">
      <h1>Our Plants</h1>
      <div className="plant-categories">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
