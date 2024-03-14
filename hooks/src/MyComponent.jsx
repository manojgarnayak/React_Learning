import React from 'react'
import { useState } from 'react'

const MyComponent = () => {
    const [name, setName] = useState("guest")
    const [age, setAge] = useState(0)
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = () => {
        setName("Spongebob")
    }
    const updateAge = () => {
      setAge(age + 1)
    }
    const Employement = () => {
      setIsEmployed(!isEmployed)
    }
  return (
    <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={updateAge}>Increment Age</button>

        <p>Employment Status: {isEmployed ? "yes" : "no"}</p>
        <button onClick={Employement}>Employement</button>
    </div>
  )
}

export default MyComponent