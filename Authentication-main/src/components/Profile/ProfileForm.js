import classes from './ProfileForm.module.css';
import Context from '../store/Context';
import { useContext,useRef } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
const ProfileForm = () => {
  const ctx=useContext(Context)
  const updatePasswordRef=useRef()
  const histry=useHistory()
  const updatePasswordHandler=async(event)=>{
    event.preventDefault()
    const response= await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyC2ZbjyytCTRQbt6vZbsWoue1BxW7OXY-g',{
      method:'POST',
      body:JSON.stringify({
       idToken:ctx.token,
       password:updatePasswordRef.current.value,
       returnSecureToken:false
      })
    })
    const data= await response.json();
    histry.replace('/')
    console.log(data)
  }
  return (
    <form className={classes.form} onSubmit={updatePasswordHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={updatePasswordRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
