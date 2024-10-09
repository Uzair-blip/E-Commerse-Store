import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);  // Access all products from ShopContext
  
  return (
    <div className='shop-category'>
      <img className='shop-banner' src={props.banner} alt='banner'/>
      <div className="shop-category-sort">
        <p>
          <span>Showing 1-12 of 36 products</span>
        </p>
        <div className="shop-category-sort-by">
          Sort by  <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shop-category-products">
        {all_product.map((item) => {
          if (props.category === item.category) {
            return (
              <Item
                key={item.id} 
                id={item.id} // Pass the correct product id here
                name={item.name} 
                image={item.image} 
                new_price={item.new_price} 
                old_price={item.old_price} 
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shop-category-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
