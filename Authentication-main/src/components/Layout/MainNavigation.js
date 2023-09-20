import { Link,useHistory } from 'react-router-dom';
import React,{useContext} from'react'
import classes from './MainNavigation.module.css';
import Context from '../store/Context';

const MainNavigation = () => {
 const histry=useHistory()
  const ctx=useContext(Context)
  const loggedIn=ctx.isLoggedIn
  const logoutHandler=()=>{
    ctx.cleanToken()
    histry.replace('/auth')
  }
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
            {loggedIn && <button onClick={logoutHandler}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
