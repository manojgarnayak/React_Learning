import React from 'react'
import { useState, useRef, useEffect } from 'react'
const Component = () => {

    const ref = useRef(0)

    useEffect(() => {
        console.log("Component Rendered")
    })
    const handleClick = () =>{
        ref.current = ref.current + 1
        console.log(ref.current);
    }
  return (
    <>
        <button onClick={handleClick}>
            Click me!
        </button>
        <input/>
    </>
  )
}

export default Component