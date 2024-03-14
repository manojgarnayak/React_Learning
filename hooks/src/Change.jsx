import React from 'react'
import { useState } from 'react'

const Change = () => {

    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState(0)
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("")

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value)
    }

    const handleCommentChange = (e) => {
        setComment(e.target.value)
    }

    const handlePaymentChange = (e) => {
        setPayment(e.target.value)
    }

    const handleShippingChange = (e) => {
        setShipping(e.target.value)
    }

  return (
    <div>
        <input value={name} onChange={handleNameChange} placeholder='Enter anything'/>
        <p>Name: {name}</p>

        <input value={quantity} onChange={handleQuantityChange} type='number'/>
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleCommentChange} placeholder='Write a message to us'/>
        <p>Message: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="MasterCard">MasterCard</option>
            <option value="Rupay Card">Rupay Card</option>
            <option value="Credit Card">Credit Card</option>
        </select>
        <p>Payment: {payment}</p>

        <label>
        <input type="radio" value="Pick Up" checked={shipping === 'Pick Up'} onChange={handleShippingChange}/>
            Pick Up
        </label><br/>
        <label>
        <input type="radio" value="Home Delivery" checked={shipping === 'Home Delivery'} onChange={handleShippingChange}/>
            Home Delivery
        </label>
        <p>Shipping Status: {shipping}</p>
    </div>
  )
}

export default Change