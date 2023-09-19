import React,{useState} from 'react'

import Context from './Context'

const AuthContextProvider=(props)=>{
  const [updatedToken,setIsToken]=useState('')
  const storeToken=(item)=>{
    setIsToken(item)
    
  }
  const deleteToken=()=>{
    setIsToken('')
  }
  const contextValue={
    token:updatedToken,
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

