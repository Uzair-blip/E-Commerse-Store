import React, { createContext,useState } from 'react';
import all_product from '../assets/all_product'; // Ensure this file exists and exports properly
export const ShopContext = createContext(null);

const defaultcart=()=>{
  let cart={}
  for(let i=1;i<all_product.length+1;i++){
    cart[i]=0
  }
  return cart
}
const ShopContextProvider = (props) => {
    const [cartItems,setcartItems]=useState(defaultcart())
    
    // Add item to cart
    const addToCart = (itemid) => {
        setcartItems((prev) => {
          console.log("Previous cart:", prev);
          return { ...prev, [itemid]: prev[itemid] + 1 };
        });
        console.log("Updated cart:", cartItems);
      };
      // Remove item from cart
    const removeFromCart=(itemid)=>{
        setcartItems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
        console.log("Updated cart:", cartItems);
    }
    // Calculate the total cart amount
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item]; // Using new_price to match your display
                }
            }
        }
        return totalAmount; // Return the total amount after the loop
    }
    
    const gettotalCartItem=()=>{
        let totalitem=0
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalitem+=cartItems[item]
            }
        }
        return totalitem
    }

    const contextValue = { all_product,cartItems,addToCart,removeFromCart,getTotalCartAmount,gettotalCartItem }; // Ensure `all_product` is defined and correct

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;