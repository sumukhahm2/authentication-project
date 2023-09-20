import React from 'react'

const Context=React.createContext({
    token:'',
    isLoggedIn:false,
    setToken:(item)=>{},
    cleanToken:(item)=>{}
})
export default Context