import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import BreadCrums from '../Components/BreadCrums/BreadCrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams(); // Captures the productId from the URL

  console.log("Product ID from URL:", productId); // Ensure this logs correctly

  const product = all_product?.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>; // Fallback if product doesn't exist
  }

  return (
    <div>
      <BreadCrums product={product} />
     <ProductDisplay product={product}/>
     <DescriptionBox/>
     <RelatedProducts/>
    </div>
  );
};

export default Product;
