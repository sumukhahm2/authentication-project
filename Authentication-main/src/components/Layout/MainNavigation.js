import { Link } from 'react-router-dom';
import React,{useState,useEffect,useContext} from'react'
import classes from './MainNavigation.module.css';
import Context from '../store/Context';

const MainNavigation = () => {
  const [loggedIn,setLoggedIn]=useState(false)
  const ctx=useContext(Context)
  useEffect(()=>{
      if(ctx.token!=='')
      { 
        setLoggedIn(true)
      }
  },[ctx.token])
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>
            {!loggedIn && <Link to='/auth'>Login</Link>}
          </li>
          <li>
            {loggedIn && <Link to='/profile'>Profile</Link>}
          </li>
          <li>
            {loggedIn && <button>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
