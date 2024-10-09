import React from 'react';
import './BreadCrums.css';
import arrow_icon from "../../assets/breadcrum_arrow.png";

const BreadCrums = (props) => {
  const { product } = props; 
  return (
    <div className='breadcrum'>
      <img src={arrow_icon} alt='' />Home
      <img src={arrow_icon} alt='' />Shop
      <img src={arrow_icon} alt='' />{product?.category}
      <img src={arrow_icon} alt='' />{product?.name}  
    </div>
  );
};

export default BreadCrums;
