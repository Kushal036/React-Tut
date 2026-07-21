import { useState } from 'react'
import Chai from './Chai.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>This is a viet project</h1>
      <h2>Chai is been made </h2>
      <Chai/>
    </>
  )
}

export default App
