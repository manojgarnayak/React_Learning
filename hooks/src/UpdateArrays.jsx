import React from 'react'
import { useState } from 'react'

const UpdateArrays = () => {

    const [fruits,setFruits] = useState(['Apple','Orange'])

    const handleAddFruit = () => {
        const newFruit = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setFruits(f => [...f, newFruit]);

    }
    const handleRemoveFruit = (index) => {
        setFruits(fruits.filter((_, i) => i !== index))
    }

  return (
    <div>
        <h2>List of Foods</h2>
        <ul>
            {fruits.map((fruit, index) => <li key={index} onClick={() => handleRemoveFruit(index)}>{fruit}</li>)}<br/><br/>
            <input type='text' id='foodInput' placeholder='Enter fruit name'/><br/>
            <button onClick={handleAddFruit}>Add Fruit</button>
        </ul>
    </div>
  )
}

export default UpdateArrays