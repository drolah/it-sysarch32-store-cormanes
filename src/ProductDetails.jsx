import React, { useState, useEffect } from 'react';
import { db } from './config/firebase.js'; // Assuming your Firebase config file
import { getDoc, doc, collection, getDocs } from 'firebase/firestore'; // Use getDoc for single document
import ProductCard from './ProductCard';
import ProductDetailsCard from './ProductDetailsCard';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null); // Assume initial state as null

  const computerDocRef = doc(db, "computers", productId); // Reference for specific document

  useEffect(() => {
    const getComputerDetails = async () => {
        const productSnap = await getDoc(computerDocRef, productId);
        setProduct(productSnap.data());
      
    };

    getComputerDetails();
  }, [productId]); // Dependency on productId for refetching on change


  //fetch all data
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

    <div>
      <div className="productDetails">
      {product ? ( // Check for product existence before rendering
        <ProductCard key={product.id} product={product} />
      ) : (
        <p>Product loading...</p>
      )}
    </div>
    <div className="products">
      <h2>Featured Products</h2>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductDetailsCard key={product.id} product={product} />
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
    </div>
    
  );
};

export default ProductDetails;