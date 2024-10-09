import React from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import { useContext } from 'react';
import remove_icon from '../../assets/cart_cross_icon.png';

const CartItems = () => {
  const { all_product, removeFromCart, getTotalCartAmount, cartItems } = useContext(ShopContext);

  return (
    
    <div className='cartitems'>
      <div className="cartitem-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) { // Correct condition here
          return (
            <>
            <div key={e.id} className="cartitem-format">
              <img className='cartitem-image' src={e.image} alt="" />
              <p className='cartitem-name'>{e.name}</p>
              <p className='cartitem-price'>${e.new_price}</p>
              <button className='cartitem-quantity-button'>{cartItems[e.id]}</button>
              <p className='cartitem-total'>${e.new_price * cartItems[e.id]}</p>
              <img className='cartitem-remove-icon' src={remove_icon} alt="remove" onClick={() => removeFromCart(e.id)} />
        
            </div>
            <hr />
            </>
          );
        }
        return null; // Return null if item is not in cart
      })}
      
      <div className="cart-item-down">  
        <h1 className='cart-item-total-heading'>Cart Totals</h1>
        <div className="cart-item-total">
          <p>Subtotal</p>
          <p>${getTotalCartAmount()}</p>
        </div>
        <hr />
        <div className="cart-item-total">
          <p>Shipping Fee</p>
          <p>Free</p>
        </div>
        <hr />
        <div className="cart-item-total">
          <p>Total</p>
          <p>${getTotalCartAmount()}</p>
        </div>
        <hr />

        <div className="cart-item-promo ">
            <p>Add a promo code</p>
            <div className="cart-item-promocode">
          <input type="text" placeholder="Promo Code" />
          <button>Submit</button>
          </div>
        </div>
      </div>
        <div className="cart-item-check-out">
          <button>Proceed to Checkout</button>
        </div>      
    </div>
  );
}

export default CartItems;
