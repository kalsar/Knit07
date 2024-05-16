import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'

const App=()=> {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero />
      
    </>
  )
}

export default App
