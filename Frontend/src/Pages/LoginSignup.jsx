import React,{useState} from 'react'
import './CSS/LoginSignup.css'
const LoginSignup = () => {
  const [state,setState] = useState("Sign Up")
  return (
    <div className='login-signup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="text" placeholder='Your Email' />
          <input type="password" placeholder='Your Password' />   
        </div>
        <button>Sign Up</button>
        <p className='loginsignup-login'>Already have an account? <span >Login</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" />
           <span>Agree Terms of Use & Privacy Policy</span>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup