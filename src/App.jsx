import { useState } from 'react'
import './App.css'
import Recetas from './components/Recetas'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Recetas/>
    </>
  )
}

export default App
