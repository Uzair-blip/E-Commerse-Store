import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive offers on your Gmail</h1>
        <p>Subscribe to our newsletter and get 10% off your first purchase</p>
        <div className='form'>  
            <input type='text' placeholder='Your Email'/>
            <button>Subscribe</button>
        </div>
      
    </div>
  )
}

export default NewsLetter