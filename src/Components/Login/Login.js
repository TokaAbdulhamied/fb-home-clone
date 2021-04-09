import React, { useContext} from 'react'
import {auth, provider} from '../../store/firebase'
import {UserContext} from '../../store/Provider' 
import { actionTypes } from '../../store/reducer';
import './Login.css';
function Login() {
  // eslint-disable-next-line
  const [{user}, dispatch]  = useContext(UserContext)

  const signHandler =()=>{
    // import auth and provider from local firebase 
    auth.signInWithPopup (provider)
    .then ((respose)=> {
      dispatch ({
        type:actionTypes.ADD_USER, 
        user:respose.user
      })
    })
    .catch ((error) => alert (error.message))
    
  }

  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://www.elzahrawy.com/wp-content/uploads/2021/01/facebook_logos_PNG19754.png" alt="logo"/>
      </div>
      <h1>facebook</h1>
      <button type="submit" onClick={signHandler} >
        Sign in
      </button>
    </div>
  )
}

export default Login
