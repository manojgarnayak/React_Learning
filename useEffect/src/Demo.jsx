import React from 'react'
import { useState, useEffect } from 'react'

const Demo = () => {

    const [count, setCount] = useState(0)
    const [color, setColor] = useState('green')

    useEffect(() => {
      document.title = `Count: ${count} ${color}`
    }, [count,color])

    const addCount = () => {
        setCount(c => c + 1)
    }
    const subCount = () => {
        setCount(c => c - 1)
    }
    const changeColor = () => {
      setColor(c => c === 'green' ? 'red' : 'green')
    }
  return (
    <div>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>ADD</button>
        <button onClick={subCount}>SUB</button><br/>
        <button onClick={changeColor}>Change Color</button>
    </div>
  )
}

export default Demo