import React, {useState} from 'react';
import './ProductDetails.css'   
import ProductDisplay from './ProductDisplay';
import './Cart.css'

const ProductCard = ({ product }) => {
  const { id, model, brand, image, price, ram, storage, processor } = product;
  const [isChecked, setIsChecked] = useState(false);
  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
    <a className='backBtn' href='/computers'>Back</a>
    <div className="productDetails-card">
      <img className = 'image' src={image} alt={brand} />
      <div className="product-details-card">
        <h2 className='model'>{model}</h2>
        <h4 className='brand'>Brand: {brand}</h4>
        <h4 className='price'>Price: {price}</h4>
        <h4 className='ram'>Ram: {ram}</h4>
        <h4 className='storage'>Storage: {storage}</h4>
        <h4 className='processor'>Processor{processor}</h4>
      </div>
      <button className="button" onClick={handleClick} alt="Cart">
      <span className="button-text">Add to cart</span>

      <img
        src={isChecked ? "https://cdn-icons-png.flaticon.com/128/1634/1634264.png" : "https://cdn-icons-png.flaticon.com/128/1170/1170576.png"}
        alt={isChecked ? "Checked" : "Cart"}
        className="button-icon"
      />
    </button>
    </div>
    </>
    
  );
};

export default ProductCard;