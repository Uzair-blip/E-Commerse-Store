import React, { useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import { useContext } from 'react'
import nav_dropdown from "../../assets/nav_dropdown.png"

const Navbar = () => {
    const [menu,setMenu] = useState("shop")
    const {gettotalCartItem}=useContext(ShopContext)
    const menuRef=useRef()
    const dropdown_toggle=(e)=>{
menuRef.current.classList.toggle("nav-menu-visible")
e.target.classList.toggle("open")
    }
  return (
    <div className='Navbar'>
        <div className="nav-logo">
            <img src={logo} alt="logo" />
            <p>SHOPPER</p>
            </div> 
            <img className='dropdown-icon' src={nav_dropdown} alt="dropdown" onClick={dropdown_toggle}/>  
            <ul ref={menuRef} className='nav-menu'>
                 <li onClick={()=>setMenu("shop")}><Link to="/"  style={{textDecoration:"none",color:"black"}}>Shop</Link> {menu==="shop" ? <hr/> : ""}</li>
                <li onClick={()=>setMenu("men")}><Link to="/mens"  style={{textDecoration:"none",color:"black"}}>Men</Link> {menu==="men" ? <hr/> : ""}</li>
                <li onClick={()=>setMenu("women")}><Link to="/womens"  style={{textDecoration:"none",color:"black"}}>Women</Link> {menu==="women" ? <hr/> : ""}</li>
                <li onClick={()=>setMenu("kids")}><Link to="/kids"  style={{textDecoration:"none",color:"black"}}>Kids</Link> {menu==="kids" ? <hr/> : ""}</li>   
            </ul>
            <div className="nav-login-cart">
                <button><Link to="/login"  style={{textDecoration:"none",color:"black"}}>Login</Link></button>
                <Link to="/cart"  style={{textDecoration:"none",color:"black"}}>  <img src={cart_icon} alt="cart" /></Link>
                <div className="cart-item-count">{gettotalCartItem()}</div>
            </div>
    </div>
  )
}

export default Navbar