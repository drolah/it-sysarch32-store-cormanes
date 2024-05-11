import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './ProductDisplay.css';

const ProductDetailsCard = ({ product }) => {
  const { id, model, brand, image, price, ram, storage, processor } = product; // Destructure product props


  return (
    <Link to={`/computers/${id}`}> 
      <div className="product-detail-card">
        <img className="images" src={image} alt={brand} />
        <div className="product-details">
          <h3 className="models">{model}</h3>
          <h4 className="prices">{price}</h4>
        </div>
      </div>
    </Link>
  );
};

export default ProductDetailsCard;