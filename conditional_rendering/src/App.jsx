import React from 'react'
import UserGreeting from './UserGreeting'

const App = () => {
  return (
    <>
      <UserGreeting isLoggedIn={false} username="User"/>
    </>
  )
}

export default App