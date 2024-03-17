import React from 'react'
import { useEffect, useState } from 'react'

const DigitalClock = () => {

  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const intervalId = setInterval(() => {
        setTime(new Date())
    },1000)
    return () => {
        clearInterval(intervalId)
    }
  },[])

  const formatTime = () => {
    let hrs = time.getHours();
    const mins = time.getMinutes();
    const secs = time.getSeconds();
    const meridiem = hrs >= 12 ? "PM" : "AM"

    hrs = hrs % 12 || 12;

    return `${AddZero(hrs)}:${AddZero(mins)}:${AddZero(secs)} ${meridiem}`
  }

  const AddZero = (number) => {
    return (number < 10 ? "0" : "") + number
  }

  return (
    <div className='clock-container'>
        <div className='clock'>
            <span>{formatTime()}</span>
        </div>
    </div>
  )
}

export default DigitalClock