import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox' >
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews</div>
        </div>
        <p>
An e-commerce platform offering a wide range of fashion items for all ages.
Our products are carefully curated to ensure quality and style.
We pride ourselves on excellent customer service and fast shipping.
Browse through our extensive collection of clothing, accessories, and footwear.
Find the perfect outfit for any occasion, from casual wear to formal attire.
        </p>
    </div>
  )
}

export default DescriptionBox