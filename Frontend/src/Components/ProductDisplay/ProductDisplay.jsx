import React from 'react'
import './ProductDisplay.css'
import star_icon from '../../assets/star_icon.png'
import star_dull_icon from "../../assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'
import { useContext } from 'react'
const ProductDisplay = (props) => {
  const {product} = props;
    const {addToCart}=useContext(ShopContext)
  return (
    <div className='product-display'>
      <div className='product-display-left'>
<div className="product-display-img">
    <img className='product-display-main-img' src={product.image} alt={product.name} />
</div>
      </div>
      <div className='product-display-right'>
        <h1 className='product-name'>{product.name}</h1>
        <div className="product-display-right-stars">
            <img src={star_icon}  alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
         <p>(201)</p>
        </div>

        <div className="product-display-right-price">
            <div className="product-display-right-price-old">${product.old_price}</div>
            <div className="product-display-right-price-new">${product.new_price}</div>
    </div>
        <div className="product-display-right-description">
            A Light and airy summer dress with a floral print and a flowy fit.
        </div>
        <div className="product-right-size">
            <h1>Select Size</h1>
            <div className="product-right-size-list">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button
                onClick={()=>{addToCart(product.id)}}
        className="product-display-right-button"
        >Add to Cart</button>
        <div className="product-display-right-category">
            <span>Category: </span>Women ,T Shirt,Crop Top
        
        </div>
        <div className="product-display-right-category">
            <span>Tags : </span>Modern ,Latest ,Trending
        
        </div>
    </div>
    </div>
  )
}

export default ProductDisplay