import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SIGEUP from './sigeup'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SIGEUP />
    </>
  )
}

export default App
