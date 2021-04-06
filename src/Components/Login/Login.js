import React from 'react'
import './Login.css';
function Login() {
  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://www.elzahrawy.com/wp-content/uploads/2021/01/facebook_logos_PNG19754.png" alt="logo"/>
      </div>
      <h1>facebook</h1>
      <button type="submit" >
        Sign in
      </button>
    </div>
  )
}

export default Login
