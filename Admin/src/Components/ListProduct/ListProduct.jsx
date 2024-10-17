import React, { useState, useEffect } from 'react';
import './ListProduct.css';
import axios from 'axios';
import cross_icon from "../../assets/cross_icon.png";

const ListProduct = () => {
  const [allproducts, setAllproducts] = useState([]);

  // Fetch product data
  const fetchinfo = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products');
      setAllproducts(res.data); // Assuming res.data contains an array of products
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Handle product removal
 // Handle product removal
const removehandler = async (id) => {
  try {
    const res = await axios.delete(`http://localhost:5000/api/products/delete/${id}`); // Fixed URL
    if (res.status === 200) {
      console.log('Product deleted:', res.data);
      // Instead of fetching data again, we can filter out the deleted product
      setAllproducts(prevProducts => prevProducts.filter(product => product._id !== id));
    } else {
      console.error('Failed to delete product');
    }
  } catch (error) {
    console.error('Error deleting product:', error);
  }
};

  // Fetch products on component mount and when navigating back
  useEffect(() => {
    fetchinfo();
  }, []); // Empty dependency array means it runs once when the component mounts

  return (
    <div className='listproduct'>
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product, index) => (
          <React.Fragment key={index}>
            <div className="listproduct-format-main listproduct-format">
              <img className='listproduct-img' src={product.image_url} alt={product.name} />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              {/* Trigger product removal onClick */}
              <img
                className='listproduct-remove'
                src={cross_icon}
                alt="cross"
                onClick={() => removehandler(product._id)}  // Ensure the correct field for ID
              />
            </div>
            <hr />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
