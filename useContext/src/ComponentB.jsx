import React from 'react'
import ComponentC from './ComponentC'
import { useContext } from 'react'
import { userContext } from './ComponentA'
const ComponentB = () => {

  const user = useContext(userContext)

  return (
    <div className='box'>
        <h1>ComponentB</h1>
        <h2>{`Hello Again ${user}`}</h2>
        <ComponentC />
    </div>
  )
}

export default ComponentB