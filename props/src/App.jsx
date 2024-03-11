import Student from "./Student"

const App = () => {
  return (
    <>
      <Student name='SpongeBob' age={24} isStudent={true}/>
      <Student name='Patrick' age={27} isStudent={false}/>
      <Student name='Squidward' age={29} isStudent={false}/>
    </>
  )
}

export default App