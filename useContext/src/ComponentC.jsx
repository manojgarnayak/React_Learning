import React from 'react'
import ComponentD from './ComponentD'
import { useContext } from 'react'
import { userContext } from './ComponentA'
const ComponentC = () => {

  const user = useContext(userContext)
  return (
    <div className='box'>
        <h1>ComponentC</h1>
        <h2>{`Hello once again ${user}`}</h2>
        <ComponentD />
    </div>
  )
}

export default ComponentC