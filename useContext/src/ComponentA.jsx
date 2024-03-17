import React from 'react'
import ComponentB from './ComponentB'
import { useState, createContext } from 'react'

export const userContext = createContext()

const ComponentA = () => {

    const [user, setUser] = useState("Bhalu")
  return (
    <div className='box'>
        <h1>ComponentA</h1>
        <h2>{`Hello ${user}`}</h2>
        <userContext.Provider value={user}>
            <ComponentB user={user}/>
        </userContext.Provider>
        
    </div>
  )
}

export default ComponentA