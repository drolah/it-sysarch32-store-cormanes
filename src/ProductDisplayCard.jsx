import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './ProductDisplay.css';

const ProductDisplayCard = ({ product }) => {
  const { id, model, brand, image, price, ram, storage, processor } = product; // Destructure product props

  return (
    <Link to={`/computers/${id}`}> 
      <div className="product-card">
        <img className="imagess" src={image} alt={brand} />
        <div className="product-details">
          <h3 className="modelss">{model}</h3>
          <h4 className="pricess">{price}</h4>
        </div>
      </div>
    </Link>
  );
};

export default ProductDisplayCard;