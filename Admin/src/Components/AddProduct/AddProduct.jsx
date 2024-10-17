import React, { useState } from 'react';
import './AddProduct.css';
import upload_area from '../../assets/upload_area.svg';
import axios from 'axios';
const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [productdetails, setProductdetails] = useState({
    name: '',
    old_price: '',
    new_price: '',
    category: 'women',
    description: '',
    available: true
  });

  const imageHandler = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(file);
    } else {
      alert('Please upload a valid image file.');
    }
  };

  const productchangeHandler = (e) => {
    setProductdetails({ ...productdetails, [e.target.name]: e.target.value });
  };

  const addProductHandler = async () => {
    let formData = new FormData();
    formData.append('image', image);

    try {
      // Upload image
      const uploadRes = await axios.post('http://localhost:5000/api/uploads/upload', formData);
      const image_url = uploadRes.data.image_url;

      // Add product with image URL
      const product = { ...productdetails, image_url };
      await axios.post('http://localhost:5000/api/products/add', product);

      // Reset form
      setProductdetails({
        name: '',
        old_price: '',
        new_price: '',
        category: 'women',
        description: '',
        available: true
      });
      setImage(null);
      alert('Product added successfully!');
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add the product. Please try again.');
    }
  };

  return (
    <div className='addproduct'>
      {/* Fields for product details */}
      <div className="addproduct-fields">
        <p>Product Title</p>
        <input
          value={productdetails.name}
          onChange={productchangeHandler}
          type="text"
          name="name"
          placeholder='Product Name'
        />
      </div>

      <div className="addproduct-price">
        <div className="addproduct-fields">
          <p>Price</p>
          <input
            value={productdetails.old_price}
            onChange={productchangeHandler}
            type="number"
            name="old_price"
            placeholder='Price'
          />
        </div>
        <div className="addproduct-fields">
          <p>Offer Price</p>
          <input
            value={productdetails.new_price}
            onChange={productchangeHandler}
            type="number"
            name="new_price"
            placeholder='Offer Price'
          />
        </div>
      </div>

      <div className="addproduct-fields">
        <p>Select Category</p>
        <select
          value={productdetails.category}
          onChange={productchangeHandler}
          name="category"
          className='addproduct-select'
        >
          <option value="male">Male</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>
      </div>

      <div className="addproduct-fields">
        <label htmlFor="file-input">
          <img
            className='addproduct-img'
            src={image ? URL.createObjectURL(image) : upload_area}
            alt="Upload"
          />
        </label>
        <input onChange={imageHandler} type="file" id="file-input" hidden />
      </div>

      <button onClick={addProductHandler} className="addproduct-btn">Add Product</button>
    </div>
  );
};

export default AddProduct;
