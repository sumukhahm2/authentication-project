import React,{useState,useEffect} from 'react'

import Context from './Context'

const AuthContextProvider=(props)=>{
  const [updatedToken,setIsToken]=useState(null)
  const userIsLoggedIn=!!updatedToken
  useEffect(()=>{
    setIsToken(localStorage.getItem('token'))
  },[])
  setTimeout(()=>{
     deleteToken()
  },300000)
  const storeToken=(item)=>{
    localStorage.setItem('token',item)
    setIsToken(item)
    
  }
  const deleteToken=()=>{
    setIsToken(null)
    localStorage.removeItem('token')
  }
  const contextValue={
    token:updatedToken,
    isLoggedIn:userIsLoggedIn,
    setToken:storeToken,
    cleanToken:deleteToken
  }
  return(
    <Context.Provider value={contextValue}>
        {props.children}
     </Context.Provider>
  )
}
export default AuthContextProvider

