import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/title/Title'
import About from './components/about/About'
import Campush from './components/campush/Campush'
import Tesimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'


const App=()=> {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero />
    <div className='container'>
    <Title subtitle='our program' title='What We Offer'/>
    <Programs />
    <About/>
    <Title subtitle='Gallery' title='Campus Photos'/>
    <Campush/>
    <Title subtitle='TESTIMONIALS' title='What Student Says'/>
    <Tesimonials/>
    <Title subtitle='CONTACT US' title='Get in Touch'/>
    <Contact/>
    

    </div>
    
      
    </>
  )
}

export default App
