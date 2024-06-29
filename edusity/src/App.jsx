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
import Footer from './components/footer/Footer'
import VideoPlayer from './components/videoPlayer/VideoPlayer'


const App=()=> {
  const [playState, setPlayState] = useState(false);

  return (
    <>
    <Navbar />
    <Hero />
    <div className='container'>
    <Title subtitle='our program' title='What We Offer'/>
    <Programs />
    <About setPlayState={setPlayState}/>
    <Title subtitle='Gallery' title='Campus Photos'/>
    <Campush/>
    <Title subtitle='TESTIMONIALS' title='What Student Says'/>
    <Tesimonials/>
    <Title subtitle='CONTACT US' title='Get in Touch'/>
    <Contact/>
    <Footer/>

    <VideoPlayer playState={playState} setPlayState={setPlayState} />
    

    </div>
    
      
    </>
  )
}

export default App
