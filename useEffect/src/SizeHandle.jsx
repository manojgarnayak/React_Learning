import React from 'react'
import { useState, useEffect } from 'react'

const SizeHandle = () => {

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
      window.addEventListener("resize", handleresize)
      return () => {
        window.removeEventListener("resize", handleresize)
      }
    }, [])

    useEffect(() => {
      document.title = `Size: ${width} x ${height}`
    },[width,height])

    const handleresize = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

  return (
    <div>
        <p>Window width: {width}px</p>
        <p>Window heigth: {height}px</p>
    </div>
  )
}

export default SizeHandle