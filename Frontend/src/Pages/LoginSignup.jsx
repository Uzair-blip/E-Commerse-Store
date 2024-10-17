import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const navigate = useNavigate();
  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error before making a request
  
    // Check if "Agree to Terms" is checked for SignUp
    if (state === "SignUp" && !agreeToTerms) {
      setError("You must agree to the Terms of Use & Privacy Policy.");
      return;
    }
  
    setIsLoading(true); // Start loading spinner or disable button
  
    try {
      let res;
      if (state === "SignUp") {
        res = await axios.post("http://localhost:5000/api/user/signup", { name, email, password });
      } else {
        res = await axios.post("http://localhost:5000/api/user/login", { email, password });
      }
  
      // Handle success
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        navigate("/");  // Redirect on success
      } else {
        setError(res.data.message || "An error occurred. Please try again.");  // Set custom error message
      }
    } catch (err) {
      // Handle server or network errors
      setError("Failed to connect to the server. Please try again later.");
    } finally {
      setIsLoading(false);  // Stop loading spinner
    }
  };
  
  return (
    <div className='login-signup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            {state === "SignUp" && (
              <input
                type="text"
                placeholder='Your Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            )}
            <input
              type="email"
              placeholder='Your Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder='Your Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Processing..." : state === "SignUp" ? "Sign Up" : "Log In"}
          </button>
        </form>
        {state === "Login" ? (
          <p className='loginsignup-login'>
            Don't have an account? <span onClick={() => setState("SignUp")}>Sign Up</span>
          </p>
        ) : (
          <p className='loginsignup-login'>
            Already have an account? <span onClick={() => setState("Login")}>Log In</span>
          </p>
        )}
        {state === "SignUp" && (
          <div className="loginsignup-agree">
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={() => setAgreeToTerms(!agreeToTerms)}
            />
            <span>Agree to Terms of Use & Privacy Policy</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
