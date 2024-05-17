import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/title/Title'

const App=()=> {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero />
    <div className='container'>
    <Title subtitle='our program' title='What We Offer'/>
    <Programs />

    </div>
    
      
    </>
  )
}

export default App
