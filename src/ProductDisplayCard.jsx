import React from 'react';

const ProductDisplayCard = ({ product }) => {
  const { id, model, brand, image, price, ram, storage, processor } = product; // Destructure product props

  return (
    <div className="product-card">
      <img src={image} alt={brand} />
      <div className="product-details">
        <h3>{model}</h3>
        <h4>{price}</h4>
        <p>Brand: {brand}</p>
        <p>Processor: {processor}</p>
        <p>RAM: {ram}</p>
        <p>Storage: {storage}</p>
      </div>
    </div>
  );
};

export default ProductDisplayCard;