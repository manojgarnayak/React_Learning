import React from 'react'
import { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    const Increment = () => {
        setCount(count + 1)
    }

    const Decrement = () => {
        if (count > 0) setCount(count - 1)
    }

    const Reset = () => {
        setCount(0)
    }

  return (
    <div className='counter-container'>
        <p className='count-display'>{count}</p>
        <button className='counter-button' onClick={Increment}>Increment</button>
        <button className='counter-button' onClick={Reset}>Reset</button>
        <button className='counter-button' onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default Counter