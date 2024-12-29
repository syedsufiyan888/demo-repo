import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const countfn=()=>{
    setCount((prevcount)=>(prevcount+1))
  }
  return (
    <>
      <div>
        <h2>{count}</h2>
        <button onClick={countfn}>Add 1</button>
      </div>
    </>
  )
}

export default App
