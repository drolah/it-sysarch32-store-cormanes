import React, { useState, useEffect } from 'react';
import { db } from './config/firebase.js'; // Assuming your Firebase config file
import { getDocs, collection } from 'firebase/firestore';
import ProductDisplayCard from './ProductDisplayCard';

const ProductDisplay = () => {
  const [products, setProducts] = useState([]);

  const computerCollectionRef = collection(db, "computers"); // Adjust collection name if needed

  useEffect(() => {
    const getComputerList = async () => {
      try {
        const data = await getDocs(computerCollectionRef);
        const productData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productData);
      } catch (err) {
        console.error(err);
      }
    };

    getComputerList();
  }, []);

  return (
    <div className="product">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductDisplayCard key={product.id} product={product} />
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default ProductDisplay;