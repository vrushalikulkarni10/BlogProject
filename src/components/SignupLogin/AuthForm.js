import React, { useState } from 'react';
import './AuthForm.css';


export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
    return (
    <div className='container'>
        <div className='form-container'>
            {isLogin ? <>
            <div className='form'>
            <h2>Login</h2>
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='password'/>
            <button>Login</button>
            <p>Not a member?<a href = '#' onClick={()=>setIsLogin(false)}>Sign-up</a></p>
            </div>
            </> : <>
            <div className='form'>
            <h2>Sign-Up Form</h2>
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='password'/>
            <input type='password' placeholder='conform password'/>
            <button>Signup</button>
            <p>Already a member?<a href = '#' onClick={()=>setIsLogin(true)}>Login</a></p>
            </div>
            </>}
        </div>
    </div>
  )
}
