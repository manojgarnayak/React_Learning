import React from 'react'
import { useState } from 'react'

const UpdateArrofObjects = () => {

    const [cars, setCars] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake, setCarMake] = useState("")
    const [carModel, setCarModel] = useState("")

    const handleAddCar = () => {
        const newCar = {year: carYear, make: carMake, model:carModel}
        setCars(c => [...c, newCar])
        setCarYear(new Date().getFullYear())
        setCarMake("")
        setCarModel("")
    }
    const handleRemoveCar = (index) => {
        setCars(c => c.filter((_,i) => i !== index))
    }
    const handleYearChange = (e) => {
        setCarYear(e.target.value)
    }
    const handleMakeChange = (e) => {
        setCarMake(e.target.value)
    }
    const handleModelChange = (e) => {
        setCarModel(e.target.value)
    }

    return (
    <div>
        <h2>List of Car Objects</h2>
        <ul>
            {cars.map((car,index) => 
                    <li id={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>)}
        </ul>
        <input type='number' value={carYear} onChange={handleYearChange}/><br/>
        <input type='text' value={carMake} placeholder='Enter Car maker' onChange={handleMakeChange}/><br/>
        <input type='text' value={carModel} onChange={handleModelChange} placeholder='Enter the model of the car'/><br/>
        <button onClick={handleAddCar}>Add Car</button>
    </div>
  )
}

export default UpdateArrofObjects