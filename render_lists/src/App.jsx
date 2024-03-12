import React from 'react'
import List from './List'
const App = () => {

  const fruits = [{name: 'apple', calories: 96},
     {name: 'orange', calories: 66},
      {name: 'banana', calories: 86},
      {name: 'pineapple', calories: 196}]
  return (
    <div><List items={fruits} category='fruits'/></div>
  )
}

export default App