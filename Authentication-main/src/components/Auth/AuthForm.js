import { useState, useRef } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const emailInputRef=useRef()
  const passwordInputRef=useRef()
  const formSubmitHandler=async(event)=>{
  event.preventDefault()
  const enteredEmail=emailInputRef.current.value
  const enteredPassword=passwordInputRef.current.value
  if(isLogin)
  {
   
  }
  else{
   setIsLoading(true)
  const response=await  fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC2ZbjyytCTRQbt6vZbsWoue1BxW7OXY-g',{
      method:'POST',
      body:JSON.stringify({
        email:enteredEmail,
        password:enteredPassword,
        returnSecureToken:true
      }),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data=await response.json();
    let errorMessage='Authentication Error!'
    if(data && data.error && data.error.message)
    {
      errorMessage=data.error.message;
      setError(errorMessage)
    }
    setIsLoading(false)
  }
  }

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={formSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={emailInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            ref={passwordInputRef}
            required
          />
        </div>
        <div className={classes.actions}>
          {error && <h1>{error}</h1>}
            {!isLoading  && <button >
            {isLogin ? 'Sign In' : 'Sign Up'}
            </button>}
            {isLoading && <h1>Sending request..</h1>}
            
        </div>
        <div className={classes.actions}>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
