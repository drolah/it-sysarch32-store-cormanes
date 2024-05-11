import React, {useState} from 'react';
import './ProductDetails.css' 
import './Cart.css'
import { loadStripe } from '@stripe/stripe-js';

// Load the Stripe.js library with your publishable API key
const stripePromise = loadStripe('pk_test_51PFA92RufsXPCz6P8zttUAKK6LOVP4kKS5o1w2CfUGfbaewqel7GT57NcA8WGWgudblEL8nAnEalejyUL6I1OtKh00eAerDVM1'); // Replace with your publishable key

 
const ProductCard = ({ product }) => {
  const { id, model, brand, image, price, ram, storage, processor } = product;
  const priceFloat = parseFloat(price);
  

  const handleClickCheckout = async () => {
    const stripe = await stripePromise;

    // Send a request to the backend to create a checkout session
    const response = await fetch('34.142.229.117/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ model, price: priceFloat * 100 }), // Send product name and price to the backend
    });

    if (response.ok) {
      // If the request is successful, retrieve the session ID from the response
      const session = await response.json();

      // Redirect the user to the Stripe Checkout page using the session ID
      const result = await stripe.redirectToCheckout({ sessionId: session.id });

      if (result.error) {
        // If there is an error during the redirect, display the error message
        setError(result.error.message);
      }
    } else {
      // If there is an error creating the checkout session, display an error message
      setError('Error creating checkout session');
    }
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
      <button className="button" alt="Cart" onClick={handleClickCheckout}>
      <span className="button-text">Checkout</span>
    </button>
    </div>
    </>
    
  );
};

export default ProductCard;