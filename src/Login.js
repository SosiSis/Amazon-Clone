import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom';


function Login() {
    const [email, setEmail]=useState('')
const [password, setPassword]=useState('')
// react lay reload endiyareg silemanfelge
const signIn = (e) => {
    e.preventDefault();
  };
  
  const register = (e) => {
    e.preventDefault();
  };
  return (
    <div class='login'>
        <Link to='/'>
        <img className='login__logo'
           src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img> 
           </Link>
           <div className='login__container'>
            <h1>Sign-In</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text'
                value={email}
                onChange={(e=>setEmail(e.target.value))}
                />
                 <h5>Password</h5>
                <input type='password'
                value={password}
                onChange={(e=>setPassword(e.target.value))}
                 /><br />
                 <button type='submit'
                 onclick={signIn}
                 className='login__signInbutton'>Sign in</button> <br />
                 
                 <button type='submit'
                 onclick={register}
                 className='login__registerbutton'>Create new account</button>
            </form>
           </div>
    </div>
     
     
     
  )
}

export default Login