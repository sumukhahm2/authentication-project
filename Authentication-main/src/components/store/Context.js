import React from 'react'

const Context=React.createContext({
    token:'',
    setToken:(item)=>{},
    cleanToken:(item)=>{}
})
export default Context